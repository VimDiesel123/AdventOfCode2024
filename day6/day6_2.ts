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

  return -1;
};

const canCreateLoop = (grid: Grid, state: State, states: State[]): boolean => {
  const forcedChangeInDirection = changeDirection(state);
  const nextMove = states[states.indexOf(state) + 1];
  if (nextMove && samePositionAndDirection(forcedChangeInDirection, nextMove))
    return false;

  return eventuallyLoops(grid, forcedChangeInDirection, states);
};

const alreadyContainsState = (needle: State, states: State[]): boolean => {
  return (
    states.find((state) => samePositionAndDirection(needle, state)) !==
    undefined
  );
};

const eventuallyLoops = (
  grid: Grid,
  state: State,
  states: State[],
): boolean => {
  let start = state;
  start.done = false;
  while (!start.done) {
    console.log(start);
    if (alreadyContainsState(start, states)) return true;
    start = move(grid, state);
  }
  return false;
};

const changeDirection = (state: State): State => ({
  ...state,
  currentDirection: nextDirection(state.currentDirection),
});

const samePositionAndDirection = (state1: State, state2: State): boolean => {
  return (
    state1.currentDirection === state2.currentDirection &&
    state1.currentPosition[0] === state2.currentPosition[0] &&
    state1.currentPosition[1] === state2.currentPosition[1]
  );
};

export { solve };
