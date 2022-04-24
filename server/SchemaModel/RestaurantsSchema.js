import mongoose from "mongoose";
const barModel = new mongoose.Schema({
	barName: { type: String },
	location: { type: String },
});

const menuItem = new mongoose.Schema({
	barId: { type: mongoose.Schema.Types.ObjectId },
	itemName: { type: String },
	vol: { type: mongoose.Schema.Types.Number },
	price: { type: mongoose.Schema.Types.Number },
});

export const Bar = mongoose.model("Bar", barModel);
export const MenuItem = mongoose.model("MenuItem", menuItem);
