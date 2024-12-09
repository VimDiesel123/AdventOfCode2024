import { setDay, withTestInput } from '../common';
import { solve } from './day2_2';

setDay(2);

test('Safe reports for test input should be 4', async () => {
  expect(await withTestInput(solve)).toBe(4);
});
