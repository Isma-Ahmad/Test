const express = require("express");
const fs = require("fs")

const app = express();
const PORT = 6000;



app.get('/' , (req ,res) => {
    const stream = fs.createReadStream("context.txt" , "utf-8");
    stream.on("data" , (chunk) => res.write(chunk));
    stream.on("end" , ()=> res.end());
});

app.listen(PORT , () => console.log("sevre started"));