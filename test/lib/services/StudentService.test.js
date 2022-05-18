const Reader = require("../../../lib/utils/Reader");
const StudentService = require("../../../lib/services/StudentService");

describe("Unit Tests for StudentService class", () => {
    test("Get the students list, we should have the students from student.json", () => {
        const studentsList = Reader.readJsonFile("students.json");
        const students = StudentService.getStudents(studentsList);
        expect(students).toEqual(
            expect.arrayContaining([
                expect.objectContaining({"name": "Warren", "credits": 508}), // This student is in students.json
                expect.objectContaining({"name": "Lucinda", "credits": 677}), // This student is in students.json
                expect.objectContaining({"name": "Fuentes", "credits": 210}), // This student is in students.json
                //expect.objectContaining({"name": "asdfj"}) // This student isn't in students.json
            ])
        );
    });
});