const mongoose = require("mongoose");
const { Schema } = mongoose;

const adminsSchema = new Schema({
	username: {
		type: "String",
		required: true,
	},
	email: {
		type: "String",
		required: true,
	},
	password: {
		type: "String",
		required: true,
	},
});

const admins = mongoose.model("admins", adminsSchema);

module.exports = admins;