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

export { inputAsLines, readInput, zip };
