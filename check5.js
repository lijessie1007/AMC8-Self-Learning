const fs = require('fs');
const src = fs.readFileSync('D:/11. AI/AI 0324/amc8-hub/data.js', 'utf8');
const BACKTICK = '\x60';

// Find visual: { diagram: ` sections and check their content
const lines = src.split('\n');

// Scan for diagram: ` start
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('diagram: ' + BACKTICK)) {
    // Find closing backtick
    let depth = 1;
    let j = i;
    let startPos = lines[i].indexOf('diagram: ' + BACKTICK) + 9;
    let startLine = i;
    
    // Count from this line onwards
    for (let k = startPos; k < lines[i].length; k++) {
      if (lines[i][k] === BACKTICK) { depth--; if (depth <= 0) break; }
    }
    if (depth > 0) {
      // Continue to next lines
      for (j = i + 1; j < lines.length && depth > 0; j++) {
        for (let k = 0; k < lines[j].length; k++) {
          if (lines[j][k] === BACKTICK) {
            depth--;
            if (depth <= 0) break;
          }
        }
      }
    }
    
    // Now check what comes after the closing backtick on line j
    const endLine = j - 1;
    const closingLine = lines[endLine];
    const afterClose = closingLine.substring(closingLine.lastIndexOf(BACKTICK) + 1).trim();
    if (!afterClose.startsWith(',') && !afterClose.startsWith('}') && afterClose.length > 0) {
      console.log('Suspicious after diagram closing backtick at line ' + (endLine + 1) + ':');
      console.log('Line content: ' + closingLine.substring(0, 80));
      console.log('After backtick: ' + afterClose.substring(0, 40));
    }
  }
}

console.log('Check complete');
