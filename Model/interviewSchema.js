import mongoose from "mongoose";

const interviewSchema=new mongoose.Schema({
    title:{
        type:String,
         required: true
        
    },
    role:{
        type:String,
         required: true
        
    },
    difficulty:{
        type:String,
        enum:["easy","medium","hard"],
         required: true
        
        
    },
    questions:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Question"
    }],
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
    
},{timestamps:true}
);

const Interview=mongoose.model("Interview",interviewSchema);
export default Interview;