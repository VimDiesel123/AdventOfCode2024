import { solve } from './day1_2';
import { setDay, withTestInput } from '../common';

setDay(1);

test('Similarity score for test input should be 31', async () => {
  expect(await withTestInput(solve)).toBe(31);
});
