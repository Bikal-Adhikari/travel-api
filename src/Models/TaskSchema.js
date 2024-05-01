import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  name: { type: "string", required: true },
  info: { type: "string", required: true },
  image: { type: "string", required: true },
  price: { type: "string", required: true },
  duration: { type: "string", required: true },
  highlights: { type: ["string"], required: true },
  includes: { type: ["string"], required: true },
});

export default mongoose.model("Task", taskSchema);
