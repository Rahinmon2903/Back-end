import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        enum:["user","admin"],
        type:String,
        default:"user"
    },
    token:{
        type:String
    },
    resetToken:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const User=mongoose.model("User",userSchema);
export default User;