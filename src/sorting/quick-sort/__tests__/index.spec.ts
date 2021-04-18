import { testSort, testNegativeNumbersSort } from '../../tester';
import { quickSort } from '../index';
const sortHandler = quickSort;
describe('quick sort', () => {
  test('testSort', () => {
    testSort(sortHandler);
  });
  test('testNegativeNumbersSort', () => {
    testNegativeNumbersSort(sortHandler);
  });
});
