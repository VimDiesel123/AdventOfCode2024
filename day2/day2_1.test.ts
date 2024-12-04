import { solve } from './day2_1';
import { parseInput } from './day2';
import { setDay, withTestInput } from '../common';

setDay(2);
test('Should be 2 safe reports for test input', async () => {
  expect(await withTestInput(solve, parseInput)).toBe(2);
});
