import { parseInput, safeReports } from './day2_1';
import { setDay, withTestInput, withRealInput } from '../common';

setDay(2);

test('Should be 2 safe reports for test input', async () => {
  const result = await withTestInput(safeReports, parseInput);
  expect(result).toBe(2);
});

const solve = async () => {
  console.log(await withRealInput(safeReports, parseInput));
};

solve();
