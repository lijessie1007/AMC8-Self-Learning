const fs = require('fs');
let src = fs.readFileSync('D:/11. AI/AI 0324/amc8-hub/data.js', 'utf8');

// Fix all bad "],    practice:" patterns -> needs to be on separate lines with proper indentation
// Pattern 1: "],    practice:" -> separate lines
src = src.replace(/\],\s+practice:/g, '],\n    practice:');

fs.writeFileSync('D:/11. AI/AI 0324/amc8-hub/data.js', src, 'utf8');
console.log('Fixed lessons/practice boundary');

// Validate
try { new Function(src); console.log('SYNTAX OK'); }
catch(e) { console.log('Still error: ' + e.message); }
