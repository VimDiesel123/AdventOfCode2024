import { solve } from './day7_2';
import { setDay, withTestInput } from '../common';

setDay(7);

test('Test answer for Day 7 part 2', async () => {
  expect(await withTestInput(solve)).toBe(11387);
});
