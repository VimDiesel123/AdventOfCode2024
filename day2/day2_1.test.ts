import { parseInput, safeReports } from './day2_1';
import { readInput } from '../common';
import path from 'path';

test('Should be 2 safe reports for test input', async () => {
  const input = await readInput(path.join(__dirname, 'test_input.txt'));
  const reports = parseInput(input);
  expect(safeReports(reports)).toBe(2);
});

test('Solve day 2 part 1', async () => {
  const input = await readInput(path.join(__dirname, 'input.txt'));
  const reports = parseInput(input);
  console.log(safeReports(reports));
});
