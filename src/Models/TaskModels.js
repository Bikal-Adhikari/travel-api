import TaskSchema from "./TaskSchema";
import { toursData } from "../../tours";


export const insertTasks = (toursData) => {
  return TaskSchema.insertMany(toursData);
};
