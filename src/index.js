import "dotenv/config";
import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import todoRouter from "./routes/todoRouter.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/todos", todoRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

mongoose.connect(process.env.CONNECTION_STRING);
