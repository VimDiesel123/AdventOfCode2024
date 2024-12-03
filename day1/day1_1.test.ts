import { solve, parseInput } from './day1_1';
import { setDay, withRealInput, withTestInput } from '../common';

setDay(1);

test('Total distance for test input should be 11', async () => {
  expect(await withTestInput(solve, parseInput)).toBe(11);
});

const solution = async () => {
  console.log(await withRealInput(solve, parseInput));
};

solution();
