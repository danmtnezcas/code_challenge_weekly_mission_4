class StudentService{
    static getStudents(students){
        const data = students;
        return data;
    }
    static filterByCertification(students, condition){
        const studentsWithCertification = students.filter((student) => student.haveCertification == condition);
        const emails = studentsWithCertification.map((student) => student.email);
        return emails;
    }
    static filterByCredits(students, credits){
        const studentsWithCreditsGreaterThan = students.filter((student) => student.credits > credits);
        return studentsWithCreditsGreaterThan;
    }
}

module.exports = StudentService;