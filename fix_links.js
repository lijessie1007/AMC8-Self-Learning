const fs = require('fs');
let content = fs.readFileSync('D:/11. AI/AI 0324/amc8-hub/data.js', 'utf8');

// Replace each bilibili BV url with its corresponding searchUrl
content = content.replace(
  /url: 'https:\/\/www\.bilibili\.com\/video\/BV[^']+\/'\s*,\s*searchUrl:\s*'([^']+)'/g,
  function(match, searchUrl) {
    return "url: '" + searchUrl + "', searchUrl: '" + searchUrl + "'";
  }
);

fs.writeFileSync('D:/11. AI/AI 0324/amc8-hub/data.js', content, 'utf8');
console.log('Done! BV links replaced with search links.');

// Verify
const remaining = (content.match(/bilibili\.com\/video\/BV/g) || []).length;
console.log('Remaining BV links: ' + remaining);
