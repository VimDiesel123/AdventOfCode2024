import { solve } from './day2_1';
import { setDay, withTestInput } from '../common';

setDay(2);
test('Should be 2 safe reports for test input', async () => {
  expect(await withTestInput(solve)).toBe(2);
});
