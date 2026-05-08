
// add_topics.js - Add remaining 15 topics to data_new.js

const fs = require('fs');

// Read current data_new.js
let src = fs.readFileSync('D:/11. AI/AI 0324/amc8-hub/data_new.js', 'utf8');

// Helper functions
function rl(text, imgs) {
  var h = '<div style="margin-bottom:10px;font-size:14px;line-height:1.8">' + text + '</div>';
  if (imgs && imgs.length) {
    h += '<div style="display:flex;gap:10px;flex-wrap:wrap">';
    imgs.forEach(function(img) {
      h += '<div style="flex:1;min-width:140px"><img src="' + img.url + '" alt="' + img.alt + '" style="width:100%;height:120px;object-fit:cover;border-radius:8px" onerror="this.style.display=\'none\'"/><div style="font-size:11px;color:#64748b;margin-top:4px;text-align:center">' + img.cap + '</div></div>';
    });
    h += '</div>';
  }
  return h;
}

function tb(unit, note, ex, prac) {
  return '<div style="border:2px solid #3b82f6;border-radius:8px;overflow:hidden">' +
    '<div style="background:#3b82f6;color:#fff;padding:8px 14px;font-weight:700;font-size:14px">&#128218; ' + unit + '</div>' +
    '<div style="padding:14px;font-size:14px;line-height:2">' +
    '<p><strong>&#12304;&#30693;&#35782;&#35201;&#28857;&#12305;</strong>' + note + '</p>' +
    '<div style="background:#eff6ff;border-radius:6px;padding:10px;margin:10px 0;border-left:3px solid #3b82f6"><strong>&#12304;&#20363;&#39064;&#12305;</strong> ' + ex + '</div>' +
    (prac ? '<div style="background:#f0fdf4;border-radius:6px;padding:10px;border-left:3px solid #22c55e"><strong>&#12304;&#32451;&#19968;&#32451;&#12305;</strong> ' + prac + '</div>' : '') +
    '</div></div>';
}

var newTopics = [
  // PERCENT
  {
    id: 'percent', name: '\u767e\u5206\u6570\u5e94\u7528', icon: '&#128202;',
    theme: 'numbers', grade: '6\u5e74\u7ea7', gradeNum: 6,
    amcFreq: 5, difficulty: '\u57fa\u7840', desc: '\u6298\u6263\u3001\u5229\u6da6\u7387\u3001\u6d53\u5ea6\u95ee\u9898',
    realLifeHtml: rl('\ud83c\udfea \u5546\u573a\u6253\u62298\u6298(8\u6298=80%)\u3001\ud83c\udfe6 \u9280\u884c\u5229\u606f(\u5e74\u5229\u73873%)\u3001\ud83d\udcdd \u8003\u8bd5\u6210\u7ee9(90\u5206=90%)', [
      { url: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=300&q=80', alt: '\u5546\u573a\u6298\u6263', cap: '\u5546\u573a\u6253\u6298 \u2192 \u767e\u5206\u6570' },
      { url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=300&q=80', alt: '\u6210\u7ee9', cap: '\u8003\u8bd5\u6210\u7ee9 \u2192 \u767e\u5206\u6bd4' }
    ]),
    examTips: '\u26a0\ufe0f AMC8\u5e38\u5728\u6587\u5b57\u9898\u4e2d\u9690\u542b\u767e\u5206\u6570',
    commonMistakes: [
      '\u274c \u6da620%\u518d\u964620%\u56de\u5230\u539f\u4ef7 \u2192 \u2705 100\xd71.2\xd70.8=96\uff0c\u4e8f\u4e861\uff01',
      '\u274c \u5229\u6da6\u7387=\u5229\u6da6/\u552e\u4ef7 \u2192 \u2705 \u5229\u6da6\u7387=\u5229\u6da6/\u6210\u672c'
    ],
    prereqs: ['fractions'],
    glossary: [
      { cn: '\u767e\u5206\u6570', en: 'Percent/Percentage', pron: 'per-SENT' },
      { cn: '\u6298\u6263', en: 'Discount', pron: 'DIS-count' },
      { cn: '\u5229\u6da6', en: 'Profit', pron: 'PRAH-fit' },
      { cn: '\u5229\u6da6\u7387', en: 'Profit Margin', pron: '' }
    ],
    definitions: [
      { term: '\u767e\u5206\u6570 (Percent)', def: '\u4ee5100\u4e3a\u57fa\u51c6\u7684\u6bd4\u7387\u300225% = 25/100 = 0.25\u3002' },
      { term: '\u5229\u6da6\u7387 (Profit Margin)', def: '\u5229\u6da6\u7387 = (\u552e\u4ef7-\u6210\u672c)/\u6210\u672c \xd7 100%\u3002\u5206\u6bcd\u662f\u6210\u672c\u4e0d\u662f\u552e\u4ef7\u3002' }
    ],
    videosCn: [
      { title: '\u767e\u5206\u6570 - \u5c0f\u5b66\u52a8\u753b\u8bb2\u89e3', url: 'https://search.bilibili.com/all?keyword=\u767e\u5206\u6570+\u5c0f\u5b66+\u52a8\u753b\u8bb2\u89e3&order=click', searchUrl: 'https://search.bilibili.com/all?keyword=\u767e\u5246\u6570+\u5c0f\u5b66+\u52a8\u753b\u8bb2\u89e3&order=click' },
      { title: '\u6298\u6263\u548c\u5229\u6da6\u7387\u8bb2\u89e3', url: 'https://search.bilibili.com/all?keyword=\u6298\u6263+\u5229\u6da6\u7387+\u6570\u5b66\u8bb2\u89e3&order=click', searchUrl: 'https://search.bilibili.com/all?keyword=\u6298\u6263+\u5229\u6da6\u7387+\u6570\u5b66\u8bb2\u89e3&order=click' }
    ],
    videosEn: [
      { title: 'Math Antics - What Are Percentages?', url: 'https://www.youtube.com/watch?v=JeVSmq1Nrpw', searchUrl: 'https://www.youtube.com/results?search_query=Math+Antics+percentages' },
      { title: 'Math Antics - Finding A Percent', url: 'https://www.youtube.com/watch?v=rR95Cbcjzus', searchUrl: 'https://www.youtube.com/results?search_query=Math+Antics+percent+of+number' }
    ],
    lessons: [{
      title: '\u767e\u5206\u6570\u4e0e\u751f\u6d3b',
      story: '\u5546\u573a\u5199\u7740\u201c\u5168\u573a8\u6298\u201d\u2014\u2014\u539f\u4ef7100\u5143\u53ea\u8981\u4ed880\u5143\uff01\n\u767e\u5206\u6570\u5c31\u662f\u201c\u4ee5100\u4e3a\u5206\u6bcd\u7684\u5206\u6570\u201d\uff1a80% = 80/100 = 0.8',
      keyPoints: ['\u767e\u5206\u6570=\u5206\u6bcd\u4e3a100\u7684\u5206\u6570', '\u6298\u6263\uff1a8\u6298=\xd70.8', '\u5229\u6da6\u7387=(\u552e\u4ef7-\u6210\u672c)/\u6210\u672c\xd7100%'],
      visual: '<div style="font-weight:700;margin-bottom:12px;color:#4f46e5">\u56fe\u89e3\uff1a\u767e\u5206\u6570\u5c31\u662f100\u683c\u91cc\u53d6\u51e0\u683c</div><div style="font-size:13px;color:#64748b;margin-top:8px">\u6bd4\u598275%\u5c31\u662f100\u683c\u91cc\u84dd\u827275\u683c\u3002\u6298\u6263\uff1a8\u6298=80%=\u4e58\u4ee50.8</div>',
      textbook: tb('\u4eba\u6559\u7248 \u516d\u5e74\u7ea7\u4e0a\u518c \u7b2c\u4e00\u5355\u5143', '\u767e\u5206\u6570\u8868\u793a\u4e00\u4e2a\u6570\u662f\u53e6\u4e00\u4e2a\u6570\u7684\u767e\u5206\u4e4b\u51e0\u3002\u5229\u6da6\u7387=(\u552e\u4ef7-\u6210\u672c)/\u6210\u672c\xd7100%\u3002', '\u4e00\u4ef6\u8863\u670d\u6210\u672c80\u5143\uff0c\u552e\u4ef7100\u5143\uff0c\u5229\u6da6\u7387\u662f\u591a\u5c11\uff1f<br><strong>\u89e3\uff1a</strong>\u5229\u6da6=20\u5143\uff0c\u5229\u6da6\u7387=20\xf780\xd7100%=<strong>25%</strong>', '\u5546\u54c1\u6210\u672c50\u5143\uff0c\u552e\u4ef765\u5143\uff0c\u5229\u6da6\u7387\uff1f<br><span style="color:#666;font-size:12px">\u7b54\u6848\uff1a30%</span>')
    }],
    practice: {
      basic: [
        { q: '\u539f\u4ef7200\u5143\u628730%\u591a\u5c11\u94b1\uff1f', options: ['140', '160', '70', '130'], answer: 0, explain: '200\xd70.7=140' },
        { q: '\u6210\u672c80\u552e\u4ef7100\uff0c\u5229\u6da6\u7387\uff1f', options: ['20%', '25%', '80%', '125%'], answer: 1, explain: '20/80=25%' }
      ],
      advanced: [
        { q: '\u5546\u54c1\u6da625%\u518d\u964620%\uff0c\u6700\u7ec8\u662f\u539f\u4ef7\u7684\uff1f', options: ['100%', '105%', '95%', '80%'], answer: 0, explain: '1.25\xd70.8=1.00=100%\uff0c\u521a\u597d\u56de\u539f\u4ef7' }
      ],
      amc: []
    }
  }
];

// Validate the new topics
console.log('New topics count: ' + newTopics.length);
try {
  JSON.stringify(newTopics);
  console.log('JSON.stringify OK');
} catch(e) {
  console.log('JSON error: ' + e.message);
  process.exit(1);
}

// Find where TOPICS ends in data_new.js and insert new topics
const TOPICS_END = src.indexOf('\n];\n\nconst ACHIEVEMENTS');
if (TOPICS_END < 0) {
  console.log('Could not find TOPICS end marker');
  process.exit(1);
}

// Insert new topics
const newTopicsJson = JSON.stringify(newTopics, null, 2);
// Remove outer [] and add as array elements
const newTopicsContent = newTopicsJson.slice(1, -1).trim(); // remove [ and ]

const newSrc = src.slice(0, TOPICS_END) + ',\n' + newTopicsContent + '\n' + src.slice(TOPICS_END);
fs.writeFileSync('D:/11. AI/AI 0324/amc8-hub/data_new.js', newSrc, 'utf8');
console.log('Written, size: ' + newSrc.length);

try {
  delete require.cache[require.resolve('D:/11. AI/AI 0324/amc8-hub/data_new.js')];
  require('D:/11. AI/AI 0324/amc8-hub/data_new.js');
  console.log('REQUIRE OK');
} catch(e) {
  console.log('Error: ' + e.message);
  if (e.stack) console.log(e.stack.split('\n').slice(1, 3).join('\n'));
}
