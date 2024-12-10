import { setDay, withRealInput } from '../common';
  import { solve as solver1 } from './day7_1';
  import { solve as solver2 } from './day7_2';
  
  setDay(7);

  withRealInput(solver1).then((result) =>
    console.log('Solution for day 7 part 1: ', result),
  );
  
  withRealInput(solver2).then((result) =>
    console.log('Solution for day 7 part 2: ', result),
  );

  