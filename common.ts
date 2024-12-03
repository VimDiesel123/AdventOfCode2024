import fs from 'fs/promises';

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

export { inputAsLines, readInput, zip, zipTail, increasing, decreasing };
