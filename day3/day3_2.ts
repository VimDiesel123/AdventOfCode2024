const solve = (operations: [number, number][]): number => {
  return operations.reduce((acc, [first, second]) => acc + first * second, 0);
};

export { solve };
