const Reader = require("../utils/Reader");
const StudentService = require("../services/StudentService");

class StudentController {
    static getStudents() {
        const studentsList = Reader.readJsonFile("students.json");
        const students = StudentService.getStudents(studentsList);
        return students;
    }
}

module.exports = StudentController;