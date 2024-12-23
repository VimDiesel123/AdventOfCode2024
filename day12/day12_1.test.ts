import { solve } from './day12_1';
import { setDay, withTestInput } from '../common';

setDay(12);

test('Test answer for Day 12 part 1', async () => {
  expect(await withTestInput(solve)).toBe(1930);
});
