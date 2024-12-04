import { solve } from './day1_1';
import { parseInput } from './day1';
import { setDay, withTestInput } from '../common';

setDay(1);

test('Total distance for test input should be 11', async () => {
  expect(await withTestInput(solve, parseInput)).toBe(11);
});
