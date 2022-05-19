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
    test("Get the emails of all students with certification, we should only have the emails of students with certification", () => {
        const condition = true;
        const emailsWithCertification = StudentController.filterByCertification(condition);
        expect(emailsWithCertification).toContain("Todd@visualpartnership.xyz"); // This email has certification
        expect(emailsWithCertification).toContain("Sexton@visualpartnership.xyz"); // This email has certification
        expect(emailsWithCertification).toContain("Sharlene@visualpartnership.xyz"); // This email has certification
        //expect(emailsWithCertification).toContain("Camacho@visualpartnership.xyz"); // This email hasn't certification
    });
});