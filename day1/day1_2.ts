import { parseInput } from './day1_1';

const solve = (input: string): number => {
  const [left, right] = parseInput(input);
  return left.reduce(
    (acc, cur) => acc + cur * right.filter((num) => num === cur).length,
    0,
  );
};

export { solve };
