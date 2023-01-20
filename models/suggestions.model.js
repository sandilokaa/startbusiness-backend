const mongoose = require("mongoose");
const { Schema } = mongoose;

const suggestionsSchema = new Schema({
	username: {
		type: "String",
		required: true,
	},
	email: {
		type: "String",
		required: true,
	},
	suggestion: {
		type: "String",
		required: true,
	},
});

const suggestions = mongoose.model("suggestions", suggestionsSchema);

module.exports = suggestions;