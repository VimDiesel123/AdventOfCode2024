import { decreasing, increasing, zipTail } from '../common';

const solve = (reports: number[][]): number => {
  return reports.filter(safeReport).length;
};

const safeDifference = (report: number[]): boolean => {
  return zipTail(report).every(
    ([first, second]) =>
      Math.abs(first - second) >= 1 && Math.abs(second - first) <= 3,
  );
};

const safeReport = (report: number[]): boolean => {
  return safeDifference(report) && (increasing(report) || decreasing(report));
};

export { solve, safeReport };
