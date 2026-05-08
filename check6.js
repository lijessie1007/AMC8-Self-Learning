const fs = require('fs');
const src = fs.readFileSync('D:/11. AI/AI 0324/amc8-hub/data.js', 'utf8');

// Scan with a proper bracket/template literal tracker
let state = 'code'; // 'code', 'template', 'single', 'double'
let templateDepth = 0;
let parenDepth = 0;
let bracketDepth = 0;
let braceDepth = 0;
let i = 0;
let lastGoodI = 0;
let errorLine = -1;

const lines = src.split('\n');
let lineNum = 0;
let colNum = 0;

while (i < src.length) {
  const ch = src[i];
  const prev = i > 0 ? src[i-1] : '';
  
  if (state === 'single') {
    if (ch === '\\') { i += 2; continue; }
    if (ch === "'") state = 'code';
    i++; continue;
  }
  if (state === 'double') {
    if (ch === '\\') { i += 2; continue; }
    if (ch === '"') state = 'code';
    i++; continue;
  }
  if (state === 'template') {
    if (ch === '\\') { i += 2; continue; }
    if (ch === '`') { 
      templateDepth--;
      if (templateDepth <= 0) { state = 'code'; templateDepth = 0; }
    } else if (ch === '$' && src[i+1] === '{') {
      // expression inside template - not handled perfectly but OK
    }
    i++; continue;
  }
  
  // state === 'code'
  if (ch === "'") { state = 'single'; i++; continue; }
  if (ch === '"') { state = 'double'; i++; continue; }
  if (ch === '`') { 
    state = 'template'; 
    templateDepth++;
    i++; continue; 
  }
  if (ch === '(') parenDepth++;
  if (ch === ')') { parenDepth--; if (parenDepth < -1) { console.log('Extra ) near char ' + i + ', line ' + (src.substring(0,i).split('\n').length)); break; } }
  if (ch === '{') braceDepth++;
  if (ch === '}') braceDepth--;
  if (ch === '[') bracketDepth++;
  if (ch === ']') bracketDepth--;
  i++;
}

console.log('Final state: ' + state);
console.log('templateDepth: ' + templateDepth);
console.log('parenDepth: ' + parenDepth);
console.log('braceDepth: ' + braceDepth);
console.log('bracketDepth: ' + bracketDepth);

if (templateDepth !== 0) console.log('UNMATCHED TEMPLATE LITERAL!');
if (parenDepth !== 0) console.log('UNMATCHED PARENS!');
