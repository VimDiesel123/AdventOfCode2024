import { setDay, withTestInput } from '../common';
import { parseInput } from './day2';
import { solve } from './day2_2';

setDay(2);

test('Safe reports for test input should be 4', async () => {
  expect(await withTestInput(solve, parseInput)).toBe(4);
});
