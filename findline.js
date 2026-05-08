const fs = require('fs');
const src = fs.readFileSync('D:/11. AI/AI 0324/amc8-hub/data.js', 'utf8');
const BACKTICK = '\x60';

// Find the exact error by testing progressively smaller chunks
const lines = src.split('\n');
let lo = 0, hi = lines.length;
// First narrow to hundreds
for (let step = 100; step >= 1; step = Math.floor(step/10)) {
  for (let i = lo; i < hi; i += step) {
    try {
      new Function(lines.slice(0, i).join('\n'));
    } catch(e) {
      hi = i;
      if (step === 1) {
        console.log('First error at line ' + i + ':');
        console.log(lines[i-1].substring(0, 150));
        console.log('Previous: ' + lines[i-2].substring(0, 150));
        process.exit(0);
      }
      break;
    }
  }
}
