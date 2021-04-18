import { testSort, testNegativeNumbersSort } from '../../tester';
import { mergeSort } from '../index';
const sortHandler = mergeSort;
describe('quick sort', () => {
  test('testSort', () => {
    // testSort(sortHandler);
  });
  test('testNegativeNumbersSort', () => {
    testNegativeNumbersSort(sortHandler);
  });
});
