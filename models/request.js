const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
  phone: {
    type: String,
    required: true
  },
  zip: {
    type: String,
    required: true
  },
  request: {
    type: Number,
    required: true,
    min: -1,
    max: 9
  },
  timestamp: {
    type: Date,
    default: Date.now()
  }
});

// Create model for request
const Request = mongoose.model("request", RequestSchema);

module.exports = Request;
