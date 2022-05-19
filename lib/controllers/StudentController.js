const Reader = require("../utils/Reader");
const StudentService = require("../services/StudentService");

class StudentController {
    static getStudents() {
        const studentsList = Reader.readJsonFile("students.json");
        const students = StudentService.getStudents(studentsList);
        return students;
    }
    static filterByCertification(condition) {
        if(condition == "true"){
            condition = true;
        } else if(condition == "false") {
            condition = false;
        }
        const students = Reader.readJsonFile("students.json");
        const emails = StudentService.filterByCertification(students, condition);
        return emails;
    }
    static filterByCredits(credits){
        const students = Reader.readJsonFile("students.json");
        const studentsWithCreditsGreaterThan = StudentService.filterByCredits(students, credits);
        return studentsWithCreditsGreaterThan;
    }
}

module.exports = StudentController;