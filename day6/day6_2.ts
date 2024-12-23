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

  const loopers = states.filter((state, index) =>
    canCreateLoop(grid, state, index, states),
  );

  return loopers.length;
};

const canCreateLoop = (
  grid: Grid,
  state: State,
  index: number,
  states: State[],
): boolean => {
  const forcedChangeInDirection = changeDirection(state);
  const nextMove = states[index + 1];
  if (nextMove && samePositionAndDirection(forcedChangeInDirection, nextMove))
    return false;

  const prev = states.slice(0, index);
  prev.push(forcedChangeInDirection);
  return eventuallyLoops(grid, forcedChangeInDirection, prev);
};

const alreadyContainsState = (needle: State, states: State[]): boolean => {
  return (
    states.find((state) => samePositionAndDirection(needle, state)) !==
    undefined
  );
};

const previousStates = (needle: State, states: State[]): State[] =>
  states.slice(
    0,
    states.findIndex((state) => samePositionAndDirection(needle, state)) + 1,
  );

const eventuallyLoops = (
  grid: Grid,
  state: State,
  previousStates: State[],
): boolean => {
  let start = state;
  while (!start.done) {
    start = move(grid, start);
    if (alreadyContainsState(start, previousStates)) return true;
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
