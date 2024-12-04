const args = process.argv.slice(2);
import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';

const day = Number(args[0]);

if (isNaN(day)) {
  throw new Error('createDay must be called with a number argument');
}

const createDay = () => {
  return `import { setDay, withRealInput } from '../common';
  import { solve as solver1 } from './day${day}_1';
  import { solve as solver2 } from './day${day}_2';
  
  setDay(${day});

  const parseInput = (input: string) /*TODO: add return type*/ => {
  /*TODO: Implement me!*/
  };
  
  withRealInput(solver1, parseInput).then((result) =>
    console.log('Solution for day ${day} part 1: ', result),
  );
  
  withRealInput(solver2, parseInput).then((result) =>
    console.log('Solution for day ${day} part 2: ', result),
  );

  export { parseInput }
  `;
};

console.info('Creating directory for the day: ${day}...');

const dayDir = path.join(__dirname, '..', `day${day}`);

fs.mkdir(dayDir, (error) => {
  if (error) console.error(error);
});

console.info('Directory created!');

console.info('Creating main script for the day: ${day}...');

fs.writeFile(path.join(dayDir, `day${day}.ts`), createDay(), (error) => {
  if (error) console.error(error);
});

console.info('Main script created!');

const createPart = () =>
  `const solve = (/*TODO: add input args*/): number => {
  //TODO: implement ME!
  return 0;
};

export { solve };
`;

console.info(`Creating script for the day: ${day} part 1...`);

fs.writeFile(path.join(dayDir, `day${day}_1.ts`), createPart(), (error) => {
  if (error) console.error(error);
});

console.info('Part 1 created!');

console.info(`Creating script for the day: ${day} part 2...`);

fs.writeFile(path.join(dayDir, `day${day}_2.ts`), createPart(), (error) => {
  if (error) console.error(error);
});

console.info('Part 2 created!');

const createTestPart = (part: number) => `import { solve } from './day${day}_1';
import { parseInput } from './day${day}';
import { setDay, withTestInput } from '../common';

setDay(1);

test('Test answer for Day ${day} part ${part}', async () => {
  expect(await withTestInput(solve, parseInput)).toBe(/*TODO: Fill me in!*/);
});`;

console.info(`Creating test for the day: ${day} part 1...`);

fs.writeFile(
  path.join(dayDir, `day${day}_1.test.ts`),
  createTestPart(1),
  (error) => {
    if (error) console.error(error);
  },
);

console.info('Test for part 1 created!');

console.info(`Creating test for the day: ${day} part 2...`);

fs.writeFile(
  path.join(dayDir, `day${day}_2.test.ts`),
  createTestPart(2),
  (error) => {
    if (error) console.error(error);
  },
);

console.info('Test for part 2 created!');

console.info('Creating input files...');

fs.writeFile(path.join(dayDir, `test_input.txt`), '', (error) => {
  if (error) console.error(error);
});

fs.writeFile(path.join(dayDir, `input.txt`), '', (error) => {
  if (error) console.error(error);
});

console.info('Input files created!...');

// console.info(`Grabbing test input for day ${day}!`);

// fetch(`https://adventofcode.com/2024/day/4`).then((res) =>
//   res.text().then((result) => {
//     const $ = cheerio.load(result);
//     const test = $('pre code').first().text();
//     console.log(test);
//   }),
// );
