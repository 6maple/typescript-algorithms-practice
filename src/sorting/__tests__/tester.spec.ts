import { testSort, testNegativeNumbersSort } from '../tester';
const sortHandler = (arr: number[]) => {
  return arr.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
};
describe('tester', () => {
  test('testSort', () => {
    testSort(sortHandler);
  });
  test('testNegativeNumbersSort', () => {
    testNegativeNumbersSort(sortHandler);
  });
});
