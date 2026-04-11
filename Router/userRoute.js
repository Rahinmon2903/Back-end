import express from "express";
import { protect, adminOnly } from "../Middleware/authMiddleware.js";

const router = express.Router();

//  Protected route
//“In the protect middleware, we take user info and attach it to the request object. Then in the route handler, we send that data to the frontend.”
router.get("/profile", protect, (req, res) => {
  res.status(200).json({
    message: "User profile fetched",
    user: req.user
  });
});

//  Admin only route
router.get("/admin", protect, adminOnly, (req, res) => {
  res.status(200).json({
    message: "Welcome Admin"
  });
});

export default router;