const fs = require('fs');
const src = fs.readFileSync('D:/11. AI/AI 0324/amc8-hub/data.js', 'utf8');

// Count backticks (simple, not in strings/comments)
let btCount = 0;
for (let i = 0; i < src.length; i++) {
  if (src[i] === '`') btCount++;
}
console.log('Total backticks: ' + btCount + ' (even=' + (btCount % 2 === 0) + ')');

// Validate syntax
try {
  new Function(src);
  console.log('SYNTAX OK');
} catch(e) {
  console.log('Syntax error: ' + e.message);
  
  // Find the specific problem - search for patterns that break JS
  // Look for unescaped backticks inside template literals
  const problemPatterns = [
    { pattern: /S = 3\.14×5²/, desc: 'squared in HTML' },
    { pattern: /border-left:[^;'"<]{0,5}(?!3px)/, desc: 'bad border-left' },
    { pattern: /`[^`]*`[^`]*`[^`]*/g, desc: 'triple backtick' }
  ];
  problemPatterns.forEach(function(p) {
    const m = src.match(p.pattern);
    if (m) console.log('Pattern "' + p.desc + '" found: ' + m[0].substring(0, 80));
  });
}
