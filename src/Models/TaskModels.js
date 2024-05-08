import { toursData } from "../../tours.js";
import TaskSchema from "./TaskSchema.js";

export const insertTasks = async () => {
  try {
    const insertedTasks = await TaskSchema.insertMany(toursData);
    return insertedTasks;
  } catch (error) {
    console.error("Error inserting tasks:", error);
    throw error;
  }
};

export const getTasks = () => {
  return TaskSchema.find();
};
