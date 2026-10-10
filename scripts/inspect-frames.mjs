import fs from 'node:fs';
import path from 'node:path';

function getJpegDimensions(buffer) {
  let offset = 2; // Skip SOI (0xFFD8)
  while (offset < buffer.length) {
    if (buffer[offset] !== 0xFF) {
      break;
    }
    const marker = buffer[offset + 1];
    // SOF0 (0xC0) or SOF2 (0xC2)
    if (marker === 0xC0 || marker === 0xC2) {
      const height = buffer.readUInt16BE(offset + 5);
      const width = buffer.readUInt16BE(offset + 7);
      return { width, height };
    }
    const length = buffer.readUInt16BE(offset + 2);
    offset += 2 + length;
  }
  return null;
}

const dir = path.resolve('ezgif-20124560a917f71d-jpg');
const files = fs.readdirSync(dir);

console.log(`Total files found: ${files.length}`);

// Natural numeric sorting
const sortedFiles = [...files].sort((a, b) => {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
});

let totalBytes = 0;
let minBytes = Infinity;
let maxBytes = 0;
let dimensionsMap = new Map();
let issues = [];

for (let i = 0; i < sortedFiles.length; i++) {
  const filename = sortedFiles[i];
  const expectedNum = i + 1;
  const match = filename.match(/ezgif-frame-(\d+)\.jpg$/i);
  if (!match) {
    issues.push(`Non-standard filename: ${filename}`);
  } else {
    const num = parseInt(match[1], 10);
    if (num !== expectedNum) {
      issues.push(`Sequence mismatch at index ${i}: got ${filename}, expected frame ${expectedNum}`);
    }
  }

  const filePath = path.join(dir, filename);
  const stat = fs.statSync(filePath);
  totalBytes += stat.size;
  if (stat.size < minBytes) minBytes = stat.size;
  if (stat.size > maxBytes) maxBytes = stat.size;

  const buf = fs.readFileSync(filePath);
  const dim = getJpegDimensions(buf);
  if (!dim) {
    issues.push(`Failed to get dimensions for ${filename}`);
  } else {
    const key = `${dim.width}x${dim.height}`;
    dimensionsMap.set(key, (dimensionsMap.get(key) || 0) + 1);
  }
}

console.log(`Sequence integrity: ${issues.length === 0 ? 'PERFECT CONTIGUOUS SEQUENCE' : 'ISSUES DETECTED'}`);
if (issues.length > 0) {
  console.log('Issues:', issues);
}

console.log(`First frame: ${sortedFiles[0]}`);
console.log(`Last frame: ${sortedFiles[sortedFiles.length - 1]}`);
console.log(`Dimensions breakdown:`, Object.fromEntries(dimensionsMap));
console.log(`Total size: ${(totalBytes / (1024 * 1024)).toFixed(2)} MB`);
console.log(`Average frame size: ${(totalBytes / sortedFiles.length / 1024).toFixed(2)} KB`);
console.log(`Min frame size: ${(minBytes / 1024).toFixed(2)} KB`);
console.log(`Max frame size: ${(maxBytes / 1024).toFixed(2)} KB`);
