import totalDistance, { parseInput } from './day1_1';
import { setDay, withTestInput } from '../common';

setDay(1);

test('Total distance for test input should be 11', async () => {
  expect(await withTestInput(totalDistance, parseInput)).toBe(11);
});
