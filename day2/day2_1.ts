import { decreasing, increasing, zipTail } from '../common';

const parseInput = (input: string): number[][] => {
  const lines = input.split('\r\n');
  const reports = lines.map((line) =>
    line.split(' ').map((num) => Number(num)),
  );
  return reports;
};

const safeReports = (reports: number[][]): number => {
  const safe = reports.filter(
    (report) =>
      safeDifference(report) && (increasing(report) || decreasing(report)),
  );
  return safe.length;
};

const safeDifference = (report: number[]): boolean => {
  return zipTail(report).every(
    ([first, second]) =>
      Math.abs(first - second) >= 1 && Math.abs(second - first) <= 3,
  );
};

export { parseInput, safeReports };
