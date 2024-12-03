import fs from 'fs/promises';
import path from 'path';
import { parseInput } from './day1_1';

const similarityScore = ([left, right]: [number[], number[]]): number => {
  return left.reduce(
    (acc, cur) => acc + cur * right.filter((num) => num === cur).length,
    0,
  );
};

export default similarityScore;

const solve = async () => {
  const input = await fs.readFile(path.join(__dirname, 'input.txt'), 'utf-8');
  console.log(similarityScore(parseInput(input)));
};

solve();
