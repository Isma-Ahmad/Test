let pool = require("./connect_db");

function createTable() {
    return pool.query(
      `
      CREATE TABLE IF NOT EXISTS data (
        id int,
        first_name VARCHAR(100),
        last_name VARCHAR(100),
        email VARCHAR(100)
      );
    `
    )
    // .then(() => {
    //   console.log("Table 'data' created successfully.");
    // })
    // .catch((err) => {
    //   console.error("Error creating table 'data':", err);
    // });
  }

//   createTable()
//   .then(() => {
//     // Check if the table was created
//     pool.query("SELECT * FROM data LIMIT 1")
//       .then((result) => {
//         if (result.rows.length > 0) {
//           console.log("Table 'data' exists in the database.");
//         } else {
//           console.log("Table 'data' does not exist in the database.");
//         }
//       })
//       .catch((err) => {
//         console.error("Error checking table 'data':", err);
//       });
//   })
//   .catch((err) => {
//     console.error("Error creating table 'data':", err);
//   });


module.exports = { 
    createTable 
};