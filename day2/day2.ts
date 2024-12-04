import { setDay, withRealInput } from '../common';
import { solve as solver1 } from './day2_1';
import { solve as solver2 } from './day2_2';

setDay(2);

const parseInput = (input: string): number[][] => {
  const lines = input.split('\r\n');
  const reports = lines.map((line) =>
    line.split(' ').map((num) => Number(num)),
  );
  return reports;
};

withRealInput(solver1, parseInput).then((result) =>
  console.log('Solution Day 2 to part 1: ', result),
);

withRealInput(solver2, parseInput).then((result) =>
  console.log('Solution to part 2: ', result),
);

export { parseInput };
