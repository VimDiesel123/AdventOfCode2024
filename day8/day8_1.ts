import { asGrid, Coord, Grid, markedGrid, toCoords } from '../common';

interface Antenna {
  coord: Coord;
  frequency: string;
}

type Path = [number, number];

const solve = (input: string): number => {
  const grid = asGrid(input);
  const antennas = getAntennas(grid);
  const antinodes = toCoords(grid).filter((coord) =>
    twoAntennasInLine(coord, antennas),
  );

  //console.log(markedGrid(grid, antinodes, '#'));
  return antinodes.length;
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

const withPath = (coord: Coord, antenna: Antenna): [Antenna, Path] => {
  return [antenna, [antenna.coord[0] - coord[0], antenna.coord[1] - coord[1]]];
};

const AllAntennasWithPath = (
  coord: Coord,
  antennas: Antenna[],
): [Antenna, Path][] => {
  return antennas.map((antenna) => withPath(coord, antenna));
};

const twiceAsFar = (a: Path, b: Path): boolean => {
  return a[0] * 2 === b[0] && a[1] * 2 === b[1];
};

const twoAntennasInLine = (
  coord: Coord,
  antennas: Antenna[],
): [Antenna, Antenna] | false => {
  const paths = AllAntennasWithPath(coord, antennas);

  for (const [antenna1, path1] of paths) {
    for (const [antenna2, path2] of paths) {
      if (antenna1 === antenna2) continue;
      if (twiceAsFar(path1, path2) && sameFrequency(antenna1, antenna2))
        return [antenna1, antenna2];
    }
  }
  return false;
};

const sameFrequency = (a: Antenna, b: Antenna): boolean =>
  a.frequency === b.frequency;

export { solve };
