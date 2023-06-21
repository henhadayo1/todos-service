import express from "express";
import {
  addTodo,
  deleteTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
} from "../controllers/todoController.js";

const todoRouter = express.Router();

todoRouter.get("/", getAllTodos);
todoRouter.get("/:id", getTodoById);
todoRouter.put("/:id", updateTodo);
todoRouter.post("/", addTodo);
todoRouter.delete("/:id", deleteTodo);

export default todoRouter;
