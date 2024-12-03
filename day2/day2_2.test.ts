import { readInput, setDay, withTestInput } from '../common';
import path from 'path';
import { parseInput } from './day2_1';
import { safeReports } from './day2_2';

setDay(2);

test('Safe reports for test input should be 4', async () => {
  expect(await withTestInput(safeReports, parseInput)).toBe(4);
});

test('Solve day 2 part 2', async () => {
  const input = await readInput(path.join(__dirname, 'input.txt'));
  const reports = parseInput(input);
  console.log('Solution for part 2: ', safeReports(reports));
});
