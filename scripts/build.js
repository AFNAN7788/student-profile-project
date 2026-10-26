
const fs = require('node:fs');
const path = require('node:path');

const sourceDir = path.join(__dirname, '..', 'src');
const outputDir = path.join(__dirname, '..', 'dist');

fs.rmSync(outputDir, { recursive: true, force: true });
fs.mkdirSync(outputDir, { recursive: true });

fs.cpSync(sourceDir, outputDir, { recursive: true });

console.log('Build completed successfully.');
console.log('Output directory: dist');
