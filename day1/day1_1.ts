import path from 'path';
import fs from 'fs/promises';
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

const totalDistance = ([left, right]: [number[], number[]]): number => {
  return zip(left.sort(), right.sort()).reduce(
    (acc, [left, right]) => acc + Math.abs(left - right),
    0,
  );
};

export default totalDistance;
export { parseInput };

const solve = async () => {
  const input = await fs.readFile(path.join(__dirname, 'input.txt'), 'utf-8');
  console.log(totalDistance(parseInput(input)));
};

solve();
