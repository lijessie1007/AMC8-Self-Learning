const fs = require('fs');
let content = fs.readFileSync('D:/11. AI/AI 0324/amc8-hub/data.js', 'utf8');

// Add searchUrl to all YouTube videosEn entries that don't have one
const ytSearchMap = {
  'n0FZhQ_GkKw': 'Math+Antics+fractions+introduction',
  'qmfXyR7Z6Lk': 'Math+Antics+multiplying+fractions',
  '5juto2ze8Lg': 'Math+Antics+dividing+fractions',
  '52ZlXsFJULI': 'Khan+Academy+adding+fractions',
  'JeVSmq1Nrpw': 'Math+Antics+percentages',
  'rR95Cbcjzus': 'Math+Antics+percent+of+number',
  'ZKhRkxB_NG0': 'Math+Antics+prime+factorization',
  'M7kEpw1tn50': 'Numberphile+primes+atoms',
  'ycLqNjBRnOU': 'parity+odd+even+math+competition',
  'USmit5zUGas': 'Math+Antics+ratios+rates',
  'Qyd_v3DGzTM': 'Math+Antics+solving+equations',
  'kbqO0YTUyAY': 'Khan+Academy+one+step+equations',
  'dSmSrLmCGOw': 'Gauss+sum+arithmetic+sequence+story',
  'Dj1JZIdIwwo': 'Khan+Academy+arithmetic+series+sum',
  '1UcCHNNsVaU': 'Math+Antics+distance+rate+time',
  'PF26xbR7OIQ': 'Math+Antics+area+introduction',
  '_JJFTMf5pRo': 'Khan+Academy+area+triangles',
  'YokKp3pwVFc': '3Blue1Brown+circle+area+pi+r+squared',
  'O-cawByg2aA': 'Math+Antics+circles+circumference+area',
  '9Uc62CUSvLo': 'Math+Antics+coordinate+plane+graphing',
  'iKy-d5_erhI': 'Math+Antics+combinations+introduction',
  '3ArQLJ7rzSM': 'AoPS+counting+restrictions',
  'YQLUO-h6sSE': 'inclusion+exclusion+principle+math',
  'KzfWUEJjG18': 'Math+Antics+basic+probability',
  'uzkc-qNVoOk': 'Khan+Academy+intro+probability',
  'B1HEzNTGeZ4': 'Math+Antics+mean+median+mode',
  '1rDVz_Fb6HQ': 'TED-Ed+logic+riddle+solve',
  'vcn2ruTOwFo': 'Math+Antics+factors+multiples',
  'JdME2jIG-ik': 'Math+Antics+greatest+common+factor',
  'M5VGKRTnfkE': 'Khan+Academy+divisibility+rules'
};

// Add searchUrl to YouTube entries missing it
content = content.replace(
  /\{ title: '([^']+)', url: 'https:\/\/www\.youtube\.com\/watch\?v=([^']+)' \}/g,
  function(match, title, videoId) {
    const keyword = ytSearchMap[videoId] || title.replace(/[^a-zA-Z0-9]+/g, '+');
    return "{ title: '" + title + "', url: 'https://www.youtube.com/watch?v=" + videoId + "', searchUrl: 'https://www.youtube.com/results?search_query=" + keyword + "' }";
  }
);

fs.writeFileSync('D:/11. AI/AI 0324/amc8-hub/data.js', content, 'utf8');
console.log('Done! YouTube searchUrl added.');

// Verify
const ytWithoutSearch = (content.match(/youtube\.com\/watch\?v=[^']+' \}/g) || []).length;
console.log('YouTube entries still without searchUrl: ' + ytWithoutSearch);
