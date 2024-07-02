const pool = require("../../db");
const queries = require("./queries");

const getStudents = (req, res) => {
       pool.query(queries.getStudents , (error , result) => {
        if (error) throw error;
        res.status(200).json(result.rows);
       });
};

const getStudentById = (req , res ) => {
    const id= parseInt(req.params.id);
    pool.query(queries.getStudentById, [id], (error , result) => {
        if (error) throw error;
        res.status(200).json(result.rows);
       });
};

const addStudent= (req , res) =>{
      const {name , email , age} = req.body;
      pool.query(queries.addStudent, [name , email , age], (error , result) => {
        if (error) throw error;
        res.status(200).send("Student create successfully..!!");
       });
};

const updateStudent = (req , res) => {
    const id= parseInt(req.params.id);
    const {name, email, age } = req.body;

    pool.query(queries.getStudentById, [id], (error , result) =>{
        const noStudentFound = !result.rows.length;
        if(noStudentFound){
           res.send("Student does not  exit in the database"); 
        }

        pool.query(queries.updateStudent, [name,email,age, id] , (error , result) => {
           if (error) throw error;
           res.status(200).send("Student update successfully..!!");
        });
   });
};

const removeStudent = (req , res ) => {
    const id= parseInt(req.params.id);
    pool.query(queries.removeStudent , [id], (error , result) =>{
         const noStudentFound = !result.rows.length;
         if(noStudentFound){
            res.send("Student does not  exit in the database"); 
         }

         pool.query(queries.removeStudent, [id] , (error , result) => {
            if (error) throw error;
            res.status(200).send("Student removed successfully..!!");
         });
    });
};

module.exports ={
    getStudents,
    getStudentById,
    addStudent,
    updateStudent,
    removeStudent,
}