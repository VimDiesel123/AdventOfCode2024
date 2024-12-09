import { zip } from '../common';

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

const solve = (input: string): number => {
  const [left, right] = parseInput(input);
  return zip(left.sort(), right.sort()).reduce(
    (acc, [left, right]) => acc + Math.abs(left - right),
    0,
  );
};

export { solve, parseInput };
