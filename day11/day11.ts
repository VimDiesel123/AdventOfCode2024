import { setDay, withRealInput } from '../common';
  import { solve as solver1 } from './day11_1';
  import { solve as solver2 } from './day11_2';
  
  setDay(11);

  withRealInput(solver1).then((result) =>
    console.log('Solution for day 11 part 1: ', result),
  );
  
  withRealInput(solver2).then((result) =>
    console.log('Solution for day 11 part 2: ', result),
  );

  