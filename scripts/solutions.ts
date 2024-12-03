import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

function findDayFiles(dir: string): string[] {
  let results: string[] = [];
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat && stat.isDirectory()) {
      results = results.concat(findDayFiles(filePath));
    } else if (/^day\d+\.ts$/.test(file)) {
      results.push(filePath);
    }
  });

  return results;
}

// Get all 'dayX.ts' files starting from the current directory
const dayFiles = findDayFiles(path.join(__dirname, '..'));

dayFiles.forEach((file) => {
  const filePath = path.resolve(__dirname, file);
  execSync(`tsx ${filePath}`, { stdio: 'inherit' });
});
