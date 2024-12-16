import { swap, chunk } from '../common';
type fileID = number | '.';

interface FileDescription {
  id: number;
  blocks: number;
  freeSpace: number;
}

const solve = (input: string): number => {
  const files = asFiles(input);
  const blocks = asBlocks(files);
  compact(blocks);
  const result = blocks.reduce<number>(
    (acc, cur, index) => (cur === '.' ? acc : acc + cur * index),
    0,
  );
  return result;
};

const compact = (blocks: fileID[]) => {
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

const asBlocks = (files: FileDescription[]): fileID[] => {
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

export { solve };
