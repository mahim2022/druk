import { Bar } from "../SchemaModel/RestaurantsSchema.js";
import mongoose from "mongoose";
import { MenuItem } from "../SchemaModel/RestaurantsSchema.js";
// const mongoose = require("mongoose");

export const getBar = async (req, res) => {
	try {
		const post = await Bar.find();
		res.status(200).json(post);
	} catch (error) {
		res.status(400).json(error);
	}
};

export const getMenu = async (req, res) => {
	const { id } = req.params;
	try {
		// if (mongoose.Types.ObjectId.isValid(id))
		// 	return res.status(404).json(`No store with id: ${id}`);
		const Menu = await MenuItem.find({ barId: id });
		if (!Menu) return res.status(401).json(`No items currently on menu`);
		res.status(200).json(Menu);
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

	///////old schema
	// await Bar.findByIdAndUpdate(
	// 	id,
	// 	{ $push: { menuItem: result } },
	// 	{ new: true }
	// );

	const newItem = new MenuItem({
		...result,
		barId: id,
	});

	try {
		await newItem.save();
		res.status(200).json(newitem);
	} catch (error) {
		res.status(401).json(error);
	}
};

export const editItem = async (req, res) => {
	const { id } = req.params; ////DocumentId//BarId
	const result = req.body; ////this contains subdocument id or itemid
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).send(`No Item with id: ${id}`);
	}

	// await Bar.findOneAndUpdate(
	// 	////checking doc id first ad then menuItem id ////////
	// 	///The $elemMatch operator matches documents that contain an array field with at least one element that matches all the specified query criteria.//
	// 	{ _id: id, menuItem: { $elemMatch: { _id: result.itemId } } },
	// 	{
	// 		//prettier-ignore
	// 		$set: {
	// 			////$set sets the element from the array//
	// 			"menuItem.$.itemName": result.itemName,
	// 			"menuItem.$.vol": result.vol,
	// 			"menuItem.$.price": result.price,
	// 			// "menuItem._id":result.itemId,
	// 		},
	// 	},
	// 	{ new: true }
	// );

	try {
		await MenuItem.findByIdAndUpdate(id, {
			itemName: result.itemName,
			vol: result.vol,
			price: result.price,
		});
		res.status(200).json(result);
	} catch (error) {
		res.status(400).json(error);
	}

	// console.log(id);

	// console.log(result);
	// res.json(result);
};

export const DeleteItem = async (req, res) => {
	const { itemId } = req.params;
	// if (!mongoose.Types.ObjectId.isValid(id)) {
	// 	return res.status(404).send(`No item with id: ${id}`);
	// }
	////$pull pulls the element from the array//
	// await Bar.findByIdAndUpdate(
	// 	{ _id: id, menuItem: { $elemMatch: { _id: itemId } } },
	// 	//prettier-ignore
	// 	{ "$pull": { "menuItem": { "_id": itemId } } },
	// 	{ safe: true, multi: true }
	// );
	try {
		await MenuItem.findByIdAndRemove(itemId);
		res.status(200).json({ message: "Delete Successful" });
	} catch (error) {
		res.status(400).json(error);
	}
	// console.log(itemId);

	// res.json({ message: `Item deleted succesful` });
};
