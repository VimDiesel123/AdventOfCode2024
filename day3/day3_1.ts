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

const solve = (input: string): number => {
  const operations = parseInput(input);
  return operations.reduce((acc, cur) => acc + cur[1] * cur[2], 0);
};

export { solve };
