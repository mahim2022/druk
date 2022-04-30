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
	image: { type: String },
});

const orderListSchema = new mongoose.Schema(
	{
		barId: { type: mongoose.Schema.Types.ObjectId },
		customerId: { type: mongoose.Schema.Types.ObjectId },
		// orderDate: { type: mongoose.Schema.Types.Date },
		total: { type: mongoose.Schema.Types.Number },
		address: { type: String },
		paymentType: { type: String },
		orderStatus: { type: String },
		items: [
			{
				itemId: { type: mongoose.Schema.Types.ObjectId },
				itemName: { type: String },
				vol: { type: mongoose.Schema.Types.Number },
				count: { type: mongoose.Schema.Types.Number },
			},
		],
	},
	{ timestamps: true }
);

const ProcessedOrderSchema = new mongoose.Schema(
	{
		invoiceId: { type: mongoose.Schema.Types.ObjectId },
		orderStatus: { type: String },
	},
	{ timestamps: true }
);
ProcessedOrderSchema.index({ createdAt: 1 }, { expireAfterSeconds: 120 });

export const Bar = mongoose.model("Bar", barModel);
export const MenuItem = mongoose.model("MenuItem", menuItem);
export const OrderList = mongoose.model("OrderList", orderListSchema);
export const ProcessedOrder = mongoose.model(
	"ProcessedOrder",
	ProcessedOrderSchema
);
