import express from "express";
import { protect } from "../Middleware/authMiddleware.js";
import { addQuestion } from "../Controllers/questionController.js";

const router = express.Router();

router.post("/add", protect, addQuestion);

export default router;