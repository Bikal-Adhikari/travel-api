import express from "express";
import { getTasks, insertTasks } from "../Models/TaskModels.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // Insert tasks into MongoDB
    // await insertTasks();
    const { data } = await getTasks();
    console.log(data);
    res.json({
      status: "success",
      message: "Tasks inserted successfully",
      data: data,
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
