const { log } = require("console");
const http = require("http");

const mySever = http.createServer((req , res) =>{
    // console.log("sever start");
    res.write("Hello from severs");
    res.end();
});
mySever.listen(8001 , ()=>console.log("sever start"));