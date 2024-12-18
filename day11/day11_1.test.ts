import { solve } from './day11_1';
import { setDay, withTestInput } from '../common';

setDay(11);

test('Test answer for Day 11 part 1', async () => {
  expect(await withTestInput(solve)).toBe(55312);
});
