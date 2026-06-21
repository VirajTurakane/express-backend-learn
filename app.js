import express from "express";
import { router as todoRouter } from "./routes/todo.route.js";

export const app = express();

app.use(express.json());

// Routes
app.use(todoRouter);
