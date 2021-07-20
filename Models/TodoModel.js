const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
    required: true,
  },
});

const TodoModel = mongoose.model("TodoModel" , TodoSchema);

module.exports = TodoModel;
