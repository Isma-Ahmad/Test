const fs = require('fs');


// let buf = Buffer.alloc(10);
// buf.write("Hello world");
// console.log(buf);


fs.readFile('text.txt', (err, data) => {
  if (err) throw err;
  console.log(data); 
//   console.log(data.toString()); 
});

