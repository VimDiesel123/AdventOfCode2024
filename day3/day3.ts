import { setDay, withRealInput } from '../common';
import { solve as solver1 } from './day3_1';
import { solve as solver2 } from './day3_2';

setDay(3);

withRealInput(solver1).then((result) =>
  console.log('Solution for day 3 part 1: ', result),
);

withRealInput(solver2).then((result) =>
  console.log('Solution for day 3 part 2: ', result),
);
