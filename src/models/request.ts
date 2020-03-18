import * as mongoose from "mongoose";
import { Schema, Document } from "mongoose";

export interface IRequest extends Document {
  phone: string;
  zip: string;
  request: number;
  timestamp: Date;
}

const RequestSchema: Schema = new Schema({
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
export default mongoose.model<IRequest>("request", RequestSchema);
