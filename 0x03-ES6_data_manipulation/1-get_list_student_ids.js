export default function getListStudentIds(n) {
  if (Array.isArray(n) !== true) {
    return [];
  }
  return n.map((x) => x.id);
}
