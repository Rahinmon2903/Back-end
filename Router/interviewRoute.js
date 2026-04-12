import express from "express";
import { protect, adminOnly } from "../Middleware/authMiddleware.js";
import { createInterview, getAllInterviews, getInterview } from "../Controllers/InterviewController.js";





const router = express.Router();

router.post("/create", protect,adminOnly, createInterview);
router.get("/", protect, getAllInterviews);
router.get("/:id", protect, getInterview);

// later: add adminOnly

export default router;