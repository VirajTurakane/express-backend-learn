import express from "express";
import { getTodos } from "../controllers/todo.controller.js";

export const router = express.Router();

router.get("/", getTodos);
