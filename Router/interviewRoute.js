import express from "express";
import { protect, adminOnly } from "../Middleware/authMiddleware.js";
import { createInterview } from "../Controllers/interviewController.js";

const router = express.Router();

router.post("/create", protect, createInterview);
// later: add adminOnly

export default router;