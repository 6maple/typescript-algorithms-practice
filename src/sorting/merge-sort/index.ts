import { testNegativeNumbersSort } from '../tester';

const mergePartition = (arr: number[], left: number, right: number) => {
  if (left === right) return;
  const mid = Math.floor((left + right) / 2);
  mergePartition(arr, left, mid);
  mergePartition(arr, mid + 1, right);
  let leftEnd = mid;
  let i = left;
  let j = mid + 1;
  while (i <= leftEnd && j <= right) {
    while (arr[i] <= arr[j] && i <= leftEnd) {
      i += 1;
    }
    let prevJ = j;
    const val = arr[i];
    while (arr[j] < val && i <= leftEnd && j <= right) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i += 1;
      if (i > leftEnd) {
        leftEnd = j;
        // i = prevJ;
        j += 1;
        prevJ = j;
      } else {
        j += 1;
      }
    }
    j = prevJ;
  }
};
export const mergeSort = (originArr: number[]) => {
  const arr = [...originArr];
  if (arr.length <= 1) return arr;
  mergePartition(arr, 0, arr.length - 1);
  return arr;
};

testNegativeNumbersSort(mergeSort);
