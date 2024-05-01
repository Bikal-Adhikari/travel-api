import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
      const tasks = await getTasks();
      res.json({
        status: "success",
        message: "Here are the tasks",
        tasks: tasks,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: "failure",
        message: "Error fetching tasks",
      });
    }
  });



  export default router;