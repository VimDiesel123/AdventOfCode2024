import similarityScore from './day1_2';
import { parseInput } from './day1_1';
import { readAndParseTestInput, setDay } from '../common';

setDay(1);

test('Similarity score for test input should be 31', async () => {
  const [left, right] = await readAndParseTestInput(parseInput);
  expect(similarityScore(left, right)).toBe(31);
});
