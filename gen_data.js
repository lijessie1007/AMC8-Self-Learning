
const fs = require('fs');

// Build data.js programmatically to avoid syntax issues
// All visual content stored as regular strings (no template literals with complex expressions)

function imgRow(imgs) {
  return '<div style="display:flex;gap:10px;flex-wrap:wrap">' +
    imgs.map(function(img) {
      return '<div style="flex:1;min-width:140px">' +
        '<img src="' + img.url + '" alt="' + img.alt + '" style="width:100%;height:120px;object-fit:cover;border-radius:8px" onerror="this.style.display=\'none\'"/>' +
        '<div style="font-size:11px;color:#64748b;margin-top:4px;text-align:center">' + img.cap + '</div></div>';
    }).join('') + '</div>';
}

function tb(unit, note, ex, prac) {
  return '<div style="border:2px solid #3b82f6;border-radius:8px;overflow:hidden">' +
    '<div style="background:#3b82f6;color:#fff;padding:8px 14px;font-weight:700;font-size:14px">📚 ' + unit + '</div>' +
    '<div style="padding:14px;font-size:14px;line-height:2">' +
    '<p><strong>【知识要点】</strong>' + note + '</p>' +
    '<div style="background:#eff6ff;border-radius:6px;padding:10px;margin:10px 0;border-left:3px solid #3b82f6">' +
    '<strong>【例题】</strong> ' + ex + '</div>' +
    (prac ? '<div style="background:#f0fdf4;border-radius:6px;padding:10px;border-left:3px solid #22c55e"><strong>【练一练】</strong> ' + prac + '</div>' : '') +
    '</div></div>';
}

function realLife(text, imgs) {
  return '<div style="margin-bottom:10px;font-size:14px;line-height:1.8">' + text + '</div>' +
    (imgs ? imgRow(imgs) : '');
}

// Build grid visual (for fraction)
function gridVis(n, highlight, label, colors) {
  var boxes = '';
  for (var i = 1; i <= n; i++) {
    var bg = colors ? (i <= highlight ? colors[0] : colors[1]) : (i <= highlight ? '#4f46e5' : '#e2e8f0');
    boxes += '<div style="width:' + Math.floor(200/n) + 'px;height:32px;background:' + bg + ';border-radius:4px"></div>';
  }
  return '<div style="font-weight:700;margin-bottom:8px;color:#4f46e5">' + label + '</div>' +
    '<div style="display:flex;gap:2px;flex-wrap:wrap">' + boxes + '</div>';
}

// Build percent grid (100 boxes)
function percentGrid(pct) {
  var boxes = '';
  for (var i = 0; i < 100; i++) {
    boxes += '<div style="aspect-ratio:1;background:' + (i < pct ? '#4f46e5' : '#e2e8f0') + ';border-radius:2px"></div>';
  }
  return '<div style="display:grid;grid-template-columns:repeat(10,1fr);gap:2px;max-width:220px">' + boxes + '</div>';
}

// Build divisibility rule cards
function divRules() {
  var rules = [
    ['÷2','末位是偶数(0,2,4,6,8)','如 34✓ 35✗','#dbeafe'],
    ['÷3','各位数字之和能被3整除','如 372: 3+7+2=12✓','#dcfce7'],
    ['÷4','末两位能被4整除','如 1324: 24÷4=6✓','#fef3c7'],
    ['÷5','末位是0或5','如 35✓ 37✗','#fce7f3'],
    ['÷9','各位数字之和能被9整除','如 729: 7+2+9=18✓','#ede9fe']
  ];
  return rules.map(function(r) {
    return '<div style="display:flex;align-items:center;gap:8px;padding:6px 10px;background:' + r[3] + ';border-radius:8px">' +
      '<span style="font-weight:800;font-size:15px;min-width:28px">' + r[0] + '</span>' +
      '<div><div style="font-weight:600">' + r[1] + '</div><div style="font-size:11px;color:#64748b">' + r[2] + '</div></div></div>';
  }).join('');
}

// Build prime sieve (no template literals)
function primeSieve() {
  var primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];
  var boxes = '';
  for (var i = 1; i <= 100; i++) {
    var isPrime = primes.indexOf(i) >= 0;
    var isOne = i === 1;
    var bg = isPrime ? '#4f46e5' : isOne ? '#fef3c7' : '#f1f5f9';
    var color = isPrime ? '#fff' : isOne ? '#92400e' : '#94a3b8';
    var fw = isPrime ? '700' : '400';
    boxes += '<div style="aspect-ratio:1;background:' + bg + ';border-radius:3px;display:flex;align-items:center;justify-content:center;color:' + color + ';font-weight:' + fw + ';font-size:10px">' + i + '</div>';
  }
  return boxes;
}

const TOPICS = [
  {
    id: 'fractions', name: '分数运算', icon: '🍕',
    theme: 'numbers', grade: '3-5年级', gradeNum: 3,
    amcFreq: 15, difficulty: '基础',
    desc: '分数加减乘除、约分通分',
    realLifeHtml: realLife('🍕 做饭量杯（1/2杯面粉）、打折计算（7折=70%）、分披萨', [
      { url:'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=300&q=80', alt:'披萨', cap:'分披萨 → 认识分数' },
      { url:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&q=80', alt:'蛋糕', cap:'切蛋糕 → 等分思想' }
    ]),
    examTips: '⚠️ AMC8常考"连续取分数"(如吃了1/4，剩余的1/3...)，注意每次的整体在变化',
    commonMistakes: [
      '❌ 1/3 + 1/4 = 2/7 → ✅ 应该通分: 4/12 + 3/12 = 7/12',
      '❌ 分数乘法也通分 → ✅ 乘法直接分子×分子, 分母×分母',
      '❌ "剩余的1/3"当成"全部的1/3" → ✅ 注意每步的整体是谁'
    ],
    prereqs: [],
    glossary: [
      { cn: '分数', en: 'Fraction', pron: 'FRAK-shun' },
      { cn: '分子', en: 'Numerator', pron: 'NOO-muh-ray-ter' },
      { cn: '分母', en: 'Denominator', pron: 'dih-NOM-ih-nay-ter' },
      { cn: '约分', en: 'Simplify / Reduce', pron: 'SIM-plih-fy' },
      { cn: '通分', en: 'Common Denominator', pron: '' },
      { cn: '倒数', en: 'Reciprocal', pron: 'reh-SIP-ruh-kul' },
      { cn: '等值分数', en: 'Equivalent Fraction', pron: '' },
      { cn: '最大公因数', en: 'GCD', pron: '' },
      { cn: '最小公倍数', en: 'LCM', pron: '' }
    ],
    definitions: [
      { term: '分数 (Fraction)', def: '表示部分与整体关系的数。写作 a/b，分子 a 表示取几份，分母 b 表示共分几份。' },
      { term: '约分 (Simplify)', def: '把分数的分子和分母同时除以最大公因数。如 6/8 → 3/4。' },
      { term: '通分 (Common Denominator)', def: '把两个不同分母的分数化成相同分母。如 1/3 和 1/4 通分为 4/12 和 3/12。' },
      { term: '倒数 (Reciprocal)', def: '把分子和分母互换得到的数。如 2/3 的倒数是 3/2。两数之积为1。' }
    ],
    videosCn: [
      { title: '分数的意义 - 小学动画讲解', url: 'https://search.bilibili.com/all?keyword=分数的意义+小学+动画讲解&order=click', searchUrl: 'https://search.bilibili.com/all?keyword=分数的意义+小学+动画讲解&order=click' },
      { title: '分数乘法原理 - 画格子法', url: 'https://search.bilibili.com/all?keyword=分数乘法+原理+画格子&order=click', searchUrl: 'https://search.bilibili.com/all?keyword=分数乘法+原理+画格子&order=click' },
      { title: '分数除法 - 为什么颠倒相乘', url: 'https://search.bilibili.com/all?keyword=分数除法+颠倒相乘+原理&order=click', searchUrl: 'https://search.bilibili.com/all?keyword=分数除法+颠倒相乘+原理&order=click' }
    ],
    videosEn: [
      { title: 'Math Antics - What Are Fractions?', url: 'https://www.youtube.com/watch?v=n0FZhQ_GkKw', searchUrl: 'https://www.youtube.com/results?search_query=Math+Antics+fractions+introduction' },
      { title: 'Math Antics - Multiplying Fractions', url: 'https://www.youtube.com/watch?v=qmfXyR7Z6Lk', searchUrl: 'https://www.youtube.com/results?search_query=Math+Antics+multiplying+fractions' },
      { title: 'Math Antics - Dividing Fractions', url: 'https://www.youtube.com/watch?v=5juto2ze8Lg', searchUrl: 'https://www.youtube.com/results?search_query=Math+Antics+dividing+fractions' }
    ],
    lessons: [
      {
        title: '第1课：分数的含义与约分',
        story: '一个大披萨切成8片，你吃了3片——你吃了 3/8！\n\n分数的分母是整体被分成的份数，分子是取了几份。\n\n约分就是换个说法但大小不变：2/4 和 1/2 是一样大的。',
        keyPoints: ['分数 = 部分÷整体', '分母=总份数，分子=取几份', '约分：分子分母同除以最大公因数', '1/2 = 2/4 = 3/6（等值分数）'],
        visual: gridVis(8, 3, '图解：3/8 是什么意思？（8片中蓝色3片）', null),
        textbook: tb('人教版 五年级上册 第四单元',
          '分数表示把一个整体平均分成若干份，取其中几份的数。',
          '把一根绳子平均分成5份，取其中3份，用分数表示是多少？<br><strong>解：</strong>整体分5份（分母=5），取3份（分子=3），所以是 <strong>3/5</strong>。',
          '化简分数：(1) 8/12 (2) 15/20 (3) 6/9<br><span style="color:#666;font-size:12px">答案：(1) 2/3 (2) 3/4 (3) 2/3</span>')
      },
      {
        title: '第2课：加减法——为什么要通分？',
        story: '1/3 + 1/4 能直接加吗？不能！因为每份大小不同。\n\n解决：把两块重新切成一样大的小块！\n1/3 = 4/12, 1/4 = 3/12\n4/12 + 3/12 = 7/12',
        keyPoints: ['同分母直接加减分子', '不同分母→找最小公倍数→通分→再加减', '通分的本质：统一每份的大小'],
        visual: '<div style="font-weight:700;margin-bottom:10px;color:#4f46e5">图解：通分步骤</div>' +
          '<div style="padding:10px;background:#eff6ff;border-radius:8px;font-size:14px;line-height:2">' +
          '1/3 + 1/4<br>→ 公分母 = LCM(3,4) = 12<br>→ 1/3 = 4/12，1/4 = 3/12<br>' +
          '→ 4/12 + 3/12 = <strong style="color:#4f46e5">7/12</strong></div>',
        textbook: tb('人教版 五年级下册 分数加减法',
          '不同分母的分数相加减，需要先通分（找最小公倍数作为公分母）。',
          '1/2 + 1/3 = ?<br><strong>解：</strong>公分母=6。1/2=3/6，1/3=2/6。<br>3/6 + 2/6 = <strong>5/6</strong>',
          '计算：(1) 3/4 - 1/6 (2) 2/5 + 1/3<br><span style="color:#666;font-size:12px">答案：(1)7/12 (2)11/15</span>')
      },
      {
        title: '第3课：乘法——画格子秒懂',
        story: '1/2 × 1/3 = ？想象一块巧克力：\n① 横切1刀→取1行=1/2（蓝色）\n② 竖切2刀→在蓝色取1列\n\n总格2×3=6格，取1格 → 答案1/6\n\n"的"就是"乘"：半个苹果的1/3 = 1/2 × 1/3',
        keyPoints: ['a/b × c/d = (a×c)/(b×d)', '画格子：横切×竖切=总格数，选中格=分子之积', '"的"就是"乘"', '乘以小于1的数→结果变小'],
        visual: '<div style="font-weight:700;margin-bottom:10px;color:#4f46e5">图解：1/2 × 1/3 = 1/6</div>' +
          '<div style="display:grid;grid-template-columns:repeat(3,48px);gap:3px;margin-bottom:8px">' +
          '<div style="height:40px;background:#312e81;border-radius:4px;border:2px solid #1e1b4b"></div>' +
          '<div style="height:40px;background:#bfdbfe;border-radius:4px"></div>' +
          '<div style="height:40px;background:#bfdbfe;border-radius:4px"></div>' +
          '<div style="height:40px;background:#f1f5f9;border-radius:4px"></div>' +
          '<div style="height:40px;background:#f1f5f9;border-radius:4px"></div>' +
          '<div style="height:40px;background:#f1f5f9;border-radius:4px"></div></div>' +
          '<div style="font-size:13px;color:#64748b">深蓝1格 ÷ 总6格 = <strong style="color:#4f46e5">1/6</strong></div>',
        textbook: tb('人教版 六年级上册 分数乘法',
          '分数乘分数：分子×分子作新分子，分母×分母作新分母。可先约分再算更简便。',
          '2/3 × 3/5 = ?<br><strong>解：</strong>(2×3)/(3×5) = 6/15 = <strong>2/5</strong>。<br>先约分更快：3和3约去→(2/1)×(1/5)=2/5',
          '计算：(1) 3/4 × 2/9 (2) 5/6 × 3/10<br><span style="color:#666;font-size:12px">答案：(1)1/6 (2)1/4</span>')
      },
      {
        title: '第4课：除法——为什么翻转相乘？',
        story: '3块披萨，每盘放1/2块，能装几盘？\n3 ÷ 1/2 = ？每块切半，3块→6份 → 6盘！\n\n原理：除以1/2 = "有几个1/2" = 每个整体里有2个1/2 → 乘以2\n\n一般规律：除以一个数 = 乘以它的倒数',
        keyPoints: ['倒数：分子分母互换，如2/3↔3/2', '除以分数 = 乘以倒数', '口诀：除号变乘号，后面翻个身', '÷小于1的数→结果变大'],
        visual: '<div style="font-weight:700;margin-bottom:10px;color:#4f46e5">图解：除法步骤</div>' +
          '<div style="padding:10px;background:#eff6ff;border-radius:8px;font-size:14px;line-height:2">' +
          '3 ÷ 1/2<br>→ 1/2的倒数是 2/1 = 2<br>→ 3 × 2 = <strong style="color:#4f46e5">6</strong><br>' +
          '<span style="font-size:12px;color:#64748b">验证：6个1/2 = 6÷2 = 3 ✓</span></div>',
        textbook: tb('人教版 六年级上册 分数除法',
          '除以一个不等于0的数，等于乘以这个数的倒数。',
          '3/4 ÷ 3/8 = ?<br><strong>解：</strong>3/8的倒数=8/3。<br>3/4 × 8/3 = 24/12 = <strong>2</strong>',
          '计算：(1) 2/3 ÷ 4 (2) 5/6 ÷ 2/3<br><span style="color:#666;font-size:12px">答案：(1)1/6 (2)5/4</span>')
      }
    ],
    practice: {
      basic: [
        { q: '3/8 + 2/8 = ?', options: ['5/16','5/8','1/8','6/8'], answer: 1, explain: '同分母直接加：(3+2)/8=5/8' },
        { q: '1/2 + 1/3 = ?', options: ['2/5','5/6','1/5','3/6'], answer: 1, explain: '通分→3/6+2/6=5/6' },
        { q: '1/3 × 1/5 = ?', options: ['2/8','1/15','1/8','2/15'], answer: 1, explain: '(1×1)/(3×5)=1/15' },
        { q: '6 ÷ 1/3 = ?', options: ['2','18','6/3','1/2'], answer: 1, explain: '6×3=18（6里面有18个1/3）' },
        { q: '0.75变成分数是?', options: ['7/5','3/4','75/10','7/50'], answer: 1, explain: '0.75=75/100=3/4' }
      ],
      advanced: [
        { q: '2/3 × 3/4 × 4/5 = ?', options: ['24/60','2/5','1/3','6/12'], answer: 1, explain: '连续约分：(2×3×4)/(3×4×5)=24/60=2/5' },
        { q: '一杯果汁500ml倒出1/4后又喝了剩余的1/3，还剩多少ml？', options: ['250','200','375','125'], answer: 0, explain: '倒出后剩375ml,再喝375×1/3=125ml,剩250ml' },
        { q: '3/4 ÷ 3/8 = ?', options: ['9/32','1/2','2','8/4'], answer: 2, explain: '3/4×8/3=24/12=2' }
      ],
      amc: [
        { q: '[2023 #1] (8×4+2)−(8+4×2) = ?', options: ['0','6','10','18','24'], answer: 3, explain: '先乘后加：(32+2)-(8+8)=34-16=18', year: 2023, num: 1 },
        { q: '[2023 #10] Harold吃1/4派，驼鹿吃剩余1/3，豪猪吃再剩余1/3。还剩?', options: ['1/12','1/6','1/4','1/3','5/12'], answer: 3, explain: '剩3/4→吃(3/4)×(1/3)=1/4剩1/2→吃(1/2)×(1/3)=1/6剩1/3', year: 2023, num: 10 },
        { q: '[2022 #8] (1/3)(2/4)(3/5)×...×(20/22)=?', options: ['1/462','1/231','1/132','2/213','1/22'], answer: 1, explain: '大量约消后分子剩1×2=2，分母剩21×22=462，结果2/462=1/231', year: 2022, num: 8 }
      ]
    }
  }
];

// Build the file
let fileContent = '// ========== AMC8 Learning Hub - Data ==========\n\n';

// --- THEMES (write as JSON-like object literal) ---
fileContent += 'const THEMES = ' + JSON.stringify([
  {
    id: 'numbers', name: '数与运算', icon: '🔢', color: '#4f46e5',
    desc: '从整数到分数小数，计算是一切数学的基础',
    mindmap: { center: '数与运算', branches: [
      { name: '整数', children: ['四则运算','运算顺序','估算'] },
      { name: '分数', children: ['概念与约分','加减法(通分)','乘法(画格子)','除法(翻转)'] },
      { name: '小数', children: ['小数概念','小数运算','分数小数互化'] },
      { name: '百分数', children: ['百分数概念','折扣利润','浓度问题'] }
    ]},
    formulas: [
      { name: '分数加法', formula: 'a/b + c/d = (ad+bc)/bd', note: '先通分再加' },
      { name: '分数乘法', formula: 'a/b × c/d = ac/bd', note: '分子×分子, 分母×分母' },
      { name: '分数除法', formula: 'a/b ÷ c/d = a/b × d/c', note: '翻转后相乘' },
      { name: '百分数', formula: '部分/整体 × 100%', note: '利润率=(售价-成本)/成本' },
      { name: '分数→小数', formula: '3/4 = 3÷4 = 0.75', note: '分子÷分母' }
    ]
  },
  {
    id: 'number_theory', name: '数论', icon: '💎', color: '#7c3aed',
    desc: '研究整数的深层性质——因数、质数、整除、余数',
    mindmap: { center: '数论', branches: [
      { name: '整除性', children: ['整除判断规则','因数与倍数','GCD','LCM'] },
      { name: '质数', children: ['质数判定','质因数分解','唯一分解定理'] },
      { name: '数论技巧', children: ['奇偶分析','尾数规律','完全平方数'] }
    ]},
    formulas: [
      { name: '整除2', formula: '末位是偶数', note: '0,2,4,6,8' },
      { name: '整除3', formula: '各位数字和能被3整除', note: '372→12→能整除' },
      { name: '整除4', formula: '末两位能被4整除', note: '如1324→24÷4=6' },
      { name: 'GCD×LCM', formula: 'GCD(a,b)×LCM(a,b)=a×b', note: '非常有用!' },
      { name: '完全平方数', formula: '质因数指数都是偶数', note: '如36=2²×3²' }
    ]
  },
  {
    id: 'algebra', name: '代数与方程', icon: '⚖️', color: '#2563eb',
    desc: '用字母代替未知数，列方程解决问题',
    mindmap: { center: '代数', branches: [
      { name: '比与比例', children: ['比的概念','比例应用','按比分配'] },
      { name: '方程', children: ['一元一次方程','列方程解应用题'] },
      { name: '数列', children: ['等差数列','数列求和','规律寻找'] },
      { name: '行程问题', children: ['速度×时间=距离','相遇','追及'] }
    ]},
    formulas: [
      { name: '比例', formula: 'a:b = c:d → ad = bc', note: '交叉相乘' },
      { name: '等差通项', formula: 'aₙ = a₁ + (n-1)d', note: 'd=公差' },
      { name: '等差求和', formula: 'S = n(a₁+aₙ)/2', note: '首项+末项×项数÷2' },
      { name: '行程', formula: '距离 = 速度 × 时间', note: '相遇时间=距离÷速度和' },
      { name: '高斯求和', formula: '1+2+...+n = n(n+1)/2', note: '' }
    ]
  },
  {
    id: 'geometry', name: '几何与测量', icon: '📐', color: '#059669',
    desc: '图形的面积、周长、体积——看得见的数学',
    mindmap: { center: '几何', branches: [
      { name: '平面图形', children: ['三角形面积','四边形面积','组合图形'] },
      { name: '圆', children: ['圆周长','圆面积','扇形','环形'] },
      { name: '坐标几何', children: ['坐标系','两点距离'] }
    ]},
    formulas: [
      { name: '三角形面积', formula: 'S = 底×高÷2', note: '' },
      { name: '梯形面积', formula: 'S = (上底+下底)×高÷2', note: '' },
      { name: '圆周长', formula: 'C = 2πr = πd', note: 'π≈3.14159' },
      { name: '圆面积', formula: 'S = πr²', note: '' },
      { name: '勾股定理', formula: 'a²+b²=c²', note: '直角三角形斜边' },
      { name: '两点距离', formula: 'd = √[(x₂-x₁)²+(y₂-y₁)²]', note: '' }
    ]
  },
  {
    id: 'counting_prob', name: '计数与概率', icon: '🎲', color: '#dc2626',
    desc: 'AMC8的王牌考点——排列组合与概率',
    mindmap: { center: '计数与概率', branches: [
      { name: '计数原理', children: ['加法原理','乘法原理','分类讨论'] },
      { name: '排列组合', children: ['排列(有序)','组合(无序)'] },
      { name: '容斥原理', children: ['两个集合','补集思想'] },
      { name: '概率', children: ['古典概型','列举法','补集概率'] }
    ]},
    formulas: [
      { name: '加法原理', formula: '方法A或B → N(A)+N(B)', note: '互斥的方法相加' },
      { name: '乘法原理', formula: '步骤1然后2 → N(1)×N(2)', note: '连续的步骤相乘' },
      { name: '排列', formula: 'P(n,k) = n!/(n-k)!', note: '从n个取k个有序' },
      { name: '组合', formula: 'C(n,k) = n!/[k!(n-k)!]', note: '从n个取k个无序' },
      { name: '容斥', formula: '|A∪B| = |A|+|B|-|A∩B|', note: '' },
      { name: '概率', formula: 'P = 有利结果数/总结果数', note: '0≤P≤1' }
    ]
  },
  {
    id: 'data_logic', name: '统计与逻辑', icon: '📊', color: '#ca8a04',
    desc: '数据分析、图表阅读和逻辑推理',
    mindmap: { center: '统计与逻辑', branches: [
      { name: '统计量', children: ['平均数','中位数','众数','极差'] },
      { name: '图表', children: ['条形图','折线图','饼图'] },
      { name: '逻辑推理', children: ['排除法','列表法','逆向思维'] }
    ]},
    formulas: [
      { name: '平均数', formula: '平均数 = 总和÷个数', note: '' },
      { name: '中位数', formula: '排序后最中间的数', note: '偶数个取中间两数平均' },
      { name: '众数', formula: '出现次数最多的数', note: '可以有多个' },
      { name: '极差', formula: '极差 = 最大值-最小值', note: '' }
    ]
  }
], null, 2) + ';\n\n';

// Write TOPICS
fileContent += 'const TOPICS = ' + JSON.stringify(TOPICS, null, 2) + ';\n\n';

// Write ACHIEVEMENTS
fileContent += 'const ACHIEVEMENTS = ' + JSON.stringify([
  { id: 'first_login', name: '初次探险', desc: '第一次打开学习中心', icon: '🚀' },
  { id: 'streak_3', name: '三天小将', desc: '连续学习3天', icon: '🔥' },
  { id: 'streak_7', name: '一周勇士', desc: '连续学习7天', icon: '⚡' },
  { id: 'streak_30', name: '月度之星', desc: '连续学习30天', icon: '🌟' },
  { id: 'streak_100', name: '百日传奇', desc: '连续学习100天', icon: '👑' },
  { id: 'topic_1', name: '初窥门径', desc: '完成第一个知识点', icon: '📖' },
  { id: 'topic_5', name: '五子登科', desc: '完成5个知识点', icon: '🎓' },
  { id: 'topic_all', name: '学霸诞生', desc: '完成全部知识点', icon: '🏆' },
  { id: 'problems_10', name: '做题新手', desc: '累计做10道题', icon: '✏️' },
  { id: 'problems_50', name: '做题达人', desc: '累计做50道题', icon: '📝' },
  { id: 'problems_200', name: '刷题机器', desc: '累计做200道题', icon: '🤖' },
  { id: 'star_50', name: '星光闪耀', desc: '累计获得50颗星星', icon: '✨' }
], null, 2) + ';\n';

fs.writeFileSync('D:/11. AI/AI 0324/amc8-hub/data_new.js', fileContent, 'utf8');
const size = fs.statSync('D:/11. AI/AI 0324/amc8-hub/data_new.js').size;
console.log('Generated data_new.js: ' + size + ' bytes');

// Validate
try {
  require('D:/11. AI/AI 0324/amc8-hub/data_new.js');
  console.log('SYNTAX OK');
} catch(e) {
  console.log('Error: ' + e.message);
}
