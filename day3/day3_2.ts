const parseInput = (input: string): [number, number][] => {
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

const solve = (input: string): number => {
  const operations = parseInput(input);
  return operations.reduce((acc, [first, second]) => acc + first * second, 0);
};

export { solve };
