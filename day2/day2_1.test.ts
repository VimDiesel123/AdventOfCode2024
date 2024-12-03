import { parseInput, safeReports } from './day2_1';
import { readAndParseTestInput, readInput, setDay } from '../common';
import path from 'path';

setDay(2);

test('Should be 2 safe reports for test input', async () => {
  const reports = await readAndParseTestInput(parseInput);
  expect(safeReports(reports)).toBe(2);
});

test('Solve day 2 part 1', async () => {
  const input = await readInput(path.join(__dirname, 'input.txt'));
  const reports = parseInput(input);
  console.log('Solution to part 1: ', safeReports(reports));
});
