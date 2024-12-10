import { setDay, withRealInput } from '../common';
import { solve as solver1 } from './day4_1';
import { solve as solver2 } from './day4_2';

setDay(4);

withRealInput(solver1).then((result) =>
  console.log('Solution for day 4 part 1: ', result),
);

withRealInput(solver2).then((result) =>
  console.log('Solution for day 4 part 2: ', result),
);
