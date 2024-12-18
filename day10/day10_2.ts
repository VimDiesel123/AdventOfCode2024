import { asGrid, toCoords, Coord } from '../common';
import { cardinalSquares } from './day10_1';

const solve = (input: string): number => {
  const grid = asGrid(input);
  const numberGrid = grid.map((row) => row.map(Number));
  const trailheads = toCoords(numberGrid).filter(
    ([row, col]) => numberGrid[row][col] === 0,
  );
  return trailheads.reduce((acc, cur) => acc + trailCount(cur, numberGrid), 0);
};

const trailCount = (coord: Coord, grid: number[][]): number => {
  const [row, col] = coord;
  const elevation = grid[row][col];
  if (elevation === 9) return 1;
  const possiblePaths = cardinalSquares([row, col], grid).filter(
    ([row, col]) => grid[row][col] === elevation + 1,
  );
  if (possiblePaths.length === 0) return 0;
  return possiblePaths.reduce((acc, cur) => acc + trailCount(cur, grid), 0);
};

export { solve };
