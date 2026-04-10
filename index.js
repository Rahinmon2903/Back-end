import dbConnect from "./db/db.js";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import authRoute from "./Router/authRoute.js";

dotenv.config();
dbConnect();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth",authRoute);

app.get("/",(req,res)=>{
    res.status(200).send("Welcome to my backend");
})



const port=process.env.PORT;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
