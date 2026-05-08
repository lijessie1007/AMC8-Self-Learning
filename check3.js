const fs = require('fs');
let src = fs.readFileSync('D:/11. AI/AI 0324/amc8-hub/data.js', 'utf8');

// The realLifeHtml fields use template literals, check if any contain backticks inside
const lines = src.split('\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('realLifeHtml:')) {
    // scan forward for end of template literal
    let depth = 0;
    let started = false;
    for (let j = i; j < Math.min(i+20, lines.length); j++) {
      for (let k = 0; k < lines[j].length; k++) {
        if (!started && lines[j][k] === '`') { started = true; depth = 1; continue; }
        if (started && lines[j][k] === '`') {
          depth--;
          if (depth <= 0) {
            // Done - check if there are leftover backticks on line j
            const rest = lines[j].substring(k+1);
            if (rest.includes('`')) {
              console.log('Extra backtick after realLifeHtml at line '+(j+1)+': '+rest.substring(0,60));
            }
            break;
          }
        }
      }
    }
  }
}

// Also look for the actual JS error by checking what comes after line ~1105
// The issue might be in the structure around realLifeHtml fields
// Let's find where 'realLifeHtml' is followed by ',\n' vs just '`\n'
const rlMatches = [];
let pos = 0;
while ((pos = src.indexOf('realLifeHtml:', pos)) !== -1) {
  const lineNum = src.substring(0, pos).split('\n').length;
  rlMatches.push(lineNum);
  pos++;
}
console.log('realLifeHtml at lines: ' + rlMatches.join(', '));

// Now validate syntax incrementally to narrow down
const allLines = src.split('\n');
let lastGoodLine = 0;
for (let i = 0; i < allLines.length; i += 10) {
  try {
    new Function(allLines.slice(0, i + 10).join('\n'));
    lastGoodLine = i + 10;
  } catch(e) {
    // Found the window
    // Now narrow down within this window
    for (let j = lastGoodLine; j <= i + 10; j++) {
      try { new Function(allLines.slice(0, j).join('\n')); }
      catch(e2) {
        console.log('First bad line: ' + j + ': ' + allLines[j-1].substring(0, 100));
        process.exit(0);
      }
    }
  }
}
console.log('All good up to last checked line');
