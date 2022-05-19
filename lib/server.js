const StudentController = require("./controllers/StudentController");
const express = require("express");

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Student API welcome!"});
});

app.get("/v1/students", (request, response) => {
    const students = StudentController.getStudents();
    response.json(students);
});

app.get("/v1/students/emails/:condition", (request, response) => {
    const condition = request.params.condition;
    const emails = StudentController.filterByCertification(condition);
    response.json(emails);
});

app.listen(port, () => {
    console.log(`Student API in localhost:${port}`);
});