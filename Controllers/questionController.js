import Interview from "../Model/interviewSchema.js";
import Question from "../Model/questionSchema.js";


export const addQuestion = async (req, res) => {
    try {
        const { questionText, options, correctAnswer, type,interviewId } = req.body;
        const question = await Question.create({ questionText, options, correctAnswer, type });
       

        const interview=await Interview.findById(interviewId);
          if (!interview) {
            return res.status(404).json({ message: "Interview not found" });
        }
        interview.questions.push(question._id);
        await interview.save();

        res.status(201).json({ message: "Question created successfully", question });
        
    } catch (error) {
        res.status(503).json({ message: "error in adding question" });
        
    }
}

export const createQuestion = async (req, res) => {
    try {
        const { questionText, options, correctAnswer, type } = req.body;
        const question = await Question.create({ questionText, options, correctAnswer, type });
        res.status(201).json({ message: "Question created successfully", question });
        
    } catch (error) {
        res.status(503).json({ message: "error in creating question" });
        
    }
}