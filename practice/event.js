const express = require("express");
const app = express();

const EventEmitter = require("events");

const event = new EventEmitter();

//--------------------------------------

// event.on("print", ()=>{
//     console.log("Hello world 1 ......!!!");
// });

// event.on("print", ()=>{
//     console.log("Hello world 2 ......!!!");
// });

// event.on("print", ()=>{
//     console.log("Hello world 3 ......!!!");
// });

// event.emit("print");

//------------------------------------------

event.on("checkPage" , (sta , msg)=>{
       console.log(`Page status ${sta} and the page is ${msg}`);
});

event.emit("checkPage" , 200 , "ok")

//------------------------------------------
 let count = 0
event.on("api", ()=>{
      count++;
      console.log("api call"  , count);
});
 
app.get("/" , (req, res) => {
      res.send("api call");
      event.emit("api");
});

app.listen(5000 , ()=> console.log("Sever start"));