const pool = require("../connect_db");


function addUser(id,first_name, last_name, email) {
  
  return pool.query(
    `INSERT INTO data (id,first_name, last_name, email) VALUES ('${id}','${first_name}','${last_name}','${email}') RETURNING * `
  );

}

function getUser() {
 
  return pool.query("SELECT * FROM data ORDER BY id ASC");
}

function getUserById(id) {
  
  return pool.query(`SELECT * FROM data WHERE id = ${id}`);
}

function updateUser(id, first_name, last_name, email) {
  
  return pool.query(
    ` UPDATE data SET first_name = '${first_name}', last_name = '${last_name}',  email = '${email}'        
      WHERE id = ${id} RETURNING *`
  );
}

function deleteUser(id) {
 
  return pool.query(`DELETE FROM data WHERE id = ${id}`);
}

module.exports = {
    addUser,
    getUser,
    getUserById,
    updateUser,
    deleteUser,
};