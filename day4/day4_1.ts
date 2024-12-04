const solve = (input: string): number => {
  const puzzle = input.split('\r\n').map((line) => line.split(''));
  for (let row = 0; row < puzzle.length; ++row) {
    for (let col = 0; col < puzzle[0].length; ++col) {
      console.log('LETTER = ', puzzle[row][col]);
      console.log(
        'NEXT LETTER LOCATION: ',
        nextLetterLocation(puzzle[row][col], [row, col], puzzle),
      );
    }
  }
  return 0;
};

const nextLetterLocation = (
  currentLetter: string,
  coord: [number, number],
  puzzle: string[][],
): number => {
  const target = nextLetter(currentLetter);
  possibleCoords(coord).forEach(([x, y]) => {
    if (inBounds([x, y], puzzle) && puzzle[x][y] === target) return coord;
  });
  return -1;
};

const inBounds = ([x, y]: [number, number], puzzle: string[][]) => {
  return x < puzzle.length && x >= 0 && y >= 0 && y < puzzle[0].length;
};

const nextLetter = (currentLetter: string) => {
  if (currentLetter == 'X') return 'M';
  if (currentLetter == 'M') return 'A';
  if (currentLetter == 'A') return 'S';
  else throw new Error('OOPS');
};

const possibleCoords = ([x, y]: [number, number]): [number, number][] => {
  return [
    [x + 1, y],
    [x + 1, y + 1],
    [x + 1, y - 1],
    [x - 1, y],
    [x - 1, y + 1],
    [x - 1, y - 1],
    [x, y + 1],
    [x, y - 1],
  ];
};

export { solve };
