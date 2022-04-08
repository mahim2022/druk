import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	phoneNumber: {
		type: Number,
		required: true,
	},
	email: { type: String, required: true },
	password: {
		type: String,
		required: true,
	},
});

export const User = mongoose.model("User", UserSchema);
