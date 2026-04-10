import User from "../Model/userSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register=(req,res)=>{
    try{
        const {name,email,password}=req.body;
        if(email){
            return res.status(400).send("Email already exists");
        }
        const hashpassword= bcrypt.hashSync(password,10);
        const user=new User({name,email,password:hashpassword});
        await user.save();
        res.status(201).send("User registered successfully");

    }catch(error){
         res.status(503).send({message:"user not registered error in user register"})
    }
}


