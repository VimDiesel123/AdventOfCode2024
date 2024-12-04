import { zip } from '../common';

const solve = ([left, right]: [number[], number[]]): number => {
  return zip(left.sort(), right.sort()).reduce(
    (acc, [left, right]) => acc + Math.abs(left - right),
    0,
  );
};

export { solve };
