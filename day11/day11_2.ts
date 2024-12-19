import { splitDigits, evenDigits } from './day11_1';

type Stones = Map<number, number>;

const solve = (input: string): number => {
  const stones = input.split(' ').map(Number);
  const counts = stones.reduce(
    (map, cur) => map.set(cur, map.get(cur) ?? 0 + 1),
    new Map<number, number>(),
  );

  let start = counts;
  for (let i = 0; i < 75; ++i) {
    start = blink(start);
  }

  return [...start.entries()].reduce((acc, [, count]) => acc + count, 0);
};

const blink = (stones: Stones): Stones => {
  const result: Stones = new Map();
  for (const [stone, count] of stones.entries()) {
    if (stone === 0) {
      result.set(1, (result.get(1) ?? 0) + count);
    } else if (evenDigits(stone)) {
      const [left, right] = splitDigits(stone);
      result.set(left, (result.get(left) ?? 0) + count);
      result.set(right, (result.get(right) ?? 0) + count);
    } else {
      result.set(stone * 2024, (result.get(stone * 2024) ?? 0) + count);
    }
  }
  return result;
};

export { solve };
