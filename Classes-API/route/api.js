const express = require("express");
const std = require("../data");
const Student = require("../controller/classes");
const router = express.Router();


router.get("/", (req, res) => {
  res.json(std);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const student = std.find((student) => student.id === Number.parseInt(id));

  if (student) {
    res.json(student);
  } else {
    res.send("Student not found");
  }
});

router.post("/", (req, res) => {
  const { first_name, last_name, email } = req.body;
  const stds = new Student(std.length + 1, first_name, last_name, email);
  std.push(stds);
  res.json(stds);
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email } = req.body;
  const index = std.findIndex((student) => student.id === Number.parseInt(id));

  if (index >= 0) {
    const student = std[index];
    student.first_name = first_name;
    student.last_name = last_name;
    student.email = email;
    res.json(student);
  } else {
    res.send("not update data");
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const index = std.findIndex((student) => student.id === Number.parseInt(id));

  if (index >= 0) {
    const student = std.splice(index, 1)[0];
    res.send("Deleted student");
  } 
});

module.exports = router;