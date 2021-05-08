const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
	documentName: {
		type: String,
	},
	documentPath: {
		type: String,
	}
});

const Data = mongoose.model("datas", dataSchema);

module.exports = Data;
