import { setDay, withRealInput } from '../common';
import { solve as solver1 } from './day3_1';
import { solve as solver2 } from './day3_2';

setDay(3);

const parseInput = (input: string): [string, number, number][] => {
  const regex = /(mul)\((\d{1,3}),(\d{1,3})\)/g;
  const matches = [...input.matchAll(regex)];
  const test = matches.map((match): [string, number, number] => [
    match[1],
    Number(match[2]),
    Number(match[3]),
  ]);

  return test;
};

const parseInput2 = (input: string): [number, number][] => {
  input =
    "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";
  const regex = /(mul)\((\d{1,3}),(\d{1,3})\)/g;
  const matches = [...input.matchAll(regex)];
  return matches
    .filter((match) => shouldMultiply(input, match.index))
    .map((match): [number, number] => [Number(match[2]), Number(match[3])]);
};

const shouldMultiply = (input: string, index: number): boolean => {
  const multiply = 'do()';
  const dont = "don't()";
  const searchString = input.slice(0, index);
  const lastDo = searchString.lastIndexOf(multiply);
  const lastDont = searchString.lastIndexOf(dont);
  return lastDo >= lastDont;
};

export { parseInput, parseInput2 };

withRealInput(solver1, parseInput).then((result) =>
  console.log('Solution for day 3 part 1: ', result),
);

withRealInput(solver2, parseInput2).then((result) =>
  console.log('Solution for day 3 part 2: ', result),
);
