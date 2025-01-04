import express from "express";
import mongoose from "mongoose";
import Season1 from "../models/Season1.js";

const router = express.Router();

// Get all episodes of season1
router.get("/", async (req, res) => {
    try {
      const season1 = await Season1.find({});
      res.status(200).json({ success: true,  data: season1 });
    } catch (error) {
      console.log("Error in fetching episodes: ", error.message);
      res.status(500).json({ success: false, message: "Server Error" });
    }
});

export default router;