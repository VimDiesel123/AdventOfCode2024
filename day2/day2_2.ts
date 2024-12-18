import { safeReport } from './day2_1';
import { parseInput } from './day2_1';

const solve = (input: string): number => {
  const reports = parseInput(input);
  return reports.filter((report) => possibleReports(report).some(safeReport))
    .length;
};

const possibleReports = (report: number[]): number[][] => {
  const result = [];
  for (let i = 0; i < report.length; ++i) {
    result.push([...report.slice(0, i), ...report.slice(i + 1)]);
  }
  return result;
};

export { solve };
