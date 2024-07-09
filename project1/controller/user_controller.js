
const service = require("../services/user_service.js");
const table = require("../table.js");

function addUser(req, res) {
  const { id, first_name, last_name, email } = req.body;

  return service.addUser(id, first_name, last_name, email)
    .then((addedUser) => {
      res.status(201).json(addedUser.rows);
    })
    .catch((err) => {
      console.error("Error adding data:", err);
      res.status(500).json({ message: "Error adding data" });
    });
}

function getUser(req, res) {
  service.getUser()
    .then((result) => {
      if (result.rows.length > 0) {
        res.json(result.rows);
        // console.log("Get all user");
      } 
    })
    .catch((err) => {
      console.error("Error getting users:", err);
      res.json({ message: "Error getting users" });
    });
}

function getUserById(req, res) {
  const id = req.params.id;
  
  service.getUserById(id)
    .then((result) => {
      if (result.rows.length > 0) {
        res.json(result.rows);
        // console.log("User get by id");
      } else {
        // console.log("id not found..");
        res.json({ message: `User with ID ${id} not found` });
      }
    })
    .catch((err) => {
      console.error(`Error getting user with ID ${id}:`, err);
      res.json({ message: `Error getting user with ID ${id}` });
    });
}

function updateUser(req, res) {
  const id = req.params.id;
  const { first_name, last_name, email} = req.body;
  return service.updateUser(id, first_name, last_name, email)
  .then((update) =>{
      res.json(update.rows);
  })
  .catch((err) =>{
       console.error("Error updating data" , err);
       res.json({message: "Error updating data"});
  });
  
}

function deleteUser(req, res) {
  const id = req.params.id;
  service.deleteUser(id);
  res.send("data deleted successfully..!!");
}

function c_table(req, res) {
  const Table = table.createTable();
  res.send("create table successfully").json(Table);
}

module.exports = {
    addUser,
    getUser,
    getUserById,
    updateUser,
    deleteUser,
    c_table,

};