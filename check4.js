const fs = require('fs');
const src = fs.readFileSync('D:/11. AI/AI 0324/amc8-hub/data.js', 'utf8');
const BACKTICK = '\x60';

const tb_sections = src.split('textbook: ' + BACKTICK);
console.log('Found ' + tb_sections.length + ' textbook sections');
tb_sections.slice(1).forEach(function(sec, i) {
  const end = sec.indexOf(BACKTICK);
  const content = sec.substring(0, end);
  const extra_bt = (content.match(/\x60/g) || []).length;
  if (extra_bt > 0) {
    console.log('Section ' + (i + 1) + ' has ' + extra_bt + ' extra backtick(s)');
    // find the position
    const btPos = content.indexOf(BACKTICK);
    console.log('...around: ' + content.substring(Math.max(0, btPos-30), btPos+50));
  }
});

// Also check realLifeHtml sections
const rl_sections = src.split('realLifeHtml: ' + BACKTICK);
console.log('\nFound ' + rl_sections.length + ' realLifeHtml sections');
rl_sections.slice(1).forEach(function(sec, i) {
  const end = sec.indexOf(BACKTICK + ',');
  const content = sec.substring(0, end);
  const extra_bt = (content.match(/\x60/g) || []).length;
  if (extra_bt > 0) {
    console.log('realLifeHtml Section ' + (i + 1) + ' has extra backtick(s)');
    const btPos = content.indexOf(BACKTICK);
    console.log('...around: ' + content.substring(Math.max(0, btPos-30), btPos+50));
  }
});
