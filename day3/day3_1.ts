const solve = (operations: [string, number, number][]): number => {
  return operations.reduce((acc, cur) => acc + cur[1] * cur[2], 0);
};

export { solve };
