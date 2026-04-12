import express from "express";
import { protect, adminOnly } from "../Middleware/authMiddleware.js";
import { createInterview ,getInterview,getAllInterviews} from "../Controllers/interviewController.js";




const router = express.Router();

router.post("/create", protect,adminOnly, createInterview);
router.get("/", protect, getAllInterviews);
router.get("/:id", protect, getInterview);

// later: add adminOnly

export default router;