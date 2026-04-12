import Question from "../Model/questionSchema.js";
import Result from "../Model/resultSchema.js";

export const submitInterview = async (req, res) => {
    try {
        const { answers, interviewId } = req.body;
        let score = 0;
        const evaluatedAnswers =[];

        for (let ans of answers){
            const question = await Question.findById(ans.questionId);
            const isCorrect = question.correctAnswer === ans.selectedAnswer;
            if (isCorrect) score++
               evaluatedAnswers.push({questionId:ans.questionId,selectedAnswer:ans.selectedAnswer,isCorrect});
        }
        const result = await Result.create({ user: req.user._id, interview: interviewId, score, answers:evaluatedAnswers });
        if (result) {
            res.status(201).json({ message: "Interview submitted successfully", result, score });
            
           
        }
    } catch (error) {
        res.status(500).json({ message: "Error submitting interview" });
    }
};

export const getMyResults = async (req, res) => {
    try {
        const results = await Result.find({ user: req.user._id }).populate("interview");
        res.status(200).json({message:"Results fetched successfully", results });
    } catch (error) {
        res.status(500).json({ message: "Error fetching results" });
    }
};

export const getResultById = async (req, res) => {
    try {

        const {id}=req.params
        const result = await Result.findById(id).populate("interview", "title role").populate("answers.questionId", "questionText options correctAnswer");
        res.status(200).json({message:"Result fetched successfully by id", result });
        
    } catch (error) {
        res.status(500).json({ message: "Error fetching result by id" });
    }
};

export const Leaderboard = async (req, res) => {
    try {
        const results = await Result.find().sort({ score: -1 }).limit(10).populate("user", "name");
        res.status(200).json({message:"Leaderboard fetched successfully", results });
    } catch (error) {
        res.status(500).json({ message: "Error fetching leaderboard" });
    }
};