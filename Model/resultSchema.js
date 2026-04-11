import mongoose from "mongoose";

const resultSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    interview: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Interview",
      required: true
    },

    score: {
      type: Number,
      default: 0
    },
 //“In result schema, we store answers. For each question, we check selected answer vs correct answer from Question schema and store true/false.”

// 100% correct
    answers: [
      {
        questionId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Question",
          required: true
        },
        selectedAnswer: {
          type: String,
          required: true
        },
        isCorrect: {
          type: Boolean,
          required: true
        }
      }
    ]
  },
  { timestamps: true }
);

const Result = mongoose.model("Result", resultSchema);
export default Result;