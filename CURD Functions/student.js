const express = require("express");
const app = express();
const PORT = 8005;
const stdRouter = require("./route/studentData");

app.use("/student", stdRouter );

app.listen(PORT, ()=>
    { console.log("Sever is start")
        
    });