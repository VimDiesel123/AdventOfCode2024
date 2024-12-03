import { setDay, withTestInput, withRealInput } from '../common';
import { parseInput } from './day2_1';
import { safeReports } from './day2_2';

setDay(2);

test('Safe reports for test input should be 4', async () => {
  expect(await withTestInput(safeReports, parseInput)).toBe(4);
});

const solve = async () => {
  console.log(await withRealInput(safeReports, parseInput));
};

solve();
