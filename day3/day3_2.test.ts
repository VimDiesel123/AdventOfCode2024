import { solve } from './day3_2';
import { parseInput2 } from './day3';
import { setDay, withTestInput } from '../common';

setDay(3);

test('Test answer for Day 3 part 2', async () => {
  expect(await withTestInput(solve, parseInput2)).toBe(
    48 /*TODO: Fill me in!*/,
  );
});
