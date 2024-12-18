import { solve } from './day10_1';
import { setDay, withTestInput } from '../common';

setDay(10);

test('Test answer for Day 10 part 1', async () => {
  expect(await withTestInput(solve)).toBe(36);
});
