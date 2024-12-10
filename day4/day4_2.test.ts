import { solve } from './day4_2';
import { setDay, withTestInput } from '../common';

setDay(4);

test('Test answer for Day 4 part 2', async () => {
  expect(await withTestInput(solve)).toBe(9);
});
