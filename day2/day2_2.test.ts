import { readInput } from '../common';
import path from 'path';
import { parseInput } from './day2_1';
import { safeReports } from './day2_2';

test('Safe reports for test input should be 4', async () => {
  const input = await readInput(path.join(__dirname, 'test_input.txt'));
  const reports = parseInput(input);
  expect(safeReports(reports)).toBe(4);
});

test('Solve day 2 part 2', async () => {
  const input = await readInput(path.join(__dirname, 'input.txt'));
  const reports = parseInput(input);
  console.log('Solution for part 2: ', safeReports(reports));
});
