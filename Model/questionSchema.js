import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  questionText: String,
  options: [String],
  correctAnswer: String,
  type: {
    type: String,
    enum: ["mcq", "coding"]
  }
}, { timestamps: true });

const Question = mongoose.model("Question", questionSchema);
export default Question;