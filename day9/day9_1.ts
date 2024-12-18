import { swap, chunk } from '../common';

type FileID = number | '.';

interface FileDescription {
  id: number;
  blocks: number;
  freeSpace: number;
}

const solve = (input: string): number => {
  const files = asFiles(input);
  const blocks = asBlocks(files);
  compact(blocks);
  return checkSum(blocks);
};

const checkSum = (blocks: FileID[]): number =>
  blocks.reduce<number>(
    (acc, cur, index) => (cur === '.' ? acc : acc + cur * index),
    0,
  );

const compact = (blocks: FileID[]) => {
  let start = 0;
  let end = blocks.length - 1;
  while (start < end) {
    if (blocks[start] === '.') {
      swap(blocks, start, end);
      end--;
    } else {
      start++;
    }
  }
};

const asBlocks = (files: FileDescription[]): FileID[] => {
  return files.flatMap(({ id, blocks, freeSpace }) =>
    Array(blocks).fill(id).concat(Array(freeSpace).fill('.')),
  );
};

const asFiles = (input: string): FileDescription[] => {
  const numbers = input.trim().split('').map(Number);
  const chunks = chunk(numbers, 2);
  return chunks.map(([blocks, freespace], index) =>
    toFileDescription(index, blocks, freespace),
  );
};

const toFileDescription = (
  id: number,
  blocks: number,
  freeSpace: number = 0,
): FileDescription => ({
  id,
  blocks,
  freeSpace,
});

export { solve, FileDescription, FileID, asBlocks, asFiles, checkSum };
