import similarityScore from './day1_2';
import { parseInput } from './day1_1';
import { readInput } from '../common';
import path from 'path';

test('Similarity score for test input should be 31', async () => {
  const input = await readInput(path.join(__dirname, 'test_input.txt'));
  const [left, right] = parseInput(input);
  expect(similarityScore(left, right)).toBe(31);
});
