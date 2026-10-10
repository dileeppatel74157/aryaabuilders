import fs from 'node:fs';
import path from 'node:path';

const srcDir = path.resolve('ezgif-20124560a917f71d-jpg');
const destDir = path.resolve('public/images/construction-frames');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.jpg'));
console.log(`Copying ${files.length} frames from ${srcDir} to ${destDir}...`);

let copied = 0;
for (const file of files) {
  const src = path.join(srcDir, file);
  const dest = path.join(destDir, file);
  fs.copyFileSync(src, dest);
  copied++;
}

console.log(`Successfully copied ${copied} frames to ${destDir}.`);
