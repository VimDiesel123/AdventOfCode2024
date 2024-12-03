import { parseInput, safeReports } from './day2_1';
import { readInput, setDay, withTestInput } from '../common';
import path from 'path';

setDay(2);

test('Should be 2 safe reports for test input', async () => {
  const result = await withTestInput(safeReports, parseInput);
  expect(result).toBe(2);
});

test('Solve day 2 part 1', async () => {
  const input = await readInput(path.join(__dirname, 'input.txt'));
  const reports = parseInput(input);
  console.log('Solution to part 1: ', safeReports(reports));
});
