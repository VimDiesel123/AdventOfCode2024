import totalDistance, { parseInput } from './day1_1';
import { readInput } from '../common';
import path from 'path';

test('Total distance for test input should be 11', async () => {
  const input = await readInput(path.join(__dirname, 'test_input.txt'));
  const [left, right] = parseInput(input);
  expect(totalDistance(left, right)).toBe(11);
});
