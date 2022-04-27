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

// const orderItemSchema = new mongoose.Schema({
// 	orderId: { type: mongoose.Schema.Types.ObjectId },
// 	itemId: { type: mongoose.Schema.Types.ObjectId },
// 	count: { type: mongoose.Schema.Types.Number },
// });
const orderListSchema = new mongoose.Schema({
	barId: { type: mongoose.Schema.Types.ObjectId },
	customerId: { type: mongoose.Schema.Types.ObjectId },
	orderDate: { type: mongoose.Schema.Types.Date },
	total: { type: mongoose.Schema.Types.Number },
	address: { type: String },
	paymentType: { type: String },
	items: [
		{
			itemId: { type: mongoose.Schema.Types.ObjectId },
			itemName: { type: String },
			vol: { type: mongoose.Schema.Types.Number },
			count: { type: mongoose.Schema.Types.Number },
		},
	],
});

export const Bar = mongoose.model("Bar", barModel);
export const MenuItem = mongoose.model("MenuItem", menuItem);
// export const OrderItem = mongoose.model("OrderItem", orderItemSchema);
export const OrderList = mongoose.model("OrderList", orderListSchema);
