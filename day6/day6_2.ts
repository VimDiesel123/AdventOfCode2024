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

const samePositionAndDirection = (state1: State, state2: State): boolean => {
  return (
    state1.currentDirection === state2.currentDirection &&
    state1.currentPosition[0] === state2.currentPosition[0] &&
    state1.currentPosition[1] === state2.currentPosition[1]
  );
};

export { solve };
