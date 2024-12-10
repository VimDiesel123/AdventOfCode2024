import { solve } from './day7_1';
import { setDay, withTestInput } from '../common';

setDay(7);

test('Test answer for Day 7 part 1', async () => {
  expect(await withTestInput(solve)).toBe(3749);
});
