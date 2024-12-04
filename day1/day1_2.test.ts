import { solve } from './day1_2';
import { parseInput } from './day1';
import { setDay, withTestInput, withRealInput } from '../common';

setDay(1);

test('Similarity score for test input should be 31', async () => {
  expect(await withTestInput(solve, parseInput)).toBe(31);
});

const solution = async () => {
  console.log(await withRealInput(solve, parseInput));
};

solution();
