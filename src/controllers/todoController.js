import Todo from "../models/Todo.js";
import asyncHandler from "express-async-handler";

export const getAllTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

export const getTodoById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findById(id);
  console.log("Retrieve one todo item by id", todo);
  res.json(todo);
});

export const updateTodo = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findById(id);
  for (const prop in req.body) {
    console.log(`Update property: ${prop}`);
    todo[prop] = req.body[prop];
  }
  console.log("Update one todo item by id", todo);
  todo.save();
  res.json("Updated!");
});

export const addTodo = asyncHandler(async (req, res) => {
  const todo = await new Todo(req.body);
  await todo.save();
  console.log("Todo item as been saved!", todo);
  res.json("Created!");
});

export const deleteTodo = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findByIdAndDelete(id);
  console.log("Delete todo item by id", todo);
  res.json("Deleted!");
});
