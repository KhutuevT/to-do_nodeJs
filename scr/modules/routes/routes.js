const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/task.controller");

//Tasks routes
router.get("/allTasks", getAllTasks);
router.post("/createTask", createTask);
router.patch("/updateTask", updateTask);
router.delete("/deleteTask", deleteTask);

module.exports = router;
