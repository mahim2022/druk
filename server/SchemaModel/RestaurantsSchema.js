const mongoose = require("mongoose");

const barModel = new mongoose.Schema({
	name: { type: String },
	location: { type: String },
	menu: {
		type: [
			{
				drinkName: { type: String },
				volume: { type: String },
				price: { type: Number },
			},
		],
	},
});

export const Bar = mongoose.model("Bar", barModel);
