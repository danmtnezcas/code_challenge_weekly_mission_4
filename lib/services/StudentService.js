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
}

module.exports = StudentService;