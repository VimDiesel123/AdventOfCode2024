import similarityScore from './day1_2';
import { parseInput } from './day1_1';
import { setDay, withTestInput } from '../common';

setDay(1);

test('Similarity score for test input should be 31', async () => {
  expect(await withTestInput(similarityScore, parseInput)).toBe(31);
});