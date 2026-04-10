import User from "../Model/userSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register=async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"User already exists"});
        }
        const hashpassword= bcrypt.hashSync(password,10);
        const user=new User({name,email,password:hashpassword});
        await user.save();
     res.status(201).json({
    message: "User registered successfully",
    user
});

    }catch(error){
         res.status(503).json({message:"user not registered error in user register"})
    }
}

export const login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"User not found"});
        }
        const matchPassword=await bcrypt.compare(password,user.password);
        if(!matchPassword){
            return res.status(400).json({message:"Invalid password"});
        }
        const token= jwt.sign({_id:user._id,role:user.role},process.env.SECERT_KEY,{expiresIn:"1h"})
        user.token=token;
        await user.save();
        res.status(200).json({message:"User login successfully",token,user});

       
        

    }catch(error){
        res.status(503).send({message:"user not login error in user login"})
    }
}
