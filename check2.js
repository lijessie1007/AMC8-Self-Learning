const fs = require('fs');
let src = fs.readFileSync('D:/11. AI/AI 0324/amc8-hub/data.js', 'utf8');

// Find nested backticks in template literals (textbook fields)
// The issue is textbook: `...` where `...` contains another `
const lines = src.split('\n');
let inTextbook = false;
let depth = 0;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('textbook: `')) {
    inTextbook = true;
    depth = 1;
    // Count backticks after 'textbook: `'
    const startIdx = line.indexOf('textbook: `') + 11;
    for (let j = startIdx; j < line.length; j++) {
      if (line[j] === '`') depth += (depth > 0 ? -1 : 1);
    }
    if (depth <= 0) { inTextbook = false; console.log('Line '+(i+1)+' textbook closed same line'); }
    continue;
  }
  if (inTextbook) {
    // Count backticks
    for (let j = 0; j < line.length; j++) {
      if (line[j] === '`') {
        depth--;
        if (depth <= 0) {
          inTextbook = false;
          break;
        }
      }
    }
    if (inTextbook && line.includes('`')) {
      console.log('Possible extra backtick at line '+(i+1)+': '+line.substring(0,80));
    }
  }
}
console.log('Done checking');
