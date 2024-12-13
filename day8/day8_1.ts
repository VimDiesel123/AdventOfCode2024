import { asGrid, Coord, Grid } from '../common';

interface Antenna {
  coord: Coord;
  frequency: string;
}

const solve = (input: string): number => {
  const grid = asGrid(input);
  const antennas = getAntennas(grid);
  console.log(pathToAntenna([0, 0], antennas[0]));
  return 0;
};

const getAntennas = (grid: Grid): Antenna[] => {
  const result: Antenna[] = [];
  for (let row = 0; row < grid.length; ++row) {
    for (let col = 0; col < grid[row].length; ++col) {
      if (grid[row][col] !== '.') {
        result.push({ coord: [row, col], frequency: grid[row][col] });
      }
    }
  }
  return result;
};

const pathToAntenna = (coord: Coord, antenna: Antenna): [number, number] => {
  return [
    Math.abs(coord[0] - antenna.coord[0]),
    Math.abs(coord[1] - antenna.coord[1]),
  ];
};

const hasTwoAntennasInLine = (coord: Coord, antennas: Antenna[]): boolean => {};

const distance = (a: Coord, b: Coord): number =>
  Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);

export { solve };
