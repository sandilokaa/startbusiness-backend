const mongoose = require("mongoose");
const { Schema } = mongoose;

const productsSchema = new Schema({
	name: {
		type: "String",
		required: true,
	},
	price: {
		type: "Number",
		required: true,
	},
	category: {
		type: "String",
		required: true,
	},
	description: {
		type: "String",
		required: true,
	},
	attention: {
		type: "String",
		required: true,
	},
	picture: {
		type: "String",
		required: true,
	},
    adminId: {
        type: mongoose.Schema.Types.ObjectId,
		ref: "admins",
    }
});

const products = mongoose.model("products", productsSchema);

module.exports = products;