import totalDistance, { parseInput } from './day1_1';
import { readAndParseTestInput, setDay } from '../common';

setDay(1);

test('Total distance for test input should be 11', async () => {
  const [left, right] = await readAndParseTestInput(parseInput);
  expect(totalDistance(left, right)).toBe(11);
});
