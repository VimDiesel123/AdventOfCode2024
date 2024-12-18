import { splitDigits, evenDigits } from './day11_1';

const solve = (input: string): number => {
  const stones = input.split(' ').map(Number);
  const cache = new Map<number, [number, number]>();
  let start = stones;
  for (let i = 0; i < 75; ++i) {
    start = blink(start, cache);
  }
  return 0;
};

const blink = (
  stones: number[],
  cache: Map<number, [number, number]>,
): number[] => {
  return stones.flatMap((stone) => {
    if (stone === 0) return 1;
    else if (evenDigits(stone)) {
      if (cache.get(stone)) return cache.get(stone)!;
      else {
        cache.set(stone, splitDigits(stone));
        return cache.get(stone)!;
      }
    } else return stone * 2024;
  });
};

export { solve };
