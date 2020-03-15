const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema for todo
const RequestSchema = new Schema({
  phone: {
    type: String,
    required: true
  },
  zip: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now()
  },
  requestText: {
    type: String,
    required: true
  },
  soundFile: {
    type: String
  }
});

//create model for todo
const Request = mongoose.model("request", RequestSchema);

module.exports = Request;
