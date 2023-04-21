export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw Error('cannot devide by 0');
  }
  return numerator / denominator;
}
