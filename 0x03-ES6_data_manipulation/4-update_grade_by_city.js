/** */
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    // Filter students by the specified city
    .filter((student) => student.location === city)
    .map((student) => {
      // Use .find() to locate the grade for the student, if available
      const gradeInfo = newGrades.find((grade) => grade.studentId === student.id);
      // Return student object with updated grade
      return {
        ...student,
        grade: gradeInfo ? gradeInfo.grade : 'N/A',
      };
    });
}
