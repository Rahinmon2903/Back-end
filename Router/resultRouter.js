import express from "express";
import { protect } from "../Middleware/authMiddleware.js";
import { submitInterview } from "../Controllers/resultController.js";

const router = express.Router();

router.post("/submit", protect, submitInterview);

export default router;