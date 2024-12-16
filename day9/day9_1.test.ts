import { solve } from './day9_1';
import { setDay, withTestInput } from '../common';

setDay(9);

test('Test answer for Day 9 part 1', async () => {
  expect(await withTestInput(solve)).toBe(1928);
});
