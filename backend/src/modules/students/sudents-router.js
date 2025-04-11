const express = require("express");
const {
  handleGetAllStudents,
  handleAddStudent,
  handleUpdateStudent,
  handleGetStudentDetail,
  handleStudentStatus
} = require("./students-controller");

const router = express.Router();

router.get("/", handleGetAllStudents);
router.get("/:id", handleGetStudentDetail);
router.post("/", handleAddStudent);
router.put("/", handleUpdateStudent);
router.post("/status", handleStudentStatus);

module.exports = { studentsRoutes: router };
