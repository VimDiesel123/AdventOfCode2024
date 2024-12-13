import { setDay, withRealInput } from '../common';
  import { solve as solver1 } from './day8_1';
  import { solve as solver2 } from './day8_2';
  
  setDay(8);

  withRealInput(solver1).then((result) =>
    console.log('Solution for day 8 part 1: ', result),
  );
  
  withRealInput(solver2).then((result) =>
    console.log('Solution for day 8 part 2: ', result),
  );

  