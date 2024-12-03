import { setDay, withRealInput } from '../common';
import { solve as solver1, parseInput } from './day2_1';
import { solve as solver2 } from './day2_2';

setDay(2);

withRealInput(solver1, parseInput).then((result) =>
  console.log('Solution Day 2 to part 1: ', result),
);

withRealInput(solver2, parseInput).then((result) =>
  console.log('Solution to part 2: ', result),
);
