import totalDistance, { parseInput } from './day1_1';
import { setDay, withRealInput, withTestInput } from '../common';

setDay(1);

test('Total distance for test input should be 11', async () => {
  expect(await withTestInput(totalDistance, parseInput)).toBe(11);
});

const solve = async () => {
  console.log(await withRealInput(totalDistance, parseInput));
};

solve();
