const express = require("express");
const users = require("../controller/functions");
const route = express.Router();
route.use(express.json());

route.get("/", (req, res) => {
  const allData = users.getAllData();
  res.json(allData);
});

route.get("/:id", (req, res) => {
  const { id } = req.params;
  const data = users.getDataById(parseInt(id));
    res.json(data);
});

module.exports = route;