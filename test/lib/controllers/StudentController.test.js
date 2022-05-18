const StudentController = require("../../../lib/controllers/StudentController");

describe("Unit Tests for StudentController class", () => {
    test("Get the students list, we should have the students from student.json", () => {
        const students = StudentController.getStudents();
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