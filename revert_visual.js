const fs = require('fs');
let src = fs.readFileSync('D:/11. AI/AI 0324/amc8-hub/data.js', 'utf8');
const BACKTICK = '\x60';

// Step 1: Revert ALL "visual: { diagram: `...`, textbook: `...` }" back to "visual: `...`"
// by extracting just the diagram content

let fixCount = 0;
let searchFrom = 0;

while (true) {
  const vStart = src.indexOf('visual: {\n          diagram: ' + BACKTICK, searchFrom);
  if (vStart === -1) break;
  
  // Find the diagram content start
  const diagStart = vStart + ('visual: {\n          diagram: ' + BACKTICK).length;
  
  // Find where the diagram template literal ends
  // We need to find the FIRST backtick after diagStart that is not inside ${}
  let pos = diagStart;
  let depth = 0; // depth of ${ } nesting
  let diagEnd = -1;
  
  while (pos < src.length) {
    if (src[pos] === '$' && src[pos+1] === '{') {
      depth++;
      pos += 2;
      continue;
    }
    if (depth > 0 && src[pos] === '}') {
      depth--;
      pos++;
      continue;
    }
    if (depth === 0 && src[pos] === BACKTICK) {
      diagEnd = pos;
      break;
    }
    pos++;
  }
  
  if (diagEnd === -1) {
    console.log('Could not find diagram end from position ' + vStart);
    break;
  }
  
  const diagContent = src.slice(diagStart, diagEnd);
  
  // Find the end of the whole visual: { ... } block
  // After the diagram backtick, look for textbook: `...`, then closing }
  let afterDiag = diagEnd + 1;
  
  // Skip whitespace and comma
  while (afterDiag < src.length && (src[afterDiag] === ',' || src[afterDiag] === '\n' || src[afterDiag] === ' ')) {
    afterDiag++;
  }
  
  // Find textbook: ` ... `
  if (src.slice(afterDiag, afterDiag + 10) === 'textbook: ' + BACKTICK) {
    const tbStart = afterDiag + 10;
    let tbEnd = tbStart;
    while (tbEnd < src.length && src[tbEnd] !== BACKTICK) tbEnd++;
    
    // Find the closing } of the visual object
    let closePos = tbEnd + 1;
    while (closePos < src.length && (src[closePos] === '\n' || src[closePos] === ' ')) closePos++;
    if (src[closePos] === '}') closePos++;
    
    // Replace entire visual: { diagram: `...`, textbook: `...` } with visual: `...`
    const newVisual = 'visual: ' + BACKTICK + diagContent + BACKTICK;
    src = src.slice(0, vStart) + newVisual + src.slice(closePos);
    fixCount++;
    console.log('Reverted visual at position ~' + vStart);
    searchFrom = vStart + newVisual.length;
  } else {
    // No textbook found, just revert diagram wrapper
    const closePos = src.indexOf('\n        }', diagEnd);
    if (closePos > 0 && closePos - diagEnd < 200) {
      const newVisual = 'visual: ' + BACKTICK + diagContent + BACKTICK;
      src = src.slice(0, vStart) + newVisual + src.slice(closePos + '\n        }'.length);
      fixCount++;
      searchFrom = vStart + newVisual.length;
    } else {
      console.log('Could not find closing } after diagram at ' + vStart);
      searchFrom = vStart + 1;
    }
  }
}

console.log('Total reverted: ' + fixCount);
fs.writeFileSync('D:/11. AI/AI 0324/amc8-hub/data.js', src, 'utf8');

// Validate
try { new Function(src); console.log('SYNTAX OK'); }
catch(e) { console.log('Still error: ' + e.message); }
