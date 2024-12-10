import sum from '../sum';
import { parseEquations } from './day7_1';
const solve = (input: string): number => {
  const equations = parseEquations(input);
  const calibrations = equations.filter((eq) =>
    possibleToMake(eq.answer, eq.numbers, 0),
  );
  return calibrations.map((cal) => cal.answer).reduce(sum);
};

const possibleToMake = (
  target: number,
  remainingNumbers: number[],
  current: number,
): boolean => {
  if (target === current && remainingNumbers.length === 0) return true;
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
      ) ||
      possibleToMake(
        target,
        remainingNumbers.slice(1),
        Number('' + current + remainingNumbers[0]),
      )
    );
  }
};

export { solve };
