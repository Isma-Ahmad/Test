const express = require("express");
const std = require("../stdata");
const router = express.Router();
router.use(express.json())

router.get("/" , (req , res)=>{
     res.json(std);
});

router.post("/" , (req , res)=>{
    const user ={
        id: std.length+1,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }
    std.push(user);
    res.json(user);
});
router.put("/:id" , (req , res)=>{
    
       let id = req.params.id
       let  first_name =req.body.first_name
       let last_name = req.body.last_name
       let email = req.body.email
        let index = std.findIndex((std)=>{
            return (std.id == Number.parseInt(id))
        })
 console.log(id, req.body , index);
    if (index > 0) {
        let student = std[index]
        student.first_name =first_name
        student.last_name = last_name
        student.email = email
         res.json(student)
    } 
    else {
        res.status(404)
        res.end()
    }
    
});
router.delete("/:id" , (req , res)=>{
    
    let id = req.params.id;
     let index = std.findIndex((std)=>{
         return (std.id == Number.parseInt(id))
     })

 if (index >= 0) {
     let student = std[index]
     std.splice(index,1)
     res.send("Delete.....!!!"); 
      res.send(console.log("Delete....!!"))
 } 
 else {
     res.status(404)
 }
 
});



module.exports = router;