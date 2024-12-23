import { setDay, withRealInput } from '../common';
  import { solve as solver1 } from './day12_1';
  import { solve as solver2 } from './day12_2';
  
  setDay(12);

  withRealInput(solver1).then((result) =>
    console.log('Solution for day 12 part 1: ', result),
  );
  
  withRealInput(solver2).then((result) =>
    console.log('Solution for day 12 part 2: ', result),
  );

  