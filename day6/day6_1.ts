import { Coord, inBounds, Grid } from '../common';

type Direction = 'up' | 'down' | 'left' | 'right';

interface State {
  currentPosition: Coord;
  currentDirection: Direction;
  visited: boolean[][];
  done: boolean;
}

const solve = (input: string): number => {
  const grid = asGrid(input);
  const start = startingPosition(grid);
  const visited = createdVisitedArray(grid, start);
  let state: State = {
    currentPosition: start,
    currentDirection: 'up',
    visited: visited,
    done: false,
  };
  while (!state.done) {
    state = move(grid, state);
  }
  return state.visited.flat().reduce((acc, cur) => acc + Number(cur), 0);
};

const offset = (direction: Direction): [number, number] => {
  if (direction === 'up') return [-1, 0];
  else if (direction === 'down') return [1, 0];
  else if (direction === 'left') return [0, -1];
  else if (direction === 'right') return [0, 1];
  else {
    throw new Error('oops');
  }
};

const move = (grid: string[][], state: State): State => {
  const { currentPosition, currentDirection, visited } = state;
  visit(currentPosition, visited);
  const off = offset(currentDirection);
  const next = nextPosition(currentPosition, off);
  let result: State;
  if (!inBounds(next, grid)) {
    return {
      ...state,
      done: true,
    };
  }
  const nextElement = grid[next[0]][next[1]];
  if (nextElement === '#') {
    result = {
      ...state,
      currentDirection: nextDirection(currentDirection),
    };
  } else {
    result = {
      ...state,
      currentPosition: next,
    };
  }
  return result;
};

const nextPosition = (coord: Coord, offet: [number, number]): Coord => {
  return [coord[0] + offet[0], coord[1] + offet[1]];
};

const visit = (coord: Coord, visited: boolean[][]) => {
  visited[coord[0]][coord[1]] = true;
  return visited;
};

const nextDirection = (direction: Direction): Direction => {
  if (direction === 'up') return 'right';
  else if (direction === 'right') return 'down';
  else if (direction === 'down') return 'left';
  else if (direction === 'left') return 'up';
  else throw new Error('Ooooops');
};

const createdVisitedArray = (grid: Grid, startingPosition: Coord) => {
  return grid.map((row, rowIndex) =>
    row.map(
      (_, colIndex) =>
        rowIndex === startingPosition[0] && colIndex === startingPosition[1],
    ),
  );
};

const startingPosition = (grid: Grid): Coord => {
  for (let row = 0; row < grid.length; ++row) {
    for (let col = 0; col < grid[row].length; ++col) {
      if (grid[row][col] === '^') return [row, col];
    }
  }
  throw new Error('Oops');
};

const asGrid = (input: string): Grid => {
  return input.split('\r\n').map((line) => line.split(''));
};

export {
  solve,
  State,
  asGrid,
  startingPosition,
  createdVisitedArray,
  move,
  nextPosition,
  nextDirection,
};
