import mongoose, { SchemaTypes } from "mongoose";
import STATUS from "../models/Status.js";

const todoSchema = mongoose.Schema(
  {
    data: {
      type: String,
      required: true,
    },
    deadline: Date,
    status: {
      type: String,
      required: true,
      default: STATUS.OPEN,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Todo", todoSchema);
