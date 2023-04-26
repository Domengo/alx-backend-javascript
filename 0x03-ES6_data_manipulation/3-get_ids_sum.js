export default function getStudentIdsSum(n) {
  return n.reduce((acc, student) => acc + student.id, 0);
}
