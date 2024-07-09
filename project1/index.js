const express = require('express');
const app = express();
const data = require('./routes/user_routes')
const port = 5000;

app.use(express.json());

app.use("/" , data);

app.listen(port , ()=> console.log(`sever is start ${port}`));