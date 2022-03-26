import mongoose from "mongoose";

const Menu = new mongoose.Schema({
	ownerId: { type: Number },
	menuItem: [
		{
			itemName: { type: String },
			vol: { type: Number },
			price: { type: Number },
		},
	],
});

export const BarMenu = mongoose.model("BarMenu", Menu);
