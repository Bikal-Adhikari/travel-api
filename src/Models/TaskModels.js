import taskSchema from "./TaskSchema.js"; // Assuming TaskSchema is the model
import { toursData } from "../../tours.js";

export const insertTasks = async () => {
  try {
    const insertedTasks = await taskSchema.insertMany(toursData);
    return insertedTasks;
  } catch (error) {
    console.error("Error inserting tasks:", error);
    throw error;
  }
};
