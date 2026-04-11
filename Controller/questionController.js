import Interview from "../Model/interviewSchema.js";
import Question from "../Model/questionSchema.js";


export const addQuestion = async (req, res) => {
    try {
        const { questionText, options, correctAnswer, type,interviewId } = req.body;
        const question = await Question.create({ questionText, options, correctAnswer, type });
        res.status(201).json({ message: "Question created successfully", question });

        const interview=await Interview.findById(interviewId);
        interview.questions.push(question._id);
        await interview.save();

        res.status(201).json({ message: "Question created successfully", question });
        
    } catch (error) {
        res.status(503).json({ message: "error in adding question" });
        
    }
}