const Reader = require("../../../lib/utils/Reader");

describe("Unit Test for Reader class", () => {
    test("Read a json file, we should have names from students.json", () => {
        const students = Reader.readJsonFile("students.json");
        expect(students).toEqual(
            expect.arrayContaining([
                expect.objectContaining({"name": "Warren"}), // This name is in students.json
                expect.objectContaining({"name": "Lucinda"}), // This name is in students.json
                expect.objectContaining({"name": "Fuentes"}), // This name is in students.json
                //expect.objectContaining({"name": "asdfj"}) // This name isn't in students.json
            ])
        );
    });
});