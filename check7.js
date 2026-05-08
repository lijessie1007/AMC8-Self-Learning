const fs = require('fs');
let src = fs.readFileSync('D:/11. AI/AI 0324/amc8-hub/data.js', 'utf8');

// The fix_visual.js messed up the visual fields by inserting textbook content
// into the middle of Array.from expressions.
// Strategy: Find all "visual: {" blocks and revert them to "visual: `...`"
// by removing the { diagram: ` wrapper and the textbook section

// First, let's see the extent of damage
// Find all "visual: {" and count them
const BACKTICK = '\x60';
let visualObjCount = 0;
let pos = 0;
while ((pos = src.indexOf('visual: {\n          diagram: ' + BACKTICK, pos)) !== -1) {
  visualObjCount++;
  pos++;
}
console.log('visual: { diagram: ` blocks found: ' + visualObjCount);

// Strategy: restore visual fields to plain strings
// Pattern to find: visual: {\n          diagram: `CONTENT`,\n          textbook: `TB`\n        }
// Replace with: visual: `CONTENT`

// But the problem is CONTENT itself may be broken.
// Let's check if the damage is isolated to the primes topic (quality 100-grid)

// Read line 574 context
const lines = src.split('\n');
// Find the damage
for (let i = 570; i < 596; i++) {
  console.log((i+1) + ': ' + lines[i].substring(0, 120));
}
