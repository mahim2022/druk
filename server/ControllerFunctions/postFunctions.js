import { Bar } from "../SchemaModel/RestaurantsSchema.js";
import mongoose from "mongoose";
// const mongoose = require("mongoose");

export const getPosts = async (req, res) => {
	try {
		const post = await Bar.find();
		res.status(200).json(post);
	} catch (error) {
		res.status(400).json(error);
	}
};

export const addItem = async (req, res) => {
	const { id } = req.params;
	const result = req.body;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).send(`No store with id ${id}`);
	}

	await Bar.findByIdAndUpdate(
		id,
		{ $push: { menuItem: result } },
		{ new: true }
	);

	// console.log(result);

	res.json(result);
};

export const editItem = async (req, res) => {
	const { id } = req.params; ////DocumentId//BarId
	const result = req.body; ////this contains subdocument id or itemid

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).send(`No post with id: ${id}`);
	}

	// const updatedPost = { ...result, _id: id };

	await Bar.findOneAndUpdate(
		////checking doc id first ad then menuItem id //////
		{ _id: id, menuItem: { $elemMatch: { _id: result.itemId } } },
		{
			//prettier-ignore
			$set: {
				
				"menuItem.$.itemName": result.itemName,
				"menuItem.$.vol": result.vol,
				"menuItem.$.price": result.price,
				// "menuItem._id":result.itemId,
			},
		},
		{ new: true }
	);

	res.json(result);
};
