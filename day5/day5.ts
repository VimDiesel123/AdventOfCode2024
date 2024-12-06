import { setDay, withRealInput2 } from '../common';
import { solve as solver1 } from './day5_1';
import { solve as solver2 } from './day5_2';

setDay(5);

withRealInput2(solver1).then((result) =>
  console.log('Solution for day 5 part 1: ', result),
);

withRealInput2(solver2).then((result) =>
  console.log('Solution for day 5 part 2: ', result),
);
