import sum from '../sum';

interface Equation {
  answer: number;
  numbers: number[];
}
const solve = (input: string): number => {
  const equations = parseEquations(input);
  const calibrations = equations.filter(({ answer, numbers }) =>
    possibleToMake(answer, numbers, 0),
  );
  return calibrations.map((cal) => cal.answer).reduce(sum);
};

const possibleToMake = (
  target: number,
  remainingNumbers: number[],
  current: number,
): boolean => {
  if (target === current) return true;
  else if (remainingNumbers.length === 0 && target !== current) return false;
  else {
    return (
      possibleToMake(
        target,
        remainingNumbers.slice(1),
        current + remainingNumbers[0],
      ) ||
      possibleToMake(
        target,
        remainingNumbers.slice(1),
        current * remainingNumbers[0],
      )
    );
  }
};

const parseEquations = (input: string): Equation[] => {
  const equationRegex = /(\d+)/g;
  const equations = input.split('\r\n').map((line) => {
    const matches = [...line.match(equationRegex)!].map(Number);

    return {
      answer: matches[0],
      numbers: matches.slice(1),
    };
  });
  return equations;
};

export { solve, parseEquations };
