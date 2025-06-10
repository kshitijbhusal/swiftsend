import mongoose from "mongoose";

const textSchema = new mongoose.Schema({
  text_id: Number,
  text: String,

}, {timestamps: true} );

const Text = mongoose.model("Text", textSchema)


export default Text;