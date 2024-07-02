const getStudents = "SELECT * FROM students";
const getStudentById = "SELECT * FROM students WHERE id = $1";
const addStudent = "INSERT INTO students (name, email, age) VALUES ($1 , $2, $3)";
const removeStudent = "DELETE FROM students WHERE id = $1";
const updateStudent = "UPDATE students SET name =$1 ,email = $2, age = $3 WHERE id = $4;";


module.exports ={
    getStudents,
    getStudentById,
    addStudent,
    updateStudent,
    removeStudent,
}