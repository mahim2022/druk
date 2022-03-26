import mongoose from "mongoose";
const barModel = new mongoose.Schema({
	barName: { type: String },
	location: { type: String },
});

export const Bar = mongoose.model("Bar", barModel);
