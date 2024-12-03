const similarityScore = ([left, right]: [number[], number[]]): number => {
  return left.reduce(
    (acc, cur) => acc + cur * right.filter((num) => num === cur).length,
    0,
  );
};

export default similarityScore;
