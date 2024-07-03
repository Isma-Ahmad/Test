
const fs = require("fs");


// Sync.....
//  fs.writeFileSync('./text.txt' , 'HY.........!!!!!!!! \n');

//  const result = fs.readFileSync("./context.txt" , "utf-8");
//  console.log(result);

 fs.appendFileSync("./text.txt" , `${Date.now()} \n`);

//Async.....
// fs.writeFile('./context.txt' , "helooo........!!!!!!" , (err) => {});

// fs.readFile("./text.txt", "utf-8", (err , result) =>{
//     if (err) {
//         console.log("Error");
//     }
//     else{
//         console.log(result);
//     }
// });
