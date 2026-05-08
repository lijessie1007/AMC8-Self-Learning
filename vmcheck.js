// Try to find the error by compiling incrementally
const fs = require('fs');
const src = fs.readFileSync('D:/11. AI/AI 0324/amc8-hub/data.js', 'utf8');
const lines = src.split('\n');

// Find the error using vm module which gives line info
const vm = require('vm');
try {
  vm.runInNewContext(src);
  console.log('OK');
} catch(e) {
  console.log('Error: ' + e.message);
  if (e.stack) {
    // Extract line number
    const m = e.stack.match(/evalmachine[^:]*:(\d+)/);
    if (m) {
      const ln = parseInt(m[1]);
      console.log('At line ' + ln + ':');
      for (let i = Math.max(0,ln-3); i < Math.min(lines.length,ln+2); i++) {
        console.log((i+1) + ': ' + lines[i].substring(0, 100));
      }
    }
  }
}
