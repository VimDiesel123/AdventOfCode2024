import { setDay, withRealInput } from '../common';
import { solve as solver1 } from './day1_1';
import { solve as solver2 } from './day1_2';

setDay(1);

const parseInput = (input: string): [number[], number[]] => {
  const lines = input.split('\r\n');
  const result = lines.reduce<[number[], number[]]>(
    ([left, right], line) => {
      const [first, second] = line.split('   ').map(Number);
      left.push(first);
      right.push(second);
      return [left, right];
    },
    [[], []],
  );
  return result;
};

withRealInput(solver1, parseInput).then((result) =>
  console.log('Solution to part 1: ', result),
);

withRealInput(solver2, parseInput).then((result) =>
  console.log('Solution to part 2: ', result),
);

export { parseInput };
