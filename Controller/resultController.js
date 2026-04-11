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