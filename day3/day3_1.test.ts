import { solve } from './day3_1';
import { parseInput } from './day3';
import { setDay, withTestInput } from '../common';

setDay(3);

test('Test answer for Day 3 part 1', async () => {
  expect(await withTestInput(solve, parseInput)).toBe(161);
});
