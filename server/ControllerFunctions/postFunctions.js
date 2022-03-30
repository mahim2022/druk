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

// export const createBar = async (req, res) => {
// 	const post = req.body;
// 	const newPost = new Bar({ ...post });
// 	try {
// 		await newPost.save();
// 		res.status(201).json(newPost);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };
