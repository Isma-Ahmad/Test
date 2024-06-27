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

route.post("/", (req, res) => {
    const { first_name, last_name, email } = req.body;
    const newData = { first_name, last_name, email };
    const user = users.createData(newData);
    res.json(user);
  });

  route.put("/:id", (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, email } = req.body;
    const updatedData = users.updateData(parseInt(id), { first_name, last_name, email });
    res.json(updatedData);
   
  });

  route.delete("/:id", (req, res) => {
    const { id } = req.params;
    const deletedData =users.deleteData(parseInt(id));
    if (deletedData) {
      res.json({ message: "Data deleted" });
    } 
    else {
      res.status(404).json({ message: "Data not found" });
    }
  });

module.exports = route;