import {
  asGrid,
  startingPosition,
  move,
  createdVisitedArray,
  nextDirection,
  State,
} from './day6_1';
import { Grid } from '../common';

const solve = (input: string): number => {
  const grid = asGrid(input);
  const start = startingPosition(grid);
  const visited = createdVisitedArray(grid, start);
  const states: State[] = [];
  let currentState: State = {
    currentPosition: start,
    currentDirection: 'up',
    visited: visited,
    done: false,
  };
  while (!currentState.done) {
    states.push(currentState);
    currentState = move(grid, currentState);
  }
  const loopers = states.filter((state) => introducesLoop(grid, state, states));
  console.log(
    loopers.map((loop) => [loop.currentDirection, loop.currentPosition]),
  );

  return -1;
};

const introducesLoop = (grid: Grid, state: State, states: State[]): boolean => {
  const nextMove = move(grid, state);

  const afterChangeDirection: State = {
    ...state,
    currentDirection: nextDirection(state.currentDirection),
  };

  const matchingState = states.find((state) =>
    samePositionAndDirection(state, afterChangeDirection),
  );

  return matchingState !== undefined;
};

const samePositionAndDirection = (state1: State, state2: State): boolean => {
  return (
    state1.currentDirection == state2.currentDirection &&
    state1.currentPosition == state2.currentPosition
  );
};

export { solve };
