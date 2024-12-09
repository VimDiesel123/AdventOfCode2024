import { setDay, withRealInput } from '../common';
import { solve as solver1 } from './day1_1';
import { solve as solver2 } from './day1_2';

setDay(1);

withRealInput(solver1).then((result) =>
  console.log('Solution to part 1: ', result),
);

withRealInput(solver2).then((result) =>
  console.log('Solution to part 2: ', result),
);
