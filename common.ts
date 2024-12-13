import fs from 'fs/promises';
import path from 'path';

let DAY = 1;

const setDay = (newDay: number) => (DAY = newDay);

const withTestInput = async (
  solver: (input: string) => number,
): Promise<number> => {
  return solver(
    await readInput(path.join(__dirname, `day${DAY}/test_input.txt`)),
  );
};

const withRealInput = async (
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

const inBounds = <T>([x, y]: Coord, puzzle: T[][]) => {
  return x < puzzle.length && x >= 0 && y >= 0 && y < puzzle[0].length;
};

const asGrid = (input: string): Grid => {
  return input.split('\r\n').map((line) => line.split(''));
};

type Coord = [number, number];

type Grid = string[][];

export {
  inputAsLines,
  readInput,
  zip,
  zipTail,
  increasing,
  decreasing,
  setDay,
  withTestInput,
  withRealInput,
  Coord,
  Grid,
  inBounds,
  asGrid,
};
