const express = require("express");
const app = express();
const PORT = 8007;
const stdRoute = require("./route/api");

app.use("/std", stdRoute );


app.listen(PORT, ()=>{ console.log("Sever is start")});