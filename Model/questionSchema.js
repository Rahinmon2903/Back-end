import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true
  },
  options: {
    type: [String],
    default: []
  },
  correctAnswer: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ["mcq", "coding"],
    required: true
  }
}, { timestamps: true });

const Question = mongoose.model("Question", questionSchema);
export default Question;