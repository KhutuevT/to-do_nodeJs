const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = mongoose.Schema({
  text: String,
  isCheck: Boolean,
});

module.exports = Task = mongoose.model("task", taskSchema);
