import { setDay, withRealInput } from '../common';
  import { solve as solver1 } from './day6_1';
  import { solve as solver2 } from './day6_2';
  
  setDay(6);

  withRealInput(solver1).then((result) =>
    console.log('Solution for day 6 part 1: ', result),
  );
  
  withRealInput(solver2).then((result) =>
    console.log('Solution for day 6 part 2: ', result),
  );

  