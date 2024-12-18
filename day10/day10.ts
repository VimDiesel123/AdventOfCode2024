import { setDay, withRealInput } from '../common';
  import { solve as solver1 } from './day10_1';
  import { solve as solver2 } from './day10_2';
  
  setDay(10);

  withRealInput(solver1).then((result) =>
    console.log('Solution for day 10 part 1: ', result),
  );
  
  withRealInput(solver2).then((result) =>
    console.log('Solution for day 10 part 2: ', result),
  );

  