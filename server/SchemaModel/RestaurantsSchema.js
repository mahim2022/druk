import mongoose from "mongoose";
const barModel = new mongoose.Schema({
	barName: { type: String },
	// barLocation: { type: String },
	// barMenu: {
	// 	type: [
	// 		{
	// 			drinkName: { type: String },
	// 			description: { type: String },
	// 			volume: { type: String },
	// 			price: { type: Number },
	// 		},
	// 	],
	// },
});

export const Bar = mongoose.model("Bar", barModel);
