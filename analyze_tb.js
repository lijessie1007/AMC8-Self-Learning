const fs = require('fs');
let src = fs.readFileSync('D:/11. AI/AI 0324/amc8-hub/data.js', 'utf8');
const BACKTICK = '\x60';

// Strategy: Remove all textbook sections that were incorrectly inserted
// Pattern: somewhere inside a visual template, we have:
// `,\n          textbook: `...`\n        }<remaining diagram content>`
// We need to remove the textbook injection and restore the diagram

// Find all occurrences of textbook injection inside visual fields
// The textbook was inserted at a point inside a template literal where 
// fix_visual.js thought the diagram ended

// Look for pattern: <valid diagram end>,\n          textbook: `TB`\n        }<broken rest>
// where <broken rest> is the rest of the original diagram that got cut off

// Actually, let's try a different approach:
// The error is "missing ) after argument list" pointing to textbook: line
// This means textbook is appearing where JS doesn't expect it

// Find all "textbook: `" occurrences and their line numbers
const lines = src.split('\n');
const tbLines = [];
lines.forEach(function(line, i) {
  if (line.includes('textbook: ' + BACKTICK)) {
    tbLines.push(i + 1);
  }
});
console.log('textbook: ` at lines: ' + tbLines.join(', '));

// For each textbook occurrence, check if it's inside a template literal (broken)
// vs. at the correct position (after diagram closing backtick)
// A correct textbook should be preceded by a closing backtick line

tbLines.forEach(function(lineNum) {
  const prevLine = lines[lineNum - 2]; // 0-indexed: lineNum-2
  const tbLine = lines[lineNum - 1];
  console.log('Line ' + lineNum + ': ' + tbLine.substring(0, 60));
  console.log('  prev: ' + (prevLine || '').substring(0, 60));
  
  // If the textbook field is at proper indentation (10 spaces) it's ok
  // If it's inside code it's broken
  const isProperlyIndented = tbLine.startsWith('          textbook:');
  console.log('  properly indented: ' + isProperlyIndented);
});
