const express = require("express");
const reqFilter = require("./middleware");
const app = express();
const route = express.Router();
const port = 7000;

route.use(reqFilter);

app.get('/' , (req , res) =>{
       res.send("welcom to home page");
});

app.get('/about' , (req , res) =>{
    res.send("welcom to about page");
});

route.get('/user' , (req , res) =>{
    res.send("welcom to user page");
});


app.use("/" , route);

app.listen(port, ()=> console.log("Sever started"));