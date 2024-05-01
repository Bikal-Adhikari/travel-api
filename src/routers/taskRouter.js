import express from "express";
import { insertTasks } from "../Models/TaskModels.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // Insert tasks into MongoDB
    await insertTasks();
    res.json({
      status: "success",
      message: "Tasks inserted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "failure",
      message: "Error inserting tasks",
    });
  }
});

export default router;
