import { asFiles, FileDescription, asBlocks, checkSum } from './day9_1';

const solve = (input: string): number => {
  const files = asFiles(input);
  const compacted = files
    .slice(1)
    .reverse()
    .reduce((acc, cur) => moveFile(cur, acc), files);
  return checkSum(asBlocks(compacted));
};

const moveFile = (
  mover: FileDescription,
  files: FileDescription[],
): FileDescription[] => {
  const index = files.findIndex((file) => file === mover);
  const firstWithFreeSpace = files
    .slice(0, index)
    .find((file) => file.freeSpace >= mover.blocks);
  if (!firstWithFreeSpace) return files;

  const previous = files[index - 1];
  const dest = files.findIndex((file) => file === firstWithFreeSpace) + 1;

  previous.freeSpace += mover.blocks + mover.freeSpace;
  mover.freeSpace = firstWithFreeSpace.freeSpace - mover.blocks;
  firstWithFreeSpace.freeSpace = 0;
  arrayMove(files, index, dest);
  return files;
};

const arrayMove = <T>(arr: T[], from: number, to: number) => {
  const element = arr[from];
  arr.splice(from, 1);
  arr.splice(to, 0, element);
};

export { solve };
