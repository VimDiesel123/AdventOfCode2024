import { inBounds, Coord } from '../common';

const solve = (input: string): number => {
  const puzzle = input.split('\r\n').map((line) => line.split(''));
  let result = 0;
  for (let row = 0; row < puzzle.length; ++row) {
    for (let col = 0; col < puzzle[row].length; ++col) {
      const diags = diagonals([row, col]);
      if (
        puzzle[row][col] !== 'A' ||
        diags.some((diag) => !inBounds(diag, puzzle))
      )
        continue;
      const diaganolLetters = diags.map(([row, col]) => puzzle[row][col]);
      if (
        diaganolLetters.filter((letter) => letter === 'M').length === 2 &&
        diaganolLetters.filter((letter) => letter === 'S').length === 2 &&
        diaganolLetters[0] !== diaganolLetters[-1] &&
        diaganolLetters[1] !== diaganolLetters[2]
      ) {
        result += 1;
      }
    }
  }
  return result;
};

const diagonals = ([row, col]: Coord): Coord[] => {
  return [
    [row + 1, col + 1],
    [row + 1, col - 1],
    [row - 1, col + 1],
    [row - 1, col - 1],
  ];
};

export { solve };
