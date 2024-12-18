import { asGrid, toCoords, Coord, inBounds } from '../common';

const solve = (input: string): number => {
  const grid = asGrid(input);
  const numberGrid = grid.map((row) => row.map(Number));
  const trailheads = toCoords(numberGrid).filter(
    ([row, col]) => numberGrid[row][col] === 0,
  );
  return trailheads.reduce(
    (acc, cur) => acc + uniqueCoords(summitsReachable(cur, numberGrid)).length,
    0,
  );
};

const summitsReachable = (coord: Coord, grid: number[][]): Coord[] => {
  const [row, col] = coord;
  const elevation = grid[row][col];
  if (elevation === 9) {
    return [coord];
  }
  const possiblePaths = cardinalSquares([row, col], grid).filter(
    ([row, col]) => grid[row][col] === elevation + 1,
  );
  if (possiblePaths.length === 0) return [];
  return possiblePaths.reduce<Array<Coord>>(
    (acc, cur) => [...acc, ...summitsReachable(cur, grid)],
    [],
  );
};

const cardinalSquares = <T>([row, col]: Coord, grid: T[][]): Coord[] => {
  const possiblities: Coord[] = [
    [row + 1, col],
    [row - 1, col],
    [row, col + 1],
    [row, col - 1],
  ];
  return possiblities.filter((coord) => inBounds(coord, grid));
};

const uniqueCoords = (coords: Coord[]): Coord[] => {
  return coords.reduce<Array<Coord>>((acc, cur) => {
    if (!acc.find((coord) => coord[0] === cur[0] && coord[1] === cur[1]))
      acc.push(cur);
    return acc;
  }, []);
};

export { solve };
