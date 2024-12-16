import { setDay, withRealInput } from '../common';
  import { solve as solver1 } from './day9_1';
  import { solve as solver2 } from './day9_2';
  
  setDay(9);

  withRealInput(solver1).then((result) =>
    console.log('Solution for day 9 part 1: ', result),
  );
  
  withRealInput(solver2).then((result) =>
    console.log('Solution for day 9 part 2: ', result),
  );

  