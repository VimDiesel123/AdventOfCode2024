const solve = (input: string): number => {
  const stones = input.split(' ').map(Number);
  let start = stones;
  for (let i = 0; i < 25; ++i) {
    start = blink(start);
  }

  return start.length;
};

const blink = (stones: number[]): number[] => {
  return stones.flatMap((stone) => {
    if (stone === 0) return 1;
    else if (evenDigits(stone)) return splitDigits(stone);
    else return stone * 2024;
  });
};

const splitDigits = (num: number): [number, number] => {
  const string = num.toString();
  const firstHalf = [...string].slice(0, string.length / 2).join('');
  const secondHalf = [...string].slice(string.length / 2).join('');
  return [Number(firstHalf), Number(secondHalf)];
};

const evenDigits = (num: number): boolean => num.toString().length % 2 === 0;

export { solve };
