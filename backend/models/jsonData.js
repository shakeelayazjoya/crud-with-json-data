const mongoose = require("mongoose");

const jsonDataSchema = new mongoose.Schema({
  data: { type: Object, required: true },
});

module.exports = mongoose.model("JsonData", jsonDataSchema);
