const {Pool} = require("pg");
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "details",
    password: "1234",
    port: "5432"
});

// pool.query('SELECT 1 + 1 AS result', (err, res) => {
//     if (err) {
//       console.error('Error connecting to the database:', err);
//     } else {
//       console.log('Database connection successful! Result:', res.rows[0].result);
//     }
//     pool.end(); 
//   });

module.exports = pool;

