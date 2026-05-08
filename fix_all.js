const fs = require('fs');
let src = fs.readFileSync('D:/11. AI/AI 0324/amc8-hub/data.js', 'utf8');
const BACKTICK = '\x60';
const NL = '\n';

// For each visual: { diagram: ` block:
// 1. Extract the diagram content BEFORE the textbook injection
// 2. Extract the textbook content  
// 3. Extract the diagram content AFTER the textbook injection (the broken tail)
// 4. Reconstruct as: visual: `diagram_before + diagram_after`, textbook: `tb`

let fixCount = 0;
let searchPos = 0;

const DIAG_OPEN = 'visual: {\n          diagram: ' + BACKTICK;
const TB_OPEN = '\n          textbook: ' + BACKTICK;

while (true) {
  const vPos = src.indexOf(DIAG_OPEN, searchPos);
  if (vPos === -1) break;
  
  const diagContentStart = vPos + DIAG_OPEN.length;
  
  // Find where textbook begins (this is where the diagram was incorrectly split)
  const tbPos = src.indexOf(TB_OPEN, diagContentStart);
  if (tbPos === -1 || tbPos - diagContentStart > 50000) {
    console.log('No textbook found near position ' + vPos);
    searchPos = vPos + 1;
    continue;
  }
  
  // The diagram "before" part ends just before TB_OPEN
  // But we need to also grab the "after" part - what was after the textbook block
  
  // Find end of textbook: `...`
  const tbContentStart = tbPos + TB_OPEN.length;
  // Find the closing backtick of textbook
  let tbEnd = tbContentStart;
  while (tbEnd < src.length && src[tbEnd] !== BACKTICK) tbEnd++;
  if (tbEnd >= src.length) {
    console.log('No end for textbook at ' + tbPos);
    searchPos = vPos + 1;
    continue;
  }
  const tbContent = src.slice(tbContentStart, tbEnd);
  
  // After textbook: `...`, we have `\n        }` then the broken diagram tail
  let afterTbPos = tbEnd + 1;
  // Skip \n        }
  while (afterTbPos < src.length && (src[afterTbPos] === '\n' || src[afterTbPos] === ' ')) afterTbPos++;
  if (src[afterTbPos] === '}') afterTbPos++;
  
  // Now find the end of the diagram tail (closing backtick of the outer visual)
  // This could be at the end of the original diagram string
  // Look for the pattern: ` } then (whitespace) }  or ` }
  // After the tail, we should see the lesson closing }
  
  // The tail ends when we hit the outer ` that closes visual: `
  let tailEnd = afterTbPos;
  while (tailEnd < src.length) {
    if (src[tailEnd] === BACKTICK) {
      // Check if this is the real end
      const after = src.slice(tailEnd + 1, tailEnd + 20).trim();
      if (after.startsWith('}') || after.startsWith(',')) {
        tailEnd++;
        break;
      }
    }
    tailEnd++;
  }
  
  const diagBefore = src.slice(diagContentStart, tbPos);
  const diagTail = src.slice(afterTbPos, tailEnd - 1); // -1 to exclude closing backtick
  
  // What comes after the whole visual block
  const afterAll = src.slice(tailEnd);
  
  // Find the lesson object closing } that was after the visual
  // It should be something like `\n      }` 
  let lessonClose = afterAll.indexOf('\n      }');
  const afterLesson = lessonClose >= 0 ? afterAll.slice(lessonClose) : afterAll;
  
  // Reconstruct:
  // visual: `diagBefore + diagTail`,
  // textbook: `tbContent`
  
  const diagFull = diagBefore + diagTail;
  const newBlock = 'visual: ' + BACKTICK + diagFull + BACKTICK + ',\n        textbook: ' + BACKTICK + tbContent + BACKTICK;
  
  // Replace from vPos to tailEnd
  src = src.slice(0, vPos) + newBlock + src.slice(tailEnd);
  
  fixCount++;
  console.log('Fixed visual at char ' + vPos + ' (diagBefore=' + diagBefore.length + ', tail=' + diagTail.length + ', tb=' + tbContent.length + ')');
  
  searchPos = vPos + newBlock.length;
}

console.log('Total fixed: ' + fixCount);
fs.writeFileSync('D:/11. AI/AI 0324/amc8-hub/data.js', src, 'utf8');

// Validate
try { require('D:/11. AI/AI 0324/amc8-hub/data.js'); console.log('REQUIRE OK'); }
catch(e) { console.log('Error: ' + e.message); console.log(e.stack.split('\n')[1]); }
