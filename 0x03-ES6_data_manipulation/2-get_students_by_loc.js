export default function getStudentByiLocation(students, city) {
  return students.filter((student) => student.location === city);
}
