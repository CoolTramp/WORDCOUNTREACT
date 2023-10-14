export default function getLoadingProcent(
  currentNumber: number,
  allNumber: number
) {
  return Math.floor((currentNumber / allNumber) * 100);
}
