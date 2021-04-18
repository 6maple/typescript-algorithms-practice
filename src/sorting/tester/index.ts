import { sortedArr, reverseArr, notSortedArr, equalArr, negativeArr, negativeArrSorted } from "./data";
export const testSort = (sortHandler: (arr: number[]) => number[]) => {
  expect(sortHandler([])).toEqual([]);
  expect(sortHandler([1])).toEqual([1]);
  expect(sortHandler([1, 2])).toEqual([1, 2]);
  expect(sortHandler([2, 1])).toEqual([1, 2]);
  expect(sortHandler([3, 4, 2, 1, 0, 0, 4, 3, 4, 2])).toEqual([0, 0, 1, 2, 2, 3, 3, 4, 4, 4]);
  expect(sortHandler(sortedArr)).toEqual(sortedArr);
  expect(sortHandler(reverseArr)).toEqual(sortedArr);
  expect(sortHandler(notSortedArr)).toEqual(sortedArr);
  expect(sortHandler(equalArr)).toEqual(equalArr);
};
export const testNegativeNumbersSort= (sortHandler: (arr: number[]) => number[]) => {
  expect(sortHandler(negativeArr)).toEqual(negativeArrSorted);
};