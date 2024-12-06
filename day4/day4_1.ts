const solve = (input: string): number => {
  const puzzle = input.split('\r\n').map((line) => line.split(''));
  console.log(possibleWords([0, 4], puzzle));
  let result = 0;
  for (let row = 0; row < puzzle.length; ++row) {
    for (let col = 0; col < puzzle[row].length; ++col) {
      const letter = puzzle[row][col];
      if (letter !== 'X') continue;
      const words = possibleWords([row, col], puzzle);
      result += words.reduce(
        (matches, word) =>
          matches +
          Number(
            word.has('X') && word.has('M') && word.has('A') && word.has('S'),
          ),
        0,
      );
    }
  }
  return result;
};

const possibleWords = (
  [startX, startY]: Coord,
  puzzle: string[][],
): Set<string>[] => {
  const words = [];
  for (const dir of directions) {
    const { offset } = dir;
    const word: Set<string> = new Set();
    for (let i = 0; i < 4; ++i) {
      const nextCoord: Coord = [startX + offset[0] * i, startY + offset[1] * i];
      if (inBounds(nextCoord, puzzle)) {
        word.add(puzzle[nextCoord[0]][nextCoord[1]]);
      }
    }
    words.push(word);
  }
  return words;
};

const inBounds = ([x, y]: Coord, puzzle: string[][]) => {
  return x < puzzle.length && x >= 0 && y >= 0 && y < puzzle[0].length;
};

const nextLetter = (currentLetter: string) => {
  if (currentLetter == 'X') return 'M';
  if (currentLetter == 'M') return 'A';
  if (currentLetter == 'A') return 'S';
  else throw new Error('OOPS');
};

interface Direction {
  name: string;
  offset: [number, number];
}

type Coord = [number, number];

const directions: Direction[] = [
  { name: 'up', offset: [-1, 0] },
  { name: 'down', offset: [1, 0] },
  { name: 'left', offset: [0, -1] },
  { name: 'right', offset: [0, 1] },
  { name: 'down-left', offset: [1, -1] },
  { name: 'down-right', offset: [1, 1] },
  { name: 'up-left', offset: [-1, -1] },
  { name: 'up-right', offset: [-1, 1] },
];

export { solve };
