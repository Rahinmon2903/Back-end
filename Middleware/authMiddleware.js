import jwt from "jsonwebtoken";
import User from "../Model/userSchema.js";
import dotenv from "dotenv";

dotenv.config();

export const protect = async (req, res, next) => {


    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Token missing" });
    }

    const token = authHeader.split(" ")[1];

    //“In the backend, we receive the token from the frontend through the Axios instance configuration, whereas in Postman we manually include the token in the request headers.”
    if (!token) {
        return res.status(401).json({ message: "token missing" });
    }
    try {

        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decode._id).select("-password");
        //“After verifying the JWT, we extract the user ID from the decoded token and use it to fetch the user from the database. Then we store that user data in req.user for use in the next middleware or route handler.”
        next();



    } catch (error) {
        res.status(500).json({ message: error.message });

    }
}

export const adminOnly = (req, res, next) => {
    //“next() passes control to the next middleware while keeping the same req object, so data like req.user set in one function is available in the next.”
    if (req.user && req.user.role === "admin") {
        next();
    } else {
        res.status(500).json({ message: "admin access only" });
    }
}