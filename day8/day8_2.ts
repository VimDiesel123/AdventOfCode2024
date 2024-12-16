import { asGrid, Coord, toCoords, markedGrid } from '../common';
import { getAntennas, Antenna, Path, sameFrequency } from './day8_1';

const solve = (input: string): number => {
  const grid = asGrid(input);
  const antennas = getAntennas(grid);
  const antinodes = toCoords(grid).filter((coord) =>
    twoAntennasInLine(coord, antennas),
  );
  //console.log(markedGrid(grid, antinodes, '#'));
  return antinodes.length;
};

const twoAntennasInLine = (
  coord: Coord,
  antennas: Antenna[],
): [Antenna, Antenna] | false => {
  for (const antenna1 of antennas) {
    for (const antenna2 of antennas) {
      if (antenna1 === antenna2) continue;
      if (
        sameFrequency(antenna1, antenna2) &&
        inLine(coord, antenna1, antenna2)
      )
        return [antenna1, antenna2];
    }
  }
  return false;
};

const inLine = (a: Coord, antenna1: Antenna, antenna2: Antenna): boolean => {
  if (sameCoord(a, antenna1.coord) || sameCoord(a, antenna2.coord)) return true;
  const slope1 = slope(a, antenna1.coord);
  const slope2 = slope(a, antenna2.coord);
  return slope1 === slope2;
};

const sameCoord = (a: Coord, b: Coord): boolean =>
  a[0] === b[0] && a[1] === b[1];

const slope = (a: Coord, b: Coord) => (b[1] - a[1]) / (b[0] - a[0]);

export { solve };
