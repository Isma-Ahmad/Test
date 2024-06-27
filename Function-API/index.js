const express = require("express");
const app = express();
const PORT = 8006;
const userRoute = require("./route/userAPI");

app.use("/user", userRoute );

app.listen(PORT, ()=>{ console.log("Sever is start")});