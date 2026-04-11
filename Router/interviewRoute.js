import express from "express";
import { protect, adminOnly } from "../Middleware/authMiddleware.js";
import { createInterview ,getInterview} from "../Controllers/interviewController.js";



const router = express.Router();

router.post("/create", protect, createInterview);
router.get("/:id", protect, getInterview);
// later: add adminOnly

export default router;