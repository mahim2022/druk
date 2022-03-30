import mongoose from "mongoose";
const barModel = new mongoose.Schema({
	barName: { type: String },
	location: { type: String },
	menuItem: [
		{
			itemName: { type: String },
			vol: { type: Number },
			price: { type: Number },
		},
	],
});

export const Bar = mongoose.model("Bar", barModel);
