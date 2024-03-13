const express = require('express');
const router = express.Router();
const { addTask, getTodos, deleteTodo, updateTodo, updateTodo1 } = require('../controllers/todoControllers');
router.post("/addTask", addTask);
router.get("/getTodos", getTodos);
router.get("/deleteTodo/:id", deleteTodo);
router.get("/updateTodo/:id", updateTodo);
router.post("/updateTodo1", updateTodo1);
module.exports = router 