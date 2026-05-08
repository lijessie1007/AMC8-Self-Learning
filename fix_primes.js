const fs = require('fs');
let src = fs.readFileSync('D:/11. AI/AI 0324/amc8-hub/data.js', 'utf8');

// The primes visual is severely broken (lines ~571-592)
// Let's replace it with a clean version
const brokenPrimesStart = src.indexOf('        visual: {\n          diagram: `<div style="font-weight:700;margin-bottom:10px;color:var(--p)">🖼️ 100以内质数筛');
if (brokenPrimesStart === -1) {
  console.log('Could not find broken primes visual');
  process.exit(1);
}

// Find end of this broken block - search for the closing of the lesson object
// The lesson ends with `} }` or similar followed by lessons array close
// Let's find '    ],\n    practice:' after the broken section
const endMarker = '\n    ],\n    practice:';
const brokenEnd = src.indexOf(endMarker, brokenPrimesStart);
if (brokenEnd === -1) {
  console.log('Could not find end marker after broken primes visual');
  process.exit(1);
}

console.log('Broken primes visual from char ' + brokenPrimesStart + ' to ' + brokenEnd);

// Replace with clean version
const cleanPrimesVisual = `        visual: \`<div style="font-weight:700;margin-bottom:10px;color:var(--p)">🖼️ 100以内质数筛（蓝色=质数，共25个）</div>
<div style="display:grid;grid-template-columns:repeat(10,1fr);gap:2px;font-size:11px">
  \${Array.from({length:100},function(_,i){var n=i+1;var primes=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];var isPrime=primes.indexOf(n)>=0;var isOne=n===1;return '<div style="aspect-ratio:1;background:'+(isPrime?'#4f46e5':isOne?'#fef3c7':'#f1f5f9')+';border-radius:3px;display:flex;align-items:center;justify-content:center;color:'+(isPrime?'#fff':isOne?'#92400e':'#94a3b8')+';font-weight:'+(isPrime?'700':'400')+'">'+n+'</div>';}).join('')}
</div>
<div style="margin-top:8px;font-size:12px;color:var(--text2)">蓝色=质数（25个）&nbsp;&nbsp;黄色=1（既不是质数也不是合数）</div>
<div style="margin-top:10px;padding:8px;background:#fffbeb;border-radius:8px;font-size:13px"><strong>质因数分解例子：</strong><br>60 = 2²×3×5</div>\`
      }
    ]`;

src = src.slice(0, brokenPrimesStart) + cleanPrimesVisual + src.slice(brokenEnd);
fs.writeFileSync('D:/11. AI/AI 0324/amc8-hub/data.js', src, 'utf8');
console.log('Fixed primes visual');

// Validate
try { new Function(src); console.log('SYNTAX OK'); }
catch(e) { console.log('Still error: ' + e.message); }
