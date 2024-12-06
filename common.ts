import fs from 'fs/promises';
import path from 'path';

let DAY = 1;

const setDay = (newDay: number) => (DAY = newDay);

const readAndParseTestInput = async <T>(parser: (input: string) => T) => {
  const input = await readInput(
    path.join(__dirname, `day${DAY}/test_input.txt`),
  );
  const parsedInput = parser(input);
  return parsedInput;
};

const withTestInput = async <T>(
  solver: (args: T) => number,
  parser: (input: string) => T,
): Promise<number> => {
  return solver(await readAndParseTestInput(parser));
};

const withTestInput2 = async (
  solver: (input: string) => number,
): Promise<number> => {
  return solver(
    await readInput(path.join(__dirname, `day${DAY}/test_input.txt`)),
  );
};

const readAndParseRealInput = async <T>(parser: (input: string) => T) => {
  const input = await readInput(path.join(__dirname, `day${DAY}/input.txt`));
  const parsedInput = parser(input);
  return parsedInput;
};

const withRealInput = async <T>(
  solver: (args: T) => number,
  parser: (input: string) => T,
): Promise<number> => {
  return solver(await readAndParseRealInput(parser));
};

const withRealInput2 = async (
  solver: (input: string) => number,
): Promise<number> => {
  return solver(await readInput(path.join(__dirname, `day${DAY}/input.txt`)));
};

const readInput = async (path: string) => {
  return await fs.readFile(path, 'utf-8');
};

const inputAsLines = async (path: string): Promise<string[]> => {
  try {
    return (await fs.readFile(path, 'utf-8')).split('\r\n');
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const zip = <T, U>(a: T[], b: U[]): [T, U][] => {
  return a.map((elem, index) => [elem, b[index]]);
};

const zipTail = <Type>(a: Type[]) => {
  return zip(a.slice(0, a.length - 1), a.slice(1));
};

const increasing = (nums: number[]): boolean => {
  return zipTail(nums).every(([first, second]) => second > first);
};

const decreasing = (nums: number[]): boolean => {
  return zipTail(nums).every(([first, second]) => first > second);
};

export {
  inputAsLines,
  readInput,
  zip,
  zipTail,
  increasing,
  decreasing,
  readAndParseTestInput,
  setDay,
  withTestInput,
  withRealInput,
  withTestInput2,
  withRealInput2
};
