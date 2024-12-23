import { asGrid, cardinalSquares, Coord, Grid, toCoords } from '../common';

interface Region {
  crop: string;
  coords: Coord[];
  perimiter: number;
}

const solve = (input: string): number => {
  const grid = asGrid(input);
  const regions = getRegions(grid);
  const price = regions.reduce(
    (total, region) => total + region.coords.length * region.perimiter,
    0,
  );
  return price;
};

const getRegions = (grid: Grid): Region[] => {
  const unvisited = toCoords(grid);
  const regions: Region[] = [];
  while (unvisited.length !== 0) {
    const current = unvisited.pop()!;
    regions.push(buildRegion(current, unvisited, grid));
  }

  return regions;
};

const buildRegion = (coord: Coord, unvisited: Coord[], grid: Grid): Region => {
  const crop = cropAt(coord, grid);
  const adjacent = cardinalSquares(coord, grid);
  const region = {
    crop,
    coords: [coord],
    perimiter: contributionToPerimter(coord, crop, grid),
  };

  if (!adjacent.some((coord) => cropAt(coord, grid) === crop)) {
    return region;
  } else {
  }
};

const findAdjacentRegion = (
  grid: Grid,
  regions: Region[],
  coord: Coord,
  crop: string,
) => {
  return regions.find(
    (region) =>
      region.crop === crop &&
      region.coords.some((c) => adjacent(grid, c, coord)),
  );
};

const cropAt = ([row, col]: Coord, grid: Grid): string => grid[row][col];

const contributionToPerimter = (
  coord: Coord,
  crop: string,
  grid: Grid,
): number => {
  return (
    4 -
    cardinalSquares(coord, grid)
      .map((coord) => cropAt(coord, grid))
      .filter((c) => c === crop).length
  );
};

const adjacent = (grid: Grid, a: Coord, b: Coord): boolean => {
  return cardinalSquares(a, grid).some((coord) => equalCoord(coord, b));
};

const equalCoord = (a: Coord, b: Coord): boolean =>
  a[0] === b[0] && a[1] === b[1];
export { solve };
