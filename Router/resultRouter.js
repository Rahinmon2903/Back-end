import express from "express";
import { protect } from "../Middleware/authMiddleware.js";
import { getMyResults, getResultById, Leaderboard, submitInterview } from "../Controllers/resultController.js";


const router = express.Router();

router.post("/submit", protect, submitInterview);
router.get("/my-results", protect, getMyResults);
router.get("/:id", protect, getResultById);
router.get("/leaderboard", protect,Leaderboard);

export default router;