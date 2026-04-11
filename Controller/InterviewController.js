import Interview from "../Model/interviewSchema.js";

export const createInterview=async(req,res)=>{
    try {
        const {title,role,difficulty}=req.body;

        const interview =await Interview.create({title,role,difficulty});

        res.status(201).json({
            message:"Interview created successfully",
            interview
        })
        
    } catch (error) {
        res.status(503).json({message:"error in creating interview"});
        
    }
}