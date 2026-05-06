// ========== AMC8 Learning Hub v2 - 全面重构 ==========

// ===== 主题体系 =====
const THEMES = [
  {
    id: 'numbers', name: '数与运算', icon: '🔢', color: '#4f46e5',
    desc: '从整数到分数小数，计算是一切数学的基础',
    mindmap: {
      center: '数与运算',
      branches: [
        { name: '整数', children: ['四则运算','运算顺序','估算'] },
        { name: '分数', children: ['概念与约分','加减法(通分)','乘法(画格子)','除法(翻转)'] },
        { name: '小数', children: ['小数概念','小数运算','分数小数互化'] },
        { name: '百分数', children: ['百分数概念','折扣利润','浓度问题'] }
      ]
    },
    formulas: [
      { name: '分数加法', formula: 'a/b + c/d = (ad+bc)/bd', note: '先通分再加' },
      { name: '分数乘法', formula: 'a/b × c/d = ac/bd', note: '分子×分子, 分母×分母' },
      { name: '分数除法', formula: 'a/b ÷ c/d = a/b × d/c', note: '翻转后相乘' },
      { name: '百分数', formula: '部分/整体 × 100%', note: '利润率=(售价-成本)/成本' },
      { name: '分数↔小数', formula: '3/4 = 3÷4 = 0.75', note: '分子÷分母' }
    ]
  },
  {
    id: 'number_theory', name: '数论', icon: '💎', color: '#7c3aed',
    desc: '研究整数的深层性质——因数、质数、整除、余数',
    mindmap: {
      center: '数论',
      branches: [
        { name: '整除性', children: ['整除判断规则','因数与倍数','GCD最大公因数','LCM最小公倍数'] },
        { name: '质数', children: ['质数判定','质因数分解','唯一分解定理'] },
        { name: '数论技巧', children: ['奇偶分析','尾数规律','完全平方数','余数问题'] }
      ]
    },
    formulas: [
      { name: '整除2', formula: '末位是偶数', note: '0,2,4,6,8' },
      { name: '整除3', formula: '各位数字和能被3整除', note: '372→3+7+2=12→能整除' },
      { name: '整除9', formula: '各位数字和能被9整除', note: '与3类似但更严' },
      { name: '整除4', formula: '末两位能被4整除', note: '如1324→24÷4=6✓' },
      { name: '整除11', formula: '奇数位和-偶数位和能被11整除', note: '如2728→(2+2)-(7+8)=-11✓' },
      { name: 'GCD×LCM', formula: 'GCD(a,b)×LCM(a,b)=a×b', note: '非常有用!' },
      { name: '完全平方数', formula: '质因数分解中每个指数都是偶数', note: '如36=2²×3²' }
    ]
  },
  {
    id: 'algebra', name: '代数与方程', icon: '⚖️', color: '#2563eb',
    desc: '用字母代替未知数，列方程解决问题',
    mindmap: {
      center: '代数',
      branches: [
        { name: '比与比例', children: ['比的概念','比例应用','按比分配','捕获再捕获'] },
        { name: '方程', children: ['一元一次方程','列方程解应用题','不定方程(整数解)'] },
        { name: '数列', children: ['等差数列','数列求和','规律寻找'] },
        { name: '行程问题', children: ['速度×时间=距离','相遇问题','追及问题'] }
      ]
    },
    formulas: [
      { name: '比例', formula: 'a:b = c:d → ad = bc', note: '交叉相乘' },
      { name: '按比分配', formula: '甲 = 总量 × 甲的份数/(甲+乙)', note: '' },
      { name: '等差数列通项', formula: 'aₙ = a₁ + (n-1)d', note: 'd=公差' },
      { name: '等差数列求和', formula: 'S = n(a₁+aₙ)/2', note: '首项+末项×项数÷2' },
      { name: '行程', formula: '距离 = 速度 × 时间', note: '相遇时间=距离÷速度和' },
      { name: '高斯求和', formula: '1+2+...+n = n(n+1)/2', note: '如1+2+...+100=5050' }
    ]
  },
  {
    id: 'geometry', name: '几何与测量', icon: '📐', color: '#059669',
    desc: '图形的面积、周长、体积——看得见的数学',
    mindmap: {
      center: '几何',
      branches: [
        { name: '平面图形', children: ['三角形面积','四边形面积','组合图形(割补法)'] },
        { name: '圆', children: ['圆周长','圆面积','扇形面积','环形面积'] },
        { name: '坐标几何', children: ['坐标系','两点距离','坐标法求面积'] },
        { name: '立体几何', children: ['正方体/长方体','展开图','表面积与体积'] },
        { name: '几何技巧', children: ['相似与面积比','勾股定理','对称与变换'] }
      ]
    },
    formulas: [
      { name: '三角形面积', formula: 'S = 底×高÷2', note: '' },
      { name: '梯形面积', formula: 'S = (上底+下底)×高÷2', note: '' },
      { name: '圆周长', formula: 'C = 2πr = πd', note: 'π≈3.14159' },
      { name: '圆面积', formula: 'S = πr²', note: '' },
      { name: '勾股定理', formula: 'a²+b²=c²', note: '直角三角形斜边' },
      { name: '相似比→面积比', formula: '边比k → 面积比k²', note: '体积比k³' },
      { name: '两点距离', formula: 'd = √[(x₂-x₁)²+(y₂-y₁)²]', note: '' }
    ]
  },
  {
    id: 'counting_prob', name: '计数与概率', icon: '🎲', color: '#dc2626',
    desc: 'AMC8的王牌考点——排列组合与概率',
    mindmap: {
      center: '计数与概率',
      branches: [
        { name: '计数原理', children: ['加法原理','乘法原理','分类讨论'] },
        { name: '排列组合', children: ['排列(有序)','组合(无序)','重复排列'] },
        { name: '容斥原理', children: ['两个集合','三个集合','补集思想'] },
        { name: '概率', children: ['古典概型','列举法/树状图','补集概率','独立事件'] }
      ]
    },
    formulas: [
      { name: '加法原理', formula: '方法A或方法B → N(A)+N(B)', note: '互斥的方法相加' },
      { name: '乘法原理', formula: '步骤1然后步骤2 → N(1)×N(2)', note: '连续的步骤相乘' },
      { name: '排列', formula: 'P(n,k) = n!/(n-k)!', note: '从n个取k个有序排列' },
      { name: '组合', formula: 'C(n,k) = n!/[k!(n-k)!]', note: '从n个取k个无序' },
      { name: '容斥(两集合)', formula: '|A∪B| = |A|+|B|-|A∩B|', note: '' },
      { name: '概率', formula: 'P = 想要的结果数/所有可能结果数', note: '0≤P≤1' },
      { name: '补集概率', formula: 'P(A) = 1-P(不是A)', note: '"至少一个"用补集' }
    ]
  },
  {
    id: 'data_logic', name: '统计与逻辑', icon: '📊', color: '#ca8a04',
    desc: '数据分析、图表阅读和逻辑推理',
    mindmap: {
      center: '统计与逻辑',
      branches: [
        { name: '统计量', children: ['平均数','中位数','众数','极差'] },
        { name: '图表', children: ['条形图','折线图','饼图','散点图'] },
        { name: '逻辑推理', children: ['排除法','列表法','逆向思维','图着色'] }
      ]
    },
    formulas: [
      { name: '平均数', formula: '平均数 = 总和÷个数', note: '' },
      { name: '中位数', formula: '排序后最中间的数', note: '偶数个取中间两数平均' },
      { name: '众数', formula: '出现次数最多的数', note: '可以有多个' },
      { name: '极差', formula: '极差 = 最大值-最小值', note: '' }
    ]
  }
];

// ===== 知识点(按主题分组,主题内按年级排序) =====
const TOPICS = [
  // ===== 主题1: 数与运算 =====
  {
    id: 'fractions', name: '分数运算', icon: '🍕',
    theme: 'numbers', grade: '3-5年级', gradeNum: 3,
    amcFreq: 15, difficulty: '基础',
    desc: '分数加减乘除、约分通分',
    realLife: '做饭时量半杯面粉(1/2杯)、打折计算(7折=70%=7/10)、分披萨给朋友',
    examTips: '⚠️ AMC8常考"连续取分数"(如吃了1/4，剩余的1/3...)，注意每次的"整体"在变化',
    commonMistakes: [
      '❌ 1/3 + 1/4 = 2/7 → ✅ 应该通分: 4/12 + 3/12 = 7/12',
      '❌ 分数乘法也通分 → ✅ 乘法直接分子×分子, 分母×分母',
      '❌ "剩余的1/3"当成"全部的1/3" → ✅ 注意每步的"整体"是谁'
    ],
    prereqs: [],
    glossary: [
      { cn: '分数', en: 'Fraction', pron: 'FRAK-shun' },
      { cn: '分子', en: 'Numerator', pron: 'NOO-muh-ray-ter' },
      { cn: '分母', en: 'Denominator', pron: 'dih-NOM-ih-nay-ter' },
      { cn: '约分', en: 'Simplify / Reduce', pron: 'SIM-plih-fy' },
      { cn: '通分', en: 'Common Denominator', pron: '' },
      { cn: '最简分数', en: 'Simplified Fraction', pron: '' },
      { cn: '倒数', en: 'Reciprocal', pron: 'reh-SIP-ruh-kul' },
      { cn: '真分数', en: 'Proper Fraction', pron: '' },
      { cn: '假分数', en: 'Improper Fraction', pron: '' },
      { cn: '带分数', en: 'Mixed Number', pron: '' },
      { cn: '等值分数', en: 'Equivalent Fraction', pron: '' },
      { cn: '最大公因数', en: 'GCD (Greatest Common Divisor)', pron: '' },
      { cn: '最小公倍数', en: 'LCM (Least Common Multiple)', pron: '' }
    ],
    definitions: [
      { term: '分数 (Fraction)', def: '表示"部分与整体关系"的数。写作 a/b，其中 a 是分子（取了几份），b 是分母（共分几份）。' },
      { term: '约分 (Simplify)', def: '把分数的分子和分母同时除以它们的最大公因数，使分数变成最简形式。如 6/8 → 3/4。' },
      { term: '通分 (Common Denominator)', def: '把两个不同分母的分数化成相同分母，以便进行加减运算。如 1/3 和 1/4 通分为 4/12 和 3/12。' },
      { term: '倒数 (Reciprocal)', def: '把一个分数的分子和分母互换得到的数。如 2/3 的倒数是 3/2。一个数和它的倒数相乘等于1。' }
    ],
    videosCn: [
      { title: '洋葱学园 - 分数的意义(动画入门)', url: 'https://www.bilibili.com/video/BV1Wb411H7GE/', searchUrl: 'https://search.bilibili.com/all?keyword=分数的意义+小学+动画讲解&order=click' },
      { title: '分数乘法为什么分子乘分子？(画格子法)', url: 'https://www.bilibili.com/video/BV1dT4y1c7Fb/', searchUrl: 'https://search.bilibili.com/all?keyword=分数乘法+原理+画格子&order=click' },
      { title: '分数除法：为什么颠倒相乘？(原理讲透)', url: 'https://www.bilibili.com/video/BV1uZ4y1M7Vx/', searchUrl: 'https://search.bilibili.com/all?keyword=分数除法+颠倒相乘+原理&order=click' },
      { title: '3Blue1Brown - 分数的直觉理解(中文配音)', url: 'https://www.bilibili.com/video/BV1ys411472E/', searchUrl: 'https://search.bilibili.com/all?keyword=分数+直觉理解+3blue1brown+中文&order=click' }
    ],
    videosEn: [
      { title: 'Math Antics - What Are Fractions?(入门动画)', url: 'https://www.youtube.com/watch?v=n0FZhQ_GkKw' },
      { title: 'Math Antics - Multiplying Fractions(乘法)', url: 'https://www.youtube.com/watch?v=qmfXyR7Z6Lk' },
      { title: 'Math Antics - Dividing Fractions(除法)', url: 'https://www.youtube.com/watch?v=5juto2ze8Lg' },
      { title: 'Khan Academy - Adding Fractions(加法)', url: 'https://www.youtube.com/watch?v=52ZlXsFJULI' }
    ],
    lessons: [
      {
        title: '第1课：分数的含义与约分',
        story: '一个大披萨切成8片🍕，你吃了3片——你吃了 <strong>3/8</strong>！\n\n分数回答的问题是：整体被分成了几份(分母)，你拿了其中几份(分子)？\n\n<strong>约分</strong>就是"换个说法但大小不变"：2/4 和 1/2 是一样大的——就像说"半个苹果"和"2个四分之一苹果"是同一个意思。',
        keyPoints: ['分数 = 部分÷整体', '分母=总份数，分子=取几份', '约分：分子分母同除以最大公因数', '1/2 = 2/4 = 3/6 = 50/100（等值分数）'],
        visual: `<div style="font-weight:700;margin-bottom:12px;color:var(--p)">🖼️ 图解：3/8 是什么意思？</div>
<div style="display:flex;gap:4px;flex-wrap:wrap;margin-bottom:8px">
${[1,2,3,4,5,6,7,8].map(i=>`<div style="width:44px;height:44px;border-radius:6px;background:${i<=3?'#4f46e5':'#e2e8f0'};display:flex;align-items:center;justify-content:center;color:${i<=3?'#fff':'#94a3b8'};font-weight:700">${i}</div>`).join('')}
</div>
<div style="font-size:13px;color:var(--text2)">8片中取3片 = <strong style="color:var(--p)">3/8</strong>（蓝色格=分子3，总格=分母8）</div>
<hr style="margin:12px 0;border:none;border-top:1px solid var(--border)">
<div style="font-weight:700;margin-bottom:8px;color:var(--g)">🖼️ 等值分数：形状不同，大小相同</div>
<div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">
  <div style="text-align:center"><div style="display:flex;gap:2px">${[1,2].map(i=>`<div style="width:30px;height:30px;background:${i<=1?'#10b981':'#e2e8f0'};border-radius:4px"></div>`).join('')}</div><div style="font-size:12px;margin-top:4px">1/2</div></div>
  <div style="font-size:20px;color:var(--text2)">=</div>
  <div style="text-align:center"><div style="display:flex;gap:2px">${[1,2,3,4].map(i=>`<div style="width:30px;height:30px;background:${i<=2?'#10b981':'#e2e8f0'};border-radius:4px"></div>`).join('')}</div><div style="font-size:12px;margin-top:4px">2/4</div></div>
  <div style="font-size:20px;color:var(--text2)">=</div>
  <div style="text-align:center"><div style="display:flex;gap:2px">${[1,2,3,4,5,6].map(i=>`<div style="width:20px;height:30px;background:${i<=3?'#10b981':'#e2e8f0'};border-radius:4px"></div>`).join('')}</div><div style="font-size:12px;margin-top:4px">3/6</div></div>
</div>`
      },
      {
        title: '第2课：加减法——为什么要通分？',
        story: '1/3 + 1/4 能直接加吗？❌ 不能！因为1/3的"一份"和1/4的"一份"<strong>大小不同</strong>！\n\n解决：把两块都<strong>重新切成一样大的小块</strong>！\n1/3 = 4/12, 1/4 = 3/12\n现在：4/12 + 3/12 = <strong>7/12</strong> ✅\n\n这就是<strong>通分</strong>的意义！',
        keyPoints: ['同分母直接加减分子', '不同分母→找最小公倍数→通分→再加减', '💡 通分的本质：统一"每份的大小"'],
        visual: `<div style="font-weight:700;margin-bottom:12px;color:var(--p)">🖼️ 图解：为什么 1/3 + 1/4 ≠ 2/7？</div>
<div style="display:flex;gap:8px;align-items:flex-start;flex-wrap:wrap">
  <div style="text-align:center">
    <div style="display:flex;gap:2px">${[1,2,3].map(i=>`<div style="width:36px;height:36px;background:${i<=1?'#4f46e5':'#e2e8f0'};border-radius:4px"></div>`).join('')}</div>
    <div style="font-size:13px;margin-top:4px;font-weight:700">1/3</div>
    <div style="font-size:11px;color:var(--text2)">每块很大</div>
  </div>
  <div style="font-size:24px;padding-top:6px">+</div>
  <div style="text-align:center">
    <div style="display:flex;gap:2px">${[1,2,3,4].map(i=>`<div style="width:27px;height:36px;background:${i<=1?'#ef4444':'#e2e8f0'};border-radius:4px"></div>`).join('')}</div>
    <div style="font-size:13px;margin-top:4px;font-weight:700">1/4</div>
    <div style="font-size:11px;color:var(--text2)">每块稍小</div>
  </div>
  <div style="font-size:24px;padding-top:6px">=</div>
  <div style="font-size:13px;color:var(--r);padding-top:6px">❌ 不能直接加<br>因为每块大小不同！</div>
</div>
<div style="margin-top:12px;padding:10px;background:#ecfdf5;border-radius:8px;font-weight:700;color:var(--g)">✅ 正确做法：通分（统一成12等份）</div>
<div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-top:8px">
  <div style="text-align:center">
    <div style="display:flex;gap:2px">${[1,2,3,4,5,6,7,8,9,10,11,12].map(i=>`<div style="width:16px;height:28px;background:${i<=4?'#4f46e5':'#e2e8f0'};border-radius:3px"></div>`).join('')}</div>
    <div style="font-size:12px;margin-top:3px">1/3 = <strong>4/12</strong></div>
  </div>
  <div>+</div>
  <div style="text-align:center">
    <div style="display:flex;gap:2px">${[1,2,3,4,5,6,7,8,9,10,11,12].map(i=>`<div style="width:16px;height:28px;background:${i<=3?'#ef4444':'#e2e8f0'};border-radius:3px"></div>`).join('')}</div>
    <div style="font-size:12px;margin-top:3px">1/4 = <strong>3/12</strong></div>
  </div>
  <div>=</div>
  <div style="text-align:center">
    <div style="display:flex;gap:2px">${[1,2,3,4,5,6,7,8,9,10,11,12].map(i=>`<div style="width:16px;height:28px;background:${i<=7?'#7c3aed':'#e2e8f0'};border-radius:3px"></div>`).join('')}</div>
    <div style="font-size:12px;margin-top:3px;font-weight:700;color:var(--p)">= <strong>7/12</strong></div>
  </div>
</div>`
      },
      {
        title: '第3课：乘法——画格子秒懂',
        story: '1/2 × 1/3 = ？想象一块巧克力🍫：\n\n① 横着切1刀 → 2行，取1行 = 1/2\n② 竖着切2刀 → 3列，在蓝色里取1列\n\n巧克力变成 2×3=<strong>6小格</strong>，你拿了<strong>1格</strong> → 答案 <strong>1/6</strong>\n\n所以分子×分子(1×1=1)，分母×分母(2×3=6)。\n\n<strong>生活应用</strong>：超市打7折再打8折 = 0.7×0.8 = 0.56 = 打5.6折！',
        keyPoints: ['a/b × c/d = (a×c)/(b×d)', '画格子法：横切×竖切=总格数，选中区域=分子之积', '"的"就是"乘"：1/2的1/3 = 1/2 × 1/3', '乘以<1的数→结果变小'],
        visual: `<div style="font-weight:700;margin-bottom:12px;color:var(--p)">🖼️ 画格子法理解 1/2 × 1/3</div>
<div style="display:flex;gap:16px;align-items:flex-start;flex-wrap:wrap">
  <div>
    <div style="font-size:12px;color:var(--text2);margin-bottom:4px">① 横切：取1/2（上面1行蓝色）</div>
    <div style="display:grid;grid-template-columns:repeat(3,48px);gap:3px">
      ${['蓝','蓝','蓝','白','白','白'].map((c,i)=>`<div style="height:40px;background:${c==='蓝'?'#bfdbfe':'#f1f5f9'};border-radius:4px;border:1px solid #e2e8f0"></div>`).join('')}
    </div>
  </div>
  <div style="font-size:24px;padding-top:24px;color:var(--text2)">→</div>
  <div>
    <div style="font-size:12px;color:var(--text2);margin-bottom:4px">② 竖切：在蓝色里取1/3（左1列深色）</div>
    <div style="display:grid;grid-template-columns:repeat(3,48px);gap:3px">
      <div style="height:40px;background:#4f46e5;border-radius:4px;border:2px solid #312e81"></div>
      <div style="height:40px;background:#bfdbfe;border-radius:4px;border:1px solid #e2e8f0"></div>
      <div style="height:40px;background:#bfdbfe;border-radius:4px;border:1px solid #e2e8f0"></div>
      <div style="height:40px;background:#f1f5f9;border-radius:4px;border:1px solid #e2e8f0"></div>
      <div style="height:40px;background:#f1f5f9;border-radius:4px;border:1px solid #e2e8f0"></div>
      <div style="height:40px;background:#f1f5f9;border-radius:4px;border:1px solid #e2e8f0"></div>
    </div>
  </div>
</div>
<div style="margin-top:12px;padding:10px;background:var(--p3);border-radius:8px;font-size:14px">
  总格数 = 2行 × 3列 = <strong>6格</strong>（分母相乘）<br>
  深色格 = 1行 × 1列 = <strong>1格</strong>（分子相乘）<br>
  答案 = <strong style="color:var(--p);font-size:16px">1/6</strong>
</div>`
      },
      {
        title: '第4课：除法——为什么翻转相乘？',
        story: '3块披萨🍕，每盘放1/2块，能装几盘？\n\n3 ÷ 1/2 = ？每块切半，3块→6份 → <strong>6盘</strong>！\n\n3 ÷ 1/2 = 3 × 2 = 6\n\n<strong>原理</strong>：除以1/2 = "有几个1/2" = 每个整体里有2个1/2 → 乘以2',
        keyPoints: ['倒数：分子分母互换，如2/3↔3/2', '除以分数 = 乘以倒数', '口诀：除号变乘号，后面翻个身', '÷小于1的数→结果变大'],
        visual: `<div style="font-weight:700;margin-bottom:12px;color:var(--p)">🖼️ 图解：3 ÷ 1/2 = 6</div>
<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px">
  ${[1,2,3].map(i=>`<div style="display:flex;gap:3px"><div style="width:36px;height:52px;background:#4f46e5;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:700">${i}A</div><div style="width:36px;height:52px;background:#7c3aed;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:700">${i}B</div></div>`).join('<div style="font-size:20px;padding-top:12px;color:var(--text2)"> </div>')}
</div>
<div style="font-size:13px;color:var(--text2);margin-bottom:12px">每块披萨切成2份 → 3块变成 <strong>6份</strong> → 能装 <strong>6盘</strong></div>
<div style="padding:10px;background:#fffbeb;border-radius:8px;border-left:3px solid var(--o)">
  <div style="font-weight:700;margin-bottom:6px">步骤对比</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:13px">
    <div style="padding:8px;background:#fee2e2;border-radius:6px;text-align:center">
      <div style="color:var(--r);font-weight:700">❌ 错误</div>
      <div>3 ÷ 1/2 = 3/2</div>
      <div style="font-size:11px">直接套公式</div>
    </div>
    <div style="padding:8px;background:#dcfce7;border-radius:6px;text-align:center">
      <div style="color:var(--g);font-weight:700">✅ 正确</div>
      <div>3 ÷ 1/2 = 3 × <span style="text-decoration:underline;color:var(--p)">2/1</span> = 6</div>
      <div style="font-size:11px">翻转后相乘</div>
    </div>
  </div>
</div>`
      }
    ],
    practice: {
      basic: [
        { q: '3/8 + 2/8 = ?', options: ['5/16','5/8','1/8','6/8'], answer: 1, explain: '同分母→(3+2)/8=5/8' },
        { q: '1/2 + 1/3 = ?', options: ['2/5','5/6','1/5','3/6'], answer: 1, explain: '通分→3/6+2/6=5/6' },
        { q: '1/3 × 1/5 = ?', options: ['2/8','1/15','1/8','2/15'], answer: 1, explain: '(1×1)/(3×5)=1/15' },
        { q: '6 ÷ 1/3 = ?', options: ['2','18','6/3','1/2'], answer: 1, explain: '6×3=18' },
        { q: '把0.75变成分数是?', options: ['7/5','3/4','75/10','7/50'], answer: 1, explain: '0.75=75/100=3/4' }
      ],
      advanced: [
        { q: '2/3 × 3/4 × 4/5 = ?', options: ['24/60','2/5','1/3','6/12'], answer: 1, explain: '连续约分→2/5' },
        { q: '一杯果汁500ml倒出1/4后又喝了剩余的1/3，还剩多少ml？', options: ['250','200','375','125'], answer: 0, explain: '倒出后剩375, 喝375/3=125, 剩250' },
        { q: '3/4 ÷ 3/8 = ?', options: ['9/32','1/2','2','8/4'], answer: 2, explain: '3/4×8/3=2' }
      ],
      amc: [
        { q: '[2023 #1] (8×4+2)−(8+4×2) = ?', options: ['0','6','10','18','24'], answer: 3, explain: '先乘后加：34-16=18', year: 2023, num: 1 },
        { q: '[2023 #10] Harold吃1/4派，驼鹿吃剩余1/3，豪猪吃再剩余1/3。还剩?', options: ['1/12','1/6','1/4','1/3','5/12'], answer: 3, explain: '剩3/4→吃1/4剩1/2→吃1/6剩1/3', year: 2023, num: 10 },
        { q: '[2022 #8] (1/3)(2/4)(3/5)...(19/21)(20/22)=?', options: ['1/462','1/231','1/132','2/213','1/22'], answer: 1, explain: '消去后=2/(21×22)=1/231', year: 2022, num: 8 }
      ]
    }
  },
  {
    id: 'percent', name: '百分数应用', icon: '📊',
    theme: 'numbers', grade: '6年级', gradeNum: 6,
    amcFreq: 5, difficulty: '基础',
    desc: '折扣、利润率、浓度问题',
    realLife: '商场打折(8折=80%)、银行利息(年利率3%)、考试成绩(90分=90%)',
    examTips: '⚠️ AMC8常在文字题中隐含百分数',
    commonMistakes: [
      '❌ 涨20%再降20%回到原价 → ✅ 100×1.2×0.8=96，亏了！',
      '❌ 利润率=利润/售价 → ✅ 利润率=利润/成本'
    ],
    prereqs: ['fractions'],
    glossary: [
      { cn: '百分数', en: 'Percent / Percentage', pron: 'per-SENT' },
      { cn: '折扣', en: 'Discount', pron: 'DIS-count' },
      { cn: '利润', en: 'Profit', pron: 'PRAH-fit' },
      { cn: '成本', en: 'Cost', pron: '' },
      { cn: '售价', en: 'Selling Price', pron: '' },
      { cn: '利润率', en: 'Profit Margin', pron: '' },
      { cn: '浓度', en: 'Concentration', pron: '' }
    ],
    definitions: [
      { term: '百分数 (Percent)', def: '以100为基准的比率。25% = 25/100 = 0.25。"percent"源自拉丁语 per centum（每一百）。' },
      { term: '利润率 (Profit Margin)', def: '利润占成本的比例。利润率 = (售价-成本)/成本 × 100%。注意分母是成本不是售价。' }
    ],
    videosCn: [
      { title: '洋葱学园 - 百分数的认识(动画)', url: 'https://www.bilibili.com/video/BV1y5411c7fo/', searchUrl: 'https://search.bilibili.com/all?keyword=百分数+小学+动画讲解&order=click' },
      { title: '李永乐老师 - 折扣和利润率(生活数学)', url: 'https://www.bilibili.com/video/BV1UE411M7Gc/', searchUrl: 'https://search.bilibili.com/all?keyword=折扣+利润率+李永乐&order=click' }
    ],
    videosEn: [
      { title: 'Math Antics - What Are Percentages?', url: 'https://www.youtube.com/watch?v=JeVSmq1Nrpw' },
      { title: 'Math Antics - Finding A Percent Of A Number', url: 'https://www.youtube.com/watch?v=rR95Cbcjzus' }
    ],
    lessons: [
      { title: '百分数与生活', story: '商场写着"全场8折"——原价100元只要付80元！\n百分数就是"以100为分母的分数"：80% = 80/100 = 0.8', keyPoints: ['百分数=分母为100的分数','折扣：8折=×0.8','利润率=(售价-成本)/成本×100%'],
        visual: `<div style="font-weight:700;margin-bottom:12px;color:var(--p)">🖼️ 图解：百分数就是100格里取几格</div>
<div style="display:grid;grid-template-columns:repeat(10,1fr);gap:2px;max-width:220px">
  ${Array.from({length:100},(_,i)=>`<div style="aspect-ratio:1;background:${i<75?'#4f46e5':'#e2e8f0'};border-radius:2px"></div>`).join('')}
</div>
<div style="margin-top:8px;font-size:13px;color:var(--text2)">蓝色75格 = <strong style="color:var(--p)">75%</strong>（如考试75分）</div>
<div style="margin-top:12px;display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:13px">
  <div style="padding:8px;background:var(--p3);border-radius:8px;text-align:center"><div style="font-weight:700">8折</div><div>= 80% = ×0.8</div></div>
  <div style="padding:8px;background:#dcfce7;border-radius:8px;text-align:center"><div style="font-weight:700">利润率</div><div>= 利润/成本×100%</div></div>
</div>` }
    ],
    practice: {
      basic: [
        { q: '原价200元打7折多少钱？', options: ['140','160','70','130'], answer: 0, explain: '200×0.7=140' },
        { q: '成本80售价100，利润率？', options: ['20%','25%','80%','125%'], answer: 1, explain: '20/80=25%' }
      ],
      advanced: [
        { q: '商品涨25%再降20%，最终是原价的？', options: ['100%','105%','95%','同原价'], answer: 0, explain: '1.25×0.8=1.00' }
      ],
      amc: []
    }
  },
  // ===== 主题2: 数论 =====
  {
    id: 'divisibility', name: '因数/倍数/整除', icon: '🔢',
    theme: 'number_theory', grade: '5年级', gradeNum: 5,
    amcFreq: 10, difficulty: '基础',
    desc: '整除判断、GCD与LCM',
    realLife: '排座位(24人分几排?)、一小时为什么60分钟(60的因数特别多!)、齿轮啮合',
    examTips: '⚠️ AMC8最常考整除规则快速排除选项',
    commonMistakes: [
      '❌ GCD和LCM搞混 → ✅ GCD取小, LCM取大',
      '❌ 4的整除看末位 → ✅ 看末两位'
    ],
    prereqs: [],
    glossary: [
      { cn: '因数/因子', en: 'Factor / Divisor', pron: 'FAK-ter' },
      { cn: '倍数', en: 'Multiple', pron: 'MUL-tih-pul' },
      { cn: '整除', en: 'Divisible', pron: 'dih-VIZ-ih-bul' },
      { cn: '最大公因数', en: 'GCD (Greatest Common Divisor)', pron: '' },
      { cn: '最小公倍数', en: 'LCM (Least Common Multiple)', pron: '' },
      { cn: '余数', en: 'Remainder', pron: 'reh-MAIN-der' }
    ],
    definitions: [
      { term: '因数 (Factor)', def: '如果 a÷b 没有余数，则 b 是 a 的因数。如 3 是 12 的因数，因为 12÷3=4。' },
      { term: '倍数 (Multiple)', def: '一个数乘以任意正整数的结果。如 12 是 3 的倍数(3×4=12)。' },
      { term: 'GCD 最大公因数', def: '两个数共有因数中最大的那个。如 GCD(12,18)=6。' },
      { term: 'LCM 最小公倍数', def: '两个数共有倍数中最小的那个。如 LCM(4,6)=12。' }
    ],
    videosCn: [
      { title: '乐乐课堂 - 因数和倍数(动画3分钟)', url: 'https://www.bilibili.com/video/BV1Vb411H7cS/', searchUrl: 'https://search.bilibili.com/all?keyword=因数倍数+小学+动画&order=click' },
      { title: '整除判断技巧大全(2/3/4/5/8/9/11)', url: 'https://www.bilibili.com/video/BV1gJ411D7cN/', searchUrl: 'https://search.bilibili.com/all?keyword=整除判断规则+技巧+小学&order=click' },
      { title: '最大公因数和最小公倍数(动画)', url: 'https://www.bilibili.com/video/BV1WE411A7fK/', searchUrl: 'https://search.bilibili.com/all?keyword=最大公因数+最小公倍数+动画讲解&order=click' }
    ],
    videosEn: [
      { title: 'Math Antics - Factors and Multiples', url: 'https://www.youtube.com/watch?v=vcn2ruTOwFo' },
      { title: 'Math Antics - Greatest Common Factor(GCF)', url: 'https://www.youtube.com/watch?v=JdME2jIG-ik' },
      { title: 'Khan Academy - Divisibility Rules', url: 'https://www.youtube.com/watch?v=M5VGKRTnfkE' }
    ],
    lessons: [
      { title: '因数和倍数', story: '12个糖果分人：1×12, 2×6, 3×4... 这些1,2,3,4,6,12就是12的<strong>因数</strong>。\n\n为什么一小时60分钟？因为60的因数特别多！方便分成2份、3份、4份、5份、6份...', keyPoints: ['a÷b=整数 → b是a的因数','整除口诀: 2看末位, 3看各位和, 5看末位0/5','GCD=最大公因数, LCM=最小公倍数'],
        visual: `<div style="font-weight:700;margin-bottom:12px;color:var(--p)">🖼️ 整除规则速查卡</div>
<div style="display:flex;flex-direction:column;gap:6px;font-size:13px">
  ${[['÷2','末位是偶数(0,2,4,6,8)','如 34✓ 35✗','#dbeafe'],['÷3','各位数字之和能被3整除','如 372: 3+7+2=12✓','#dcfce7'],['÷4','末两位能被4整除','如 1324: 24÷4=6✓','#fef3c7'],['÷5','末位是0或5','如 35✓ 37✗','#fce7f3'],['÷9','各位数字之和能被9整除','如 729: 7+2+9=18✓','#ede9fe']].map(([rule,tip,ex,bg])=>`<div style="display:flex;align-items:center;gap:8px;padding:6px 10px;background:${bg};border-radius:8px"><span style="font-weight:800;font-size:15px;min-width:28px">${rule}</span><div><div style="font-weight:600">${tip}</div><div style="font-size:11px;color:var(--text2)">${ex}</div></div></div>`).join('')}
</div>` },
      { title: '整除判断规则详解', story: '怎么快速判断372能不能被3整除？\n\n把各位数字加起来：3+7+2=12→12÷3=4→能整除！\n\n为什么有效？因为10÷3余1, 100÷3余1...所以372和3+7+2除以3余数相同！', keyPoints: ['2:末位偶数','3:各位和÷3','4:末两位÷4','9:各位和÷9','11:奇位和-偶位和÷11'],
        visual: `<div style="font-weight:700;margin-bottom:12px;color:var(--p)">🖼️ GCD与LCM的区别</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
  <div style="padding:12px;background:#dbeafe;border-radius:8px;text-align:center">
    <div style="font-size:20px;font-weight:800;color:#1e40af">GCD</div>
    <div style="font-size:12px;color:#1e40af;margin-bottom:8px">最大公因数</div>
    <div style="font-size:13px">GCD(12,18)=<strong>6</strong></div>
    <div style="font-size:11px;color:var(--text2);margin-top:4px">12=2²×3<br>18=2×3²<br>公共部分: 2×3=6</div>
  </div>
  <div style="padding:12px;background:#dcfce7;border-radius:8px;text-align:center">
    <div style="font-size:20px;font-weight:800;color:#166534">LCM</div>
    <div style="font-size:12px;color:#166534;margin-bottom:8px">最小公倍数</div>
    <div style="font-size:13px">LCM(4,6)=<strong>12</strong></div>
    <div style="font-size:11px;color:var(--text2);margin-top:4px">4=2²<br>6=2×3<br>所有因子: 2²×3=12</div>
  </div>
</div>
<div style="margin-top:8px;padding:8px;background:var(--p3);border-radius:8px;font-size:13px;text-align:center"><strong>GCD × LCM = 两数之积</strong><br><span style="font-size:11px">如 GCD(4,6)×LCM(4,6) = 2×12 = 24 = 4×6 ✓</span></div>` }
    ],
    practice: {
      basic: [
        { q: '哪个数能同时被2和3整除？', options: ['35','42','44','55'], answer: 1, explain: '42偶数(÷2✓)，4+2=6(÷3✓)' },
        { q: '18的因数有几个？', options: ['4','5','6','8'], answer: 2, explain: '1,2,3,6,9,18共6个' },
        { q: 'GCD(20,30)=?', options: ['5','10','15','60'], answer: 1, explain: '10' },
        { q: 'LCM(6,8)=?', options: ['14','24','48','2'], answer: 1, explain: '24' }
      ],
      advanced: [
        { q: '100以内同时是4和6的倍数有几个？', options: ['8','16','12','4'], answer: 0, explain: 'LCM=12, 100÷12=8余4→8个' }
      ],
      amc: [
        { q: '[2025 #6] 15,16,17,18,19擦一个使剩余和被4整除', options: ['15','16','17','18','19'], answer: 2, explain: '85-17=68=4×17', year: 2025, num: 6 }
      ]
    }
  },
  {
    id: 'primes', name: '质数与质因数分解', icon: '💎',
    theme: 'number_theory', grade: '5年级', gradeNum: 5,
    amcFreq: 7, difficulty: '中等',
    desc: '质数判定、分解质因数',
    realLife: '密码学(RSA加密基于大质数!)、蝉的13/17年周期(质数避免天敌)、条形码校验',
    examTips: '⚠️ AMC8难题常考完全平方数的质因数特征',
    commonMistakes: [
      '❌ 1是质数 → ✅ 1不是质数也不是合数',
      '❌ 51是质数 → ✅ 51=3×17'
    ],
    prereqs: ['divisibility'],
    glossary: [
      { cn: '质数/素数', en: 'Prime Number', pron: 'PRYME' },
      { cn: '合数', en: 'Composite Number', pron: 'kum-PAH-zit' },
      { cn: '质因数分解', en: 'Prime Factorization', pron: '' },
      { cn: '完全平方数', en: 'Perfect Square', pron: '' },
      { cn: '互质', en: 'Coprime / Relatively Prime', pron: '' }
    ],
    definitions: [
      { term: '质数 (Prime)', def: '大于1且只能被1和自身整除的正整数。最小的质数是2，也是唯一的偶数质数。' },
      { term: '合数 (Composite)', def: '大于1且有两个以上因数的正整数。如4=2×2。注意1既不是质数也不是合数。' },
      { term: '质因数分解 (Prime Factorization)', def: '把一个合数写成质数乘积的形式。如 60=2²×3×5。每个合数的分解方式唯一(唯一分解定理)。' }
    ],
    videosCn: [
      { title: '李永乐 - 质数有什么用？(RSA加密)', url: 'https://www.bilibili.com/video/BV1V4411U7sN/', searchUrl: 'https://search.bilibili.com/all?keyword=质数+用途+RSA加密+李永乐&order=click' },
      { title: '妈咪说 - 蝉为什么选质数年份繁殖？', url: 'https://www.bilibili.com/video/BV1Mx411G7kR/', searchUrl: 'https://search.bilibili.com/all?keyword=蝉+质数+周期+生物数学&order=click' },
      { title: '质因数分解方法详解(小学奥数)', url: 'https://www.bilibili.com/video/BV1gE411T7NC/', searchUrl: 'https://search.bilibili.com/all?keyword=质因数分解+小学奥数+方法&order=click' }
    ],
    videosEn: [
      { title: 'Math Antics - Prime Factorization', url: 'https://www.youtube.com/watch?v=ZKhRkxB_NG0' },
      { title: 'Numberphile - Primes are like atoms', url: 'https://www.youtube.com/watch?v=M7kEpw1tn50' }
    ],
    lessons: [
      { title: '质数——数学的原子', story: '万物由原子构成，所有整数由质数"拼"出来！\n\n60 = 2²×3×5\n\n100以内25个质数要背熟：2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97', keyPoints: ['质数：只有1和自身两个因数','2是唯一偶数质数','质因数分解：写成质数乘积','判质：试除到√n'],
        visual: `<div style="font-weight:700;margin-bottom:10px;color:var(--p)">🖼️ 100以内质数筛（蓝色=质数，共25个）</div>
<div style="display:grid;grid-template-columns:repeat(10,1fr);gap:2px;font-size:11px">
  ${Array.from({length:100},(_,i)=>{const n=i+1;const primes=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];const isPrime=primes.includes(n);const isOne=n===1;return `<div style="aspect-ratio:1;background:${isPrime?'#4f46e5':isOne?'#fef3c7':'#f1f5f9'};border-radius:3px;display:flex;align-items:center;justify-content:center;color:${isPrime?'#fff':isOne?'#92400e':'#94a3b8'};font-weight:${isPrime?'700':'400'}">${n}</div>`;}).join('')}
</div>
<div style="margin-top:8px;font-size:12px;color:var(--text2)"><span style="display:inline-block;width:12px;height:12px;background:#4f46e5;border-radius:2px;margin-right:4px;vertical-align:middle"></span>质数（25个）&nbsp;&nbsp;<span style="display:inline-block;width:12px;height:12px;background:#fef3c7;border-radius:2px;margin-right:4px;vertical-align:middle"></span>1（特殊，不是质数也不是合数）</div>
<div style="margin-top:10px;padding:8px;background:#fffbeb;border-radius:8px;font-size:13px"><strong>质因数分解例子：</strong><br>60 = 2 × 30 = 2 × 2 × 15 = 2 × 2 × 3 × 5 = <strong style="color:var(--p)">2² × 3 × 5</strong></div>` }
    ],
    practice: {
      basic: [
        { q: '哪个是质数？', options: ['39','51','57','59'], answer: 3, explain: '59只被1和59整除' },
        { q: '84分解质因数?', options: ['2²×3×7','2×3²×7','2²×21','4×21'], answer: 0, explain: '84=2²×3×7' }
      ],
      advanced: [
        { q: '完全平方数末位不可能是？', options: ['4','5','6','8'], answer: 3, explain: '末位只能是0,1,4,5,6,9' }
      ],
      amc: [
        { q: '[2025 #23] 四位数末两位99,差1是完全平方,恰两个质因数,有几个?', options: ['0','1','2','3','4'], answer: 1, explain: '只有3599=59×61', year: 2025, num: 23 }
      ]
    }
  },
  {
    id: 'number_tricks', name: '数论技巧', icon: '🧩',
    theme: 'number_theory', grade: '竞赛', gradeNum: 8,
    amcFreq: 4, difficulty: '困难',
    desc: '奇偶分析、尾数规律、余数',
    realLife: '条形码/身份证校验码(用余数检测错误)、奥运年份都是偶数',
    examTips: '⚠️ AMC8后5题常用尾数分析和奇偶分析快速排除',
    commonMistakes: ['❌ 2的幂次尾数无规律 → ✅ 2,4,8,6循环(周期4)'],
    prereqs: ['primes'],
    glossary: [{ cn: '奇数', en: 'Odd Number', pron: '' },{ cn: '偶数', en: 'Even Number', pron: '' },{ cn: '尾数/末位', en: 'Units Digit / Last Digit', pron: '' },{ cn: '余数', en: 'Remainder', pron: '' },{ cn: '周期', en: 'Period / Cycle', pron: '' }],
    definitions: [
      { term: '奇偶性 (Parity)', def: '整数分为奇数(不能被2整除)和偶数(能被2整除)。奇偶分析可快速排除不可能的答案。' },
      { term: '尾数规律', def: '一个数的幂次的个位数字会周期性重复。如2的幂次尾数：2,4,8,6,2,4,8,6...周期为4。' }
    ],
    videosCn: [
      { title: '奇偶性分析秒解难题(竞赛技巧)', url: 'https://www.bilibili.com/video/BV1VE411n7uh/', searchUrl: 'https://search.bilibili.com/all?keyword=奇偶性+数学竞赛+技巧&order=click' },
      { title: '尾数规律与周期(幂次末位数)', url: 'https://www.bilibili.com/video/BV1CE411F7nP/', searchUrl: 'https://search.bilibili.com/all?keyword=尾数规律+幂次+末位数字&order=click' }
    ],
    videosEn: [
      { title: 'Art of Problem Solving - Parity', url: 'https://www.youtube.com/watch?v=ycLqNjBRnOU' }
    ],
    lessons: [
      { title: '奇偶分析与尾数', story: '奇+奇=偶, 奇×奇=奇, 有偶因子→结果偶\n\n2的幂次尾数：2→4→8→6→2→4...(周期4)', keyPoints: ['奇偶分析快速排除','尾数周期性','完全平方尾数只能0,1,4,5,6,9'],
        visual: `<div style="font-weight:700;margin-bottom:10px;color:var(--p)">🖼️ 奇偶规律速查</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:13px;margin-bottom:12px">
  ${[['奇+奇','偶','#dcfce7'],['奇+偶','奇','#fef3c7'],['偶+偶','偶','#dcfce7'],['奇×奇','奇','#fef3c7'],['奇×偶','偶','#dcfce7'],['偶×偶','偶','#dcfce7']].map(([op,res,bg])=>`<div style="padding:6px 10px;background:${bg};border-radius:6px;display:flex;justify-content:space-between"><span>${op}</span><strong>=&nbsp;${res}</strong></div>`).join('')}
</div>
<div style="font-weight:700;margin-bottom:8px;color:var(--p)">🖼️ 尾数周期表</div>
<div style="overflow-x:auto"><table style="font-size:12px;border-collapse:collapse;width:100%">
<tr style="background:var(--p);color:#fff">${['底数','1次','2次','3次','4次','5次(回到起点)'].map(h=>`<th style="padding:4px 8px">${h}</th>`).join('')}</tr>
${[[2,'2','4','8','6','2↻'],[3,'3','9','7','1','3↻'],[7,'7','9','3','1','7↻'],[8,'8','4','2','6','8↻']].map(([base,...vals])=>`<tr>${[base,...vals].map((v,i)=>`<td style="padding:4px 8px;text-align:center;background:${i===0?'var(--bg)':i===5?'var(--p3)':'#fff'};border:1px solid var(--border);font-weight:${i===0||i===5?'700':'400'}">${v}</td>`).join('')}</tr>`).join('')}
</table></div>` }
    ],
    practice: {
      basic: [{ q: '奇+奇+奇=?', options: ['一定奇','一定偶','不确定','0'], answer: 0, explain: '奇+奇=偶,偶+奇=奇' }],
      advanced: [],
      amc: [
        { q: '[2022 #17] 2!!+4!!+...+2022!!个位数字?', options: ['0','2','4','6','8'], answer: 1, explain: '只有前4项非零尾数：2+8+8+4=22→尾2', year: 2022, num: 17 }
      ]
    }
  },
  // ===== 主题3: 代数 =====
  {
    id: 'ratio', name: '比与比例', icon: '⚖️',
    theme: 'algebra', grade: '5-6年级', gradeNum: 5,
    amcFreq: 10, difficulty: '基础',
    desc: '比例应用、按比分配',
    realLife: '配料比例(茶:奶=2:3)、地图比例尺(1:50000)、调颜色',
    examTips: '⚠️ AMC8超高频！捕获再捕获法几乎每年考',
    commonMistakes: ['❌ 3:5中3占3/5 → ✅ 占3/8'],
    prereqs: ['fractions'],
    glossary: [{ cn: '比', en: 'Ratio', pron: 'RAY-shee-oh' },{ cn: '比例', en: 'Proportion', pron: 'pruh-POR-shun' },{ cn: '按比分配', en: 'Proportional Distribution', pron: '' },{ cn: '比例尺', en: 'Scale', pron: '' }],
    definitions: [
      { term: '比 (Ratio)', def: '两个量的相对大小关系。a:b 表示每有a份第一种就有b份第二种。3:5 = 3/5。' },
      { term: '比例 (Proportion)', def: '两个比相等的等式。a:b = c:d，等价于 ad = bc（交叉相乘）。' }
    ],
    videosCn: [
      { title: '乐乐课堂 - 比和比例(动画)', url: 'https://www.bilibili.com/video/BV1R54y1Q7La/', searchUrl: 'https://search.bilibili.com/all?keyword=比和比例+小学+动画讲解&order=click' },
      { title: '按比例分配应用题详解', url: 'https://www.bilibili.com/video/BV1rE411c7XT/', searchUrl: 'https://search.bilibili.com/all?keyword=按比例分配+应用题+小学&order=click' }
    ],
    videosEn: [
      { title: 'Math Antics - Ratios and Rates', url: 'https://www.youtube.com/watch?v=USmit5zUGas' },
      { title: 'Math Antics - Proportions', url: 'https://www.youtube.com/watch?v=USmit5zUGas' }
    ],
    lessons: [
      { title: '比例的魔力', story: '做奶茶🧋：茶:奶=2:3。200ml茶需要多少奶？\n2:3=200:x → x=300ml\n\n<strong>捕获再捕获法</strong>：抓鱼标记放回→再抓→按比例估计总数', keyPoints: ['比a:b=分数a/b','交叉相乘:a:b=c:d→ad=bc','按比分配:总量×份数/总份数'],
        visual: `<div style="font-weight:700;margin-bottom:12px;color:var(--p)">🖼️ 比例的天平模型</div>
<div style="text-align:center;margin-bottom:12px">
  <div style="display:flex;justify-content:center;align-items:flex-end;gap:0">
    <div style="width:80px;height:60px;background:#dbeafe;border-radius:8px 0 0 8px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#1e40af;font-size:18px">a</div>
    <div style="width:4px;height:60px;background:#4f46e5"></div>
    <div style="width:80px;height:60px;background:#dcfce7;border-radius:0 8px 8px 0;display:flex;align-items:center;justify-content:center;font-weight:700;color:#166534;font-size:18px">b</div>
  </div>
  <div style="width:164px;height:8px;background:var(--p);margin:0 auto;border-radius:2px"></div>
  <div style="width:4px;height:20px;background:var(--p);margin:0 auto"></div>
  <div style="font-size:12px;color:var(--text2)">a : b = 左 : 右</div>
</div>
<div style="padding:10px;background:#fffbeb;border-radius:8px;font-size:13px">
  <strong>交叉相乘法：</strong><br>
  a : b = c : d<br>
  ↓<br>
  <strong style="color:var(--p)">a × d = b × c</strong><br>
  <span style="font-size:11px;color:var(--text2)">例：2:3 = x:9 → 3x = 18 → x = 6</span>
</div>` }
    ],
    practice: {
      basic: [
        { q: '1:4混合500ml需几ml果汁?', options: ['50','100','125','200'], answer: 1, explain: '500×1/5=100' },
        { q: '甲乙丙分奖比2:3:5,丙比甲多600,总奖金?', options: ['1000','1500','2000','3000'], answer: 2, explain: '差3份=600→1份200→总2000' }
      ],
      advanced: [{ q: '长宽比5:3周长48,面积?', options: ['135','180','108','96'], answer: 0, explain: '15×9=135' }],
      amc: [
        { q: '[2023 #5] 湖中250鳟鱼,捕180中30是鳟鱼,总鱼数?', options: ['1250','1500','1750','1800','2000'], answer: 1, explain: '250/(30/180)=1500', year: 2023, num: 5 },
        { q: '[2025 #3] 4人每人15张牌,6人每人几张?', options: ['8','9','10','11','12'], answer: 2, explain: '60÷6=10', year: 2025, num: 3 }
      ]
    }
  },
  {
    id: 'equations', name: '方程与应用题', icon: '🔍',
    theme: 'algebra', grade: '6年级', gradeNum: 6,
    amcFreq: 9, difficulty: '中等',
    desc: '列方程解应用题',
    realLife: '旅行预算规划、推算年龄、配平化学方程',
    examTips: '⚠️ 关键三步：①设x ②找等量关系 ③解方程',
    commonMistakes: ['❌ 移项不变号 → ✅ 移过去要变号','❌ "比A多3"写成A-3 → ✅ 是A+3'],
    prereqs: ['fractions','ratio'],
    glossary: [{ cn: '方程', en: 'Equation', pron: 'ih-KWAY-zhun' },{ cn: '未知数', en: 'Unknown / Variable', pron: '' },{ cn: '解方程', en: 'Solve an Equation', pron: '' },{ cn: '等式', en: 'Equality', pron: '' },{ cn: '移项', en: 'Transpose', pron: '' }],
    definitions: [
      { term: '方程 (Equation)', def: '含有未知数的等式。如 3x+7=22。解方程就是找到使等式成立的未知数的值。' },
      { term: '解 (Solution)', def: '使方程成立的未知数的值。如 3x+7=22 的解是 x=5。' }
    ],
    videosCn: [
      { title: '洋葱学园 - 一元一次方程(动画入门)', url: 'https://www.bilibili.com/video/BV1R54y1Q7tf/', searchUrl: 'https://search.bilibili.com/all?keyword=一元一次方程+小学+动画&order=click' },
      { title: '鸡兔同笼问题详解(经典应用题)', url: 'https://www.bilibili.com/video/BV1fx411v7WZ/', searchUrl: 'https://search.bilibili.com/all?keyword=鸡兔同笼+列方程+小学&order=click' }
    ],
    videosEn: [
      { title: 'Math Antics - Solving Basic Equations', url: 'https://www.youtube.com/watch?v=Qyd_v3DGzTM' },
      { title: 'Khan Academy - One-step Equations', url: 'https://www.youtube.com/watch?v=kbqO0YTUyAY' }
    ],
    lessons: [
      { title: '方程——找到未知数', story: '方程像天平⚖️：左=右。找让天平平衡的x。', keyPoints: ['等式两边同时加减乘除','移项变号','三步：设x→找等量→解'],
        visual: `<div style="font-weight:700;margin-bottom:12px;color:var(--p)">🖼️ 天平模型：方程就是保持平衡</div>
<div style="display:flex;justify-content:center;align-items:center;gap:0;margin-bottom:8px">
  <div style="display:flex;flex-direction:column;align-items:center">
    <div style="display:flex;gap:6px;margin-bottom:4px">
      <div style="width:40px;height:40px;background:#4f46e5;border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700">3x</div>
      <div style="width:40px;height:40px;background:#7c3aed;border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700">+7</div>
    </div>
    <div style="width:86px;height:6px;background:#4f46e5;border-radius:2px"></div>
  </div>
  <div style="font-size:24px;font-weight:700;padding:0 12px;color:var(--p)">=</div>
  <div style="display:flex;flex-direction:column;align-items:center">
    <div style="margin-bottom:4px">
      <div style="width:40px;height:40px;background:#10b981;border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700">22</div>
    </div>
    <div style="width:40px;height:6px;background:#10b981;border-radius:2px"></div>
  </div>
</div>
<div style="padding:10px;background:#ecfdf5;border-radius:8px;font-size:13px">
  <strong>解题步骤：</strong><br>
  3x + 7 = 22<br>
  3x = 22 - 7 &nbsp;&nbsp;<span style="color:var(--text2)">（两边同减7）</span><br>
  3x = 15<br>
  x = 15 ÷ 3 &nbsp;&nbsp;&nbsp;<span style="color:var(--text2)">（两边同除3）</span><br>
  <strong style="color:var(--g)">x = 5 ✓</strong>
</div>` }
    ],
    practice: {
      basic: [
        { q: '3x+7=22, x=?', options: ['3','5','7','15'], answer: 1, explain: 'x=5' },
        { q: '一个数3倍减4等于2倍加6,这个数?', options: ['10','8','2','6'], answer: 0, explain: 'x=10' }
      ],
      advanced: [{ q: '鸡兔同笼头35脚94,兔几只?', options: ['10','12','14','16'], answer: 1, explain: '4x+2(35-x)=94→x=12' }],
      amc: [
        { q: '[2022 #5] Bella 5年前6岁收到新生猫,今天三者年龄和30,Anna比Bella大?', options: ['1','2','3','4','5'], answer: 2, explain: 'Bella11猫5→Anna14→差3', year: 2022, num: 5 },
        { q: '[2022 #11] 意面咬9次变10段剩17寸,原来多长?', options: ['34','38','41','44','47'], answer: 3, explain: '17+27=44', year: 2022, num: 11 }
      ]
    }
  },
  {
    id: 'sequences', name: '数列与规律', icon: '🔗',
    theme: 'algebra', grade: '7年级', gradeNum: 7,
    amcFreq: 5, difficulty: '中等',
    desc: '等差数列、高斯求和、找规律',
    realLife: '存钱计划(每周多存5元)、楼梯台阶、日历规律(每周+7)',
    examTips: '⚠️ 高斯求和公式几乎每年都用到',
    commonMistakes: ['❌ 第n项忘减1→aₙ=a₁+(n-1)d不是+nd'],
    prereqs: ['equations'],
    glossary: [{ cn: '数列', en: 'Sequence', pron: 'SEE-kwens' },{ cn: '等差数列', en: 'Arithmetic Sequence', pron: '' },{ cn: '公差', en: 'Common Difference', pron: '' },{ cn: '通项公式', en: 'General Term Formula', pron: '' },{ cn: '求和', en: 'Sum / Summation', pron: '' }],
    definitions: [
      { term: '等差数列 (Arithmetic Sequence)', def: '每相邻两项的差(公差d)相同的数列。如 2,5,8,11... 公差d=3。' },
      { term: '高斯求和', def: '1+2+3+...+n = n(n+1)/2。发现者高斯10岁时用"首尾配对法"秒算出 1+2+...+100=5050。' }
    ],
    videosCn: [
      { title: '高斯的故事：10岁秒算1+2+...+100', url: 'https://www.bilibili.com/video/BV1xE411N7HS/', searchUrl: 'https://search.bilibili.com/all?keyword=高斯求和+故事+数学&order=click' },
      { title: '等差数列求和(小学奥数)', url: 'https://www.bilibili.com/video/BV1PE411A7Fv/', searchUrl: 'https://search.bilibili.com/all?keyword=等差数列求和+小学奥数&order=click' }
    ],
    videosEn: [
      { title: 'Math Antics - Arithmetic Sequences', url: 'https://www.youtube.com/watch?v=dSmSrLmCGOw' },
      { title: 'Khan Academy - Sum of Arithmetic Series', url: 'https://www.youtube.com/watch?v=Dj1JZIdIwwo' }
    ],
    lessons: [
      { title: '数列——数字的规律', story: '1,3,5,7,9...每个+2！高斯10岁时秒算1+2+...+100=<strong>5050</strong>: 首尾配对(1+100)×50=5050', keyPoints: ['通项aₙ=a₁+(n-1)d','求和S=n(a₁+aₙ)/2','高斯: 1+2+...+n=n(n+1)/2'],
        visual: `<div style="font-weight:700;margin-bottom:12px;color:var(--p)">🖼️ 高斯配对法图解：1+2+...+100</div>
<div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:8px">
  ${[[1,100],[2,99],[3,98],[4,97],[5,96]].map(([a,b])=>`<div style="display:flex;align-items:center;gap:3px;padding:4px 8px;background:var(--p3);border-radius:20px;font-size:12px"><span style="color:var(--p);font-weight:700">${a}</span><span>+</span><span style="color:var(--p);font-weight:700">${b}</span><span style="color:var(--g);font-weight:700">=101</span></div>`).join('')}
  <div style="padding:4px 8px;background:#f1f5f9;border-radius:20px;font-size:12px;color:var(--text2)">... 共50对</div>
</div>
<div style="padding:10px;background:#ecfdf5;border-radius:8px;font-size:13px">
  每对和 = 101<br>
  共 50 对<br>
  <strong style="color:var(--g)">总和 = 101 × 50 = 5050 ✓</strong>
</div>
<div style="margin-top:8px;padding:8px;background:var(--p3);border-radius:8px;font-size:13px;text-align:center">
  <strong>公式：S = (首项 + 末项) × 项数 ÷ 2</strong>
</div>` }
    ],
    practice: {
      basic: [
        { q: '2,5,8,11,...第10项?', options: ['29','32','27','26'], answer: 0, explain: '2+9×3=29' },
        { q: '1+2+...+100=?', options: ['5000','5050','5100','10100'], answer: 1, explain: '5050' }
      ],
      advanced: [],
      amc: [
        { q: '[2022 #6] 三个等距正整数中间15,最大=4×最小,最小?', options: ['4','5','6','7','8'], answer: 2, explain: 'a=6', year: 2022, num: 6 },
        { q: '[2022 #9] 212°F水在68°F室温冷却,温差每5分钟减半,15分钟后?', options: ['77','86','92','98','104'], answer: 1, explain: '68+18=86', year: 2022, num: 9 }
      ]
    }
  },
  {
    id: 'speed', name: '行程问题', icon: '🚗',
    theme: 'algebra', grade: '5-6年级', gradeNum: 5,
    amcFreq: 7, difficulty: '中等',
    desc: '速度时间距离、相遇追及',
    realLife: '导航预估到达时间、跑步配速、飞机航速',
    examTips: '⚠️ AMC8行程题常给不同路段不同速度，画时间轴',
    commonMistakes: ['❌ 去回平均速度直接加÷2 → ✅ =总路程÷总时间'],
    prereqs: ['equations','ratio'],
    glossary: [{ cn: '速度', en: 'Speed / Rate', pron: '' },{ cn: '距离', en: 'Distance', pron: '' },{ cn: '时间', en: 'Time', pron: '' },{ cn: '相遇问题', en: 'Meeting Problem', pron: '' },{ cn: '追及问题', en: 'Catch-up Problem', pron: '' }],
    definitions: [
      { term: '速度 (Speed)', def: '单位时间内走过的距离。速度=距离÷时间。单位如 km/h(千米每小时)、m/s(米每秒)。' }
    ],
    videosCn: [
      { title: '行程问题三大类型(相遇/追及/流水)', url: 'https://www.bilibili.com/video/BV1hE411T7Sm/', searchUrl: 'https://search.bilibili.com/all?keyword=行程问题+相遇追及+小学&order=click' },
      { title: '生活中的速度计算', url: 'https://www.bilibili.com/video/BV1fE411w7cD/', searchUrl: 'https://search.bilibili.com/all?keyword=速度时间距离+生活数学&order=click' }
    ],
    videosEn: [
      { title: 'Math Antics - Distance, Rate and Time', url: 'https://www.youtube.com/watch?v=1UcCHNNsVaU' }
    ],
    lessons: [
      { title: '追上你——行程问题', story: '距离=速度×时间。相遇时间=距离÷速度和。追及时间=距离差÷速度差。', keyPoints: ['距离=速度×时间','相遇:÷速度和','追及:÷速度差'],
        visual: `<div style="font-weight:700;margin-bottom:12px;color:var(--p)">🖼️ 三种行程问题图解</div>
<div style="display:flex;flex-direction:column;gap:10px">
  <div style="padding:10px;background:#dbeafe;border-radius:8px">
    <div style="font-weight:700;color:#1e40af;margin-bottom:6px">① 相遇问题（相向而行）</div>
    <div style="display:flex;align-items:center;gap:0;font-size:13px">
      <div style="background:#1e40af;color:#fff;padding:4px 8px;border-radius:4px">甲→</div>
      <div style="flex:1;height:4px;background:repeating-linear-gradient(90deg,#93c5fd 0,#93c5fd 8px,transparent 8px,transparent 16px)"></div>
      <div style="background:#dc2626;color:#fff;padding:4px 8px;border-radius:4px">←乙</div>
    </div>
    <div style="font-size:12px;color:#1e40af;margin-top:4px">时间 = 距离 ÷ (甲速 + 乙速)</div>
  </div>
  <div style="padding:10px;background:#dcfce7;border-radius:8px">
    <div style="font-weight:700;color:#166534;margin-bottom:6px">② 追及问题（同向而行）</div>
    <div style="display:flex;align-items:center;gap:0;font-size:13px">
      <div style="background:#166534;color:#fff;padding:4px 8px;border-radius:4px">甲→</div>
      <div style="width:40px;height:4px;background:#86efac"></div>
      <div style="background:#16a34a;color:#fff;padding:4px 8px;border-radius:4px">乙→</div>
      <div style="flex:1;height:4px;background:repeating-linear-gradient(90deg,#86efac 0,#86efac 8px,transparent 8px,transparent 16px)"></div>
    </div>
    <div style="font-size:12px;color:#166534;margin-top:4px">时间 = 距离差 ÷ (甲速 - 乙速)</div>
  </div>
</div>` }
    ],
    practice: {
      basic: [
        { q: '60km/h开2小时走多远?', options: ['30','62','120','180'], answer: 2, explain: '120km' },
        { q: '甲乙相距100km相向,甲30乙20,几小时相遇?', options: ['2','5','3','4'], answer: 0, explain: '100÷50=2' }
      ],
      advanced: [],
      amc: [
        { q: '[2022 #7] 56kbps下载4.2MB约几分钟?(1MB=8000kb)', options: ['0.6','10','1800','7200','36000'], answer: 1, explain: '33600÷56÷60≈10', year: 2022, num: 7 },
        { q: '[2023 #11] NASA火星车6.5月飞2.93亿英里,时速约?', options: ['6000','12000','60000','120000','600000'], answer: 2, explain: '≈60000', year: 2023, num: 11 }
      ]
    }
  },
  // ===== 主题4: 几何 =====
  {
    id: 'area', name: '平面图形面积', icon: '📐',
    theme: 'geometry', grade: '4-5年级', gradeNum: 4,
    amcFreq: 12, difficulty: '基础',
    desc: '三角形/梯形/组合图形/割补法',
    realLife: '装修铺地砖、裁剪衣服布料、操场面积计算',
    examTips: '⚠️ AMC8面积题最常考割补法和数格子法',
    commonMistakes: ['❌ 三角形忘÷2','❌ 用斜边当高'],
    prereqs: [],
    glossary: [{ cn: '面积', en: 'Area', pron: 'AIR-ee-uh' },{ cn: '周长', en: 'Perimeter', pron: 'peh-RIM-eh-ter' },{ cn: '底', en: 'Base', pron: '' },{ cn: '高', en: 'Height', pron: '' },{ cn: '对角线', en: 'Diagonal', pron: '' },{ cn: '割补法', en: 'Cut-and-paste Method', pron: '' }],
    definitions: [
      { term: '面积 (Area)', def: '一个平面图形所覆盖区域的大小。单位是"平方XX"，如 cm²、m²。' },
      { term: '割补法', def: '通过"切割"和"拼补"把不规则图形变成规则图形来计算面积。AMC8最常用技巧之一。' }
    ],
    videosCn: [
      { title: '洋葱学园 - 三角形面积(为什么÷2)', url: 'https://www.bilibili.com/video/BV1U64y1c7h1/', searchUrl: 'https://search.bilibili.com/all?keyword=三角形面积公式+为什么除以2&order=click' },
      { title: '割补法求面积(小学奥数经典)', url: 'https://www.bilibili.com/video/BV1F7411x7Tt/', searchUrl: 'https://search.bilibili.com/all?keyword=割补法+面积+小学奥数&order=click' }
    ],
    videosEn: [
      { title: 'Math Antics - Area', url: 'https://www.youtube.com/watch?v=PF26xbR7OIQ' },
      { title: 'Khan Academy - Area of Triangles', url: 'https://www.youtube.com/watch?v=_JJFTMf5pRo' }
    ],
    lessons: [
      { title: '面积的本质', story: '面积="铺几个小方格"。长方形=长×宽。三角形=长方形一半！割补法：复杂图形=大图形-挖洞', keyPoints: ['长方形=长×宽','三角形=底×高÷2','梯形=(上底+下底)×高÷2','割补法'],
        visual: `<div style="font-weight:700;margin-bottom:12px;color:var(--p)">🖼️ 三角形 = 长方形的一半</div>
<div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;margin-bottom:12px">
  <div style="position:relative;width:120px;height:80px">
    <div style="position:absolute;inset:0;background:#dbeafe;border-radius:4px"></div>
    <div style="position:absolute;top:0;left:0;width:0;height:0;border-style:solid;border-width:0 0 80px 120px;border-color:transparent transparent #4f46e5 transparent"></div>
    <div style="position:absolute;bottom:4px;left:50%;transform:translateX(-50%);font-size:11px;color:#fff;font-weight:700">三角形</div>
  </div>
  <div style="font-size:20px;color:var(--text2)">=</div>
  <div style="display:flex;flex-direction:column;align-items:center">
    <div style="width:120px;height:80px;background:#dbeafe;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:13px;color:#1e40af;font-weight:700">长方形</div>
    <div style="font-size:12px;margin-top:4px">÷ 2</div>
  </div>
</div>
<div style="padding:10px;background:#fffbeb;border-radius:8px;font-size:13px">
  <strong>割补法示例：</strong><br>
  不规则图形 = 大正方形(10×10=100) - 4个角的三角形<br>
  每个角三角形面积 = 底×高÷2<br>
  <strong style="color:var(--g)">中间图形 = 100 - 4×(三角形面积)</strong>
</div>` }
    ],
    practice: {
      basic: [
        { q: '三角形底8高5面积?', options: ['40','20','13','30'], answer: 1, explain: '8×5÷2=20' },
        { q: '梯形上底3下底7高4面积?', options: ['40','20','14','28'], answer: 1, explain: '(3+7)×4÷2=20' }
      ],
      advanced: [{ q: '边10正方形内接旋转45°正方形(顶点在边中点)面积?', options: ['25','50','75','100'], answer: 1, explain: '对角线10→面积50' }],
      amc: []
    }
  },
  {
    id: 'circle', name: '圆', icon: '⭕',
    theme: 'geometry', grade: '6年级', gradeNum: 6,
    amcFreq: 6, difficulty: '中等',
    desc: '周长、面积、扇形、环形',
    realLife: '自行车轮一圈=周长、披萨大小比(面积)、钟表扇形',
    examTips: '⚠️ 常与正方形组合考"圆面积-内接图形"',
    commonMistakes: ['❌ 面积用直径→用半径!','❌ 半径×2面积×2→面积×4!'],
    prereqs: ['area'],
    glossary: [{ cn: '圆', en: 'Circle', pron: '' },{ cn: '半径', en: 'Radius', pron: 'RAY-dee-us' },{ cn: '直径', en: 'Diameter', pron: 'dy-AM-eh-ter' },{ cn: '圆周率', en: 'Pi (π)', pron: 'PIE' },{ cn: '扇形', en: 'Sector', pron: '' },{ cn: '弧', en: 'Arc', pron: '' },{ cn: '环形', en: 'Annulus / Ring', pron: '' }],
    definitions: [
      { term: '圆 (Circle)', def: '平面上到定点(圆心)距离等于定长(半径)的所有点的集合。' },
      { term: 'π (Pi)', def: '圆周长与直径的比值，约等于3.14159...是一个无限不循环小数(无理数)。' }
    ],
    videosCn: [
      { title: '3Blue1Brown - 圆面积为什么是πr²(中文)', url: 'https://www.bilibili.com/video/BV1Cx411m78Y/', searchUrl: 'https://search.bilibili.com/all?keyword=圆面积公式+推导+3blue1brown+中文&order=click' },
      { title: '洋葱学园 - 圆的面积(动画推导)', url: 'https://www.bilibili.com/video/BV1p64y1c7YE/', searchUrl: 'https://search.bilibili.com/all?keyword=圆的面积公式+动画推导+小学&order=click' }
    ],
    videosEn: [
      { title: '3Blue1Brown - But WHY is a circle\'s area πr²?', url: 'https://www.youtube.com/watch?v=YokKp3pwVFc' },
      { title: 'Math Antics - Circles, Circumference And Area', url: 'https://www.youtube.com/watch?v=O-cawByg2aA' }
    ],
    lessons: [
      { title: '完美的圆', story: '车轮🚲为何是圆的？每点到中心距离相等才平稳！\n\nπ≈3.14是周长与直径的比。面积πr²的由来：切成薄三角拼成长方形→长πr×宽r=πr²', keyPoints: ['C=2πr=πd','S=πr²','扇形=πr²×角度/360','环形=π(R²-r²)'],
        visual: `<div style="font-weight:700;margin-bottom:12px;color:var(--p)">🖼️ 为什么圆面积 = πr²？</div>
<div style="display:flex;flex-direction:column;gap:10px">
  <div style="padding:10px;background:#dbeafe;border-radius:8px;font-size:13px">
    <strong>切片拼矩形法：</strong><br>
    把圆切成很多很细的扇形片<br>
    ↓ 展开拼在一起<br>
    近似一个长方形：<br>
    • 长 = 半周长 = <strong>πr</strong><br>
    • 宽 = 半径 = <strong>r</strong><br>
    • 面积 = πr × r = <strong style="color:var(--p)">πr²</strong>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:13px">
    <div style="padding:8px;background:#dcfce7;border-radius:8px;text-align:center">
      <div style="font-weight:700">半径2的圆</div>
      <div>S = π×2² = <strong>4π ≈ 12.6</strong></div>
    </div>
    <div style="padding:8px;background:#fef3c7;border-radius:8px;text-align:center">
      <div style="font-weight:700">直径扩大2倍</div>
      <div>面积扩大 <strong>4倍！</strong></div>
    </div>
  </div>
</div>` }
    ],
    practice: {
      basic: [
        { q: '半径3圆面积?', options: ['6π','9π','3π','12π'], answer: 1, explain: 'π×9=9π' },
        { q: '大圆R4小圆r2,环形面积?', options: ['12π','8π','4π','16π'], answer: 0, explain: '16π-4π=12π' }
      ],
      advanced: [{ q: '正方形边4内切圆面积?', options: ['4π','8π','16π','2π'], answer: 0, explain: 'r=2→4π' }],
      amc: []
    }
  },
  {
    id: 'coordinates', name: '坐标几何', icon: '📍',
    theme: 'geometry', grade: '7年级', gradeNum: 7,
    amcFreq: 5, difficulty: '中等',
    desc: '坐标系、距离、面积',
    realLife: '手机地图定位(经纬度)、游戏角色位置、散点图',
    examTips: '⚠️ 常考网格上数面积和判断点在线上',
    commonMistakes: ['❌ 距离=x+y → ✅ =√(x²+y²)'],
    prereqs: ['area','equations'],
    glossary: [{ cn: '坐标', en: 'Coordinate', pron: 'koh-OR-dih-nit' },{ cn: '坐标系', en: 'Coordinate System', pron: '' },{ cn: '原点', en: 'Origin', pron: '' },{ cn: 'x轴', en: 'x-axis', pron: '' },{ cn: 'y轴', en: 'y-axis', pron: '' },{ cn: '象限', en: 'Quadrant', pron: '' }],
    definitions: [
      { term: '平面直角坐标系', def: '由两条互相垂直的数轴(x轴和y轴)组成，交点为原点(0,0)。平面上每个点用(x,y)唯一表示。' }
    ],
    videosCn: [
      { title: '平面直角坐标系入门(洋葱学园)', url: 'https://www.bilibili.com/video/BV1K7411n7FJ/', searchUrl: 'https://search.bilibili.com/all?keyword=平面直角坐标系+入门+初中&order=click' }
    ],
    videosEn: [
      { title: 'Math Antics - Graphing on the Coordinate Plane', url: 'https://www.youtube.com/watch?v=9Uc62CUSvLo' }
    ],
    lessons: [
      { title: '给点起地址', story: '(3,4)=右3上4。到原点距离=√(9+16)=5(勾股定理!)', keyPoints: ['坐标(x,y)','距离=√(Δx²+Δy²)','中点=(两x平均,两y平均)'],
        visual: `<div style="font-weight:700;margin-bottom:12px;color:var(--p)">🖼️ 坐标系：给每个点一个地址</div>
<div style="position:relative;width:100%;max-width:280px;height:200px;background:#f8fafc;border:1px solid var(--border);border-radius:8px;overflow:hidden">
  <div style="position:absolute;left:50%;top:0;bottom:0;width:1px;background:var(--text2);opacity:0.4"></div>
  <div style="position:absolute;top:50%;left:0;right:0;height:1px;background:var(--text2);opacity:0.4"></div>
  ${[[3,4,'#4f46e5','(3,4)'],[-2,3,'#10b981','(-2,3)'],[2,-3,'#ef4444','(2,-3)']].map(([x,y,color,label])=>`
  <div style="position:absolute;left:calc(50% + ${x*25}px - 6px);top:calc(50% - ${y*25}px - 6px);width:12px;height:12px;background:${color};border-radius:50%"></div>
  <div style="position:absolute;left:calc(50% + ${x*25}px + 8px);top:calc(50% - ${y*25}px - 8px);font-size:11px;color:${color};font-weight:700">${label}</div>`).join('')}
  <div style="position:absolute;right:4px;top:50%;transform:translateY(-50%);font-size:11px;color:var(--text2)">→x</div>
  <div style="position:absolute;left:50%;top:4px;transform:translateX(-50%);font-size:11px;color:var(--text2)">↑y</div>
</div>
<div style="margin-top:8px;padding:8px;background:#fffbeb;border-radius:8px;font-size:13px">
  点(3,4)到原点距离 = √(3²+4²) = √(9+16) = √25 = <strong style="color:var(--p)">5</strong>（勾股定理！）
</div>` }
    ],
    practice: {
      basic: [
        { q: '(3,4)到原点距离?', options: ['5','7','12','25'], answer: 0, explain: '√25=5' },
        { q: '(2,3)关于x轴对称?', options: ['(-2,3)','(2,-3)','(-2,-3)','(3,2)'], answer: 1, explain: 'y取反' }
      ],
      advanced: [],
      amc: [{ q: '[2022 #16] 四数相邻平均21,26,30,首尾平均?', options: ['24','25','26','27','28'], answer: 1, explain: '42+60-52=50→25', year: 2022, num: 16 }]
    }
  },
  // ===== 主题5: 计数与概率 =====
  {
    id: 'counting', name: '计数原理', icon: '🎯',
    theme: 'counting_prob', grade: '竞赛', gradeNum: 8,
    amcFreq: 8, difficulty: '困难',
    desc: '加法乘法原理、排列组合',
    realLife: '密码组合数(4位=10000种)、车牌号、抽奖',
    examTips: '⚠️ "然后"=乘法，"或者"=加法',
    commonMistakes: ['❌ 该乘用加','❌ 忽略不重复条件','❌ 有序无序搞混'],
    prereqs: ['divisibility'],
    glossary: [{ cn: '排列', en: 'Permutation', pron: 'per-myoo-TAY-shun' },{ cn: '组合', en: 'Combination', pron: 'kom-bih-NAY-shun' },{ cn: '阶乘', en: 'Factorial (!)', pron: 'fak-TOR-ee-ul' },{ cn: '加法原理', en: 'Addition Principle', pron: '' },{ cn: '乘法原理', en: 'Multiplication Principle', pron: '' },{ cn: '分类讨论', en: 'Case Analysis / Casework', pron: '' }],
    definitions: [
      { term: '加法原理', def: '完成一件事有多种互斥的方法，总方法数=各方法数之和。关键词："或者"。' },
      { term: '乘法原理', def: '完成一件事需要多个步骤，总方法数=各步方法数之积。关键词："然后"。' },
      { term: '排列 P(n,k)', def: '从n个不同元素中取k个并排序的方案数。P(n,k)=n!/(n-k)!。如5人选2人当正副班长=5×4=20。' },
      { term: '组合 C(n,k)', def: '从n个不同元素中取k个不排序的方案数。C(n,k)=n!/[k!(n-k)!]。如5人选2人组队=10。' }
    ],
    videosCn: [
      { title: '加法原理和乘法原理(动画讲解)', url: 'https://www.bilibili.com/video/BV1VE411G7M5/', searchUrl: 'https://search.bilibili.com/all?keyword=加法原理+乘法原理+计数+动画&order=click' },
      { title: '排列和组合的区别(一个视频搞懂)', url: 'https://www.bilibili.com/video/BV1J4411R7bF/', searchUrl: 'https://search.bilibili.com/all?keyword=排列组合+区别+初中数学&order=click' },
      { title: '李永乐 - 密码有多少种组合', url: 'https://www.bilibili.com/video/BV1Gb411v7V3/', searchUrl: 'https://search.bilibili.com/all?keyword=密码+组合数学+李永乐&order=click' }
    ],
    videosEn: [
      { title: 'Math Antics - Intro to Combinations', url: 'https://www.youtube.com/watch?v=iKy-d5_erhI' },
      { title: 'AoPS - Counting with Restrictions', url: 'https://www.youtube.com/watch?v=3ArQLJ7rzSM' }
    ],
    lessons: [
      { title: '有几种可能？', story: '🍦3口味×2容器=<strong>6种</strong>(乘法)\n去B或C: 2+3=<strong>5种</strong>(加法)\n\n"先...再..."→乘 | "...或者..."→加', keyPoints: ['乘法：连续步骤相乘','加法：互斥方法相加','P(n,k):有序','C(n,k):无序'],
        visual: `<div style="font-weight:700;margin-bottom:12px;color:var(--p)">🖼️ 树状图：3口味 × 2容器 = 6种搭配</div>
<div style="font-size:13px;overflow-x:auto">
  <div style="display:flex;gap:0;min-width:280px">
    <div style="display:flex;flex-direction:column;justify-content:center;padding-right:16px">
      <div style="padding:6px 12px;background:var(--p);color:#fff;border-radius:6px;font-weight:700;text-align:center">选口味</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:8px;padding-right:16px">
      ${['🍓草莓','🍫巧克力','🍦香草'].map(f=>`<div style="padding:5px 10px;background:var(--p3);border-radius:6px;font-weight:600">${f}</div>`).join('')}
    </div>
    <div style="display:flex;align-items:center;padding-right:8px;color:var(--text2);font-size:20px">×</div>
    <div style="display:flex;flex-direction:column;justify-content:center;padding-right:16px">
      <div style="padding:6px 12px;background:#10b981;color:#fff;border-radius:6px;font-weight:700;text-align:center">选容器</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${['🍦甜筒','🥤杯子'].map(c=>`<div style="padding:5px 10px;background:#dcfce7;border-radius:6px;font-weight:600">${c}</div>`).join('')}
    </div>
    <div style="display:flex;align-items:center;padding:0 8px;color:var(--text2);font-size:20px">=</div>
    <div style="display:flex;flex-direction:column;justify-content:center">
      <div style="padding:10px 16px;background:#fef3c7;border-radius:8px;font-size:20px;font-weight:800;color:#92400e">6种</div>
    </div>
  </div>
</div>
<div style="margin-top:10px;display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:12px">
  <div style="padding:8px;background:#dbeafe;border-radius:8px"><strong>乘法原理</strong><br>"然后" → 相乘<br>3 × 2 = 6</div>
  <div style="padding:8px;background:#dcfce7;border-radius:8px"><strong>加法原理</strong><br>"或者" → 相加<br>去B或C: 2+3=5</div>
</div>` }
    ],
    practice: {
      basic: [
        { q: '4上衣3裤子搭配?', options: ['7','12','24','10'], answer: 1, explain: '4×3=12' },
        { q: '1-9选2不同数字组两位数共几个?', options: ['72','81','36','18'], answer: 0, explain: '9×8=72' }
      ],
      advanced: [
        { q: '10人选3人组队?', options: ['720','120','30','1000'], answer: 1, explain: 'C(10,3)=120' },
        { q: 'BOOK排列几种?', options: ['24','12','6','4'], answer: 1, explain: '4!/2!=12' }
      ],
      amc: [
        { q: '[2025 #22] 35挂钩等距挂衣服有几种衣服数?', options: ['2','4','5','7','9'], answer: 3, explain: '7种', year: 2025, num: 22 }
      ]
    }
  },
  {
    id: 'inclusion_exclusion', name: '容斥原理', icon: '🔄',
    theme: 'counting_prob', grade: '竞赛', gradeNum: 8,
    amcFreq: 4, difficulty: '困难',
    desc: '集合交并补',
    realLife: '问卷调查(喜欢猫或狗?)、搜索引擎过滤',
    examTips: '⚠️ "至少一个"→容斥或补集',
    commonMistakes: ['❌ A或B=A+B → ✅ 要减去A且B'],
    prereqs: ['counting'],
    glossary: [{ cn: '容斥原理', en: 'Inclusion-Exclusion Principle', pron: '' },{ cn: '集合', en: 'Set', pron: '' },{ cn: '并集', en: 'Union (∪)', pron: '' },{ cn: '交集', en: 'Intersection (∩)', pron: '' },{ cn: '补集', en: 'Complement', pron: '' }],
    definitions: [
      { term: '容斥原理 (Inclusion-Exclusion)', def: '计算两个集合的并集大小：|A∪B|=|A|+|B|-|A∩B|。"加上的要减去重复的"。' }
    ],
    videosCn: [
      { title: '容斥原理(画圈圈秒懂)', url: 'https://www.bilibili.com/video/BV1AE411n7Kz/', searchUrl: 'https://search.bilibili.com/all?keyword=容斥原理+韦恩图+讲解&order=click' }
    ],
    videosEn: [
      { title: 'AoPS - Inclusion-Exclusion', url: 'https://www.youtube.com/watch?v=YQLUO-h6sSE' }
    ],
    lessons: [
      { title: '不要数重了！', story: '50人：游泳30骑车25都会15→至少一样30+25-15=40→都不会10', keyPoints: ['|A∪B|=|A|+|B|-|A∩B|','补集：都不=总-至少一个'],
        visual: `<div style="font-weight:700;margin-bottom:12px;color:var(--p)">🖼️ 韦恩图：容斥原理</div>
<div style="position:relative;height:120px;margin-bottom:8px">
  <div style="position:absolute;left:20px;top:10px;width:100px;height:100px;border:3px solid #4f46e5;border-radius:50%;background:rgba(79,70,229,0.15);display:flex;align-items:center;justify-content:center">
    <div style="position:absolute;left:18px;font-size:11px;font-weight:700;color:#4f46e5">游泳<br>30人</div>
  </div>
  <div style="position:absolute;right:20px;top:10px;width:100px;height:100px;border:3px solid #10b981;border-radius:50%;background:rgba(16,185,129,0.15);display:flex;align-items:center;justify-content:center">
    <div style="position:absolute;right:18px;font-size:11px;font-weight:700;color:#10b981">骑车<br>25人</div>
  </div>
  <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-size:12px;font-weight:700;color:#7c3aed;text-align:center">两样<br>都会<br>15人</div>
</div>
<div style="padding:10px;background:#f8fafc;border-radius:8px;font-size:13px">
  至少会一样 = 30 + 25 - <strong style="color:var(--p)">15</strong>（减去重复的）= <strong style="color:var(--g)">40人</strong><br>
  都不会 = 50 - 40 = <strong style="color:var(--r)">10人</strong>
</div>` }
    ],
    practice: {
      basic: [{ q: '50人数学28英语25都喜欢13,都不喜欢?', options: ['10','12','8','15'], answer: 0, explain: '50-40=10' }],
      advanced: [{ q: '1-100能被3或5整除的数?', options: ['47','53','33','46'], answer: 0, explain: '33+20-6=47' }],
      amc: [{ q: '[2025 #7] ≥95%有5人,≥90%有13,≥85%有27,≥80%有50。80%-90%几人?', options: ['8','14','22','37','45'], answer: 3, explain: '50-13=37', year: 2025, num: 7 }]
    }
  },
  {
    id: 'probability', name: '概率', icon: '🎲',
    theme: 'counting_prob', grade: '8年级', gradeNum: 8,
    amcFreq: 5, difficulty: '困难',
    desc: '古典概型、补集概率',
    realLife: '天气预报(60%降水)、彩票中奖率、游戏掉落率',
    examTips: '⚠️ 先计数再算概率。"至少一个"用1-P(全没有)',
    commonMistakes: ['❌ 凭感觉 → ✅ 必须精确计数','❌ "至少"直接算 → ✅ 用补集'],
    prereqs: ['counting','fractions'],
    glossary: [{ cn: '概率', en: 'Probability', pron: 'prah-buh-BIL-ih-tee' },{ cn: '样本空间', en: 'Sample Space', pron: '' },{ cn: '事件', en: 'Event', pron: '' },{ cn: '古典概型', en: 'Classical Probability', pron: '' },{ cn: '独立事件', en: 'Independent Events', pron: '' },{ cn: '互斥事件', en: 'Mutually Exclusive Events', pron: '' }],
    definitions: [
      { term: '概率 (Probability)', def: '一个事件发生的可能性大小，用0到1之间的数表示。P=有利结果数÷总可能结果数。' },
      { term: '补集概率', def: 'P(A发生) = 1 - P(A不发生)。当"至少一个"难以直接算时，用"1-全部都不"更简单。' }
    ],
    videosCn: [
      { title: '洋葱学园 - 概率入门(动画)', url: 'https://www.bilibili.com/video/BV1PE411n7xP/', searchUrl: 'https://search.bilibili.com/all?keyword=概率入门+小学初中+动画&order=click' },
      { title: '李永乐 - 生活中的概率(彩票/天气)', url: 'https://www.bilibili.com/video/BV1Wt411Y7Fb/', searchUrl: 'https://search.bilibili.com/all?keyword=概率+生活+彩票+李永乐&order=click' }
    ],
    videosEn: [
      { title: 'Math Antics - Basic Probability', url: 'https://www.youtube.com/watch?v=KzfWUEJjG18' },
      { title: 'Khan Academy - Intro to Probability', url: 'https://www.youtube.com/watch?v=uzkc-qNVoOk' }
    ],
    lessons: [
      { title: '运气的数学', story: '抛硬币🪙正面P=1/2。概率=想要的÷全部可能。天气60%降水=100次相似条件下60次下雨。', keyPoints: ['P=有利/总数','0≤P≤1','P(不发生)=1-P(发生)','独立事件相乘'],
        visual: `<div style="font-weight:700;margin-bottom:12px;color:var(--p)">🖼️ 样本空间：掷骰子的概率</div>
<div style="display:grid;grid-template-columns:repeat(6,1fr);gap:4px;margin-bottom:8px">
  ${[1,2,3,4,5,6].map(n=>`<div style="aspect-ratio:1;background:${n<=2?'#4f46e5':'#f1f5f9'};border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:${n<=2?'#fff':'var(--text2)'};border:1px solid var(--border)">${n}</div>`).join('')}
</div>
<div style="font-size:13px;color:var(--text2);margin-bottom:10px">P(点数≤2) = 蓝色格数/总格数 = <strong style="color:var(--p)">2/6 = 1/3</strong></div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:13px">
  <div style="padding:8px;background:#dbeafe;border-radius:8px;text-align:center">
    <div style="font-weight:700">直接算</div>
    <div>P(偶数) = 3/6 = 1/2</div>
  </div>
  <div style="padding:8px;background:#dcfce7;border-radius:8px;text-align:center">
    <div style="font-weight:700">补集法</div>
    <div>P(≥2) = 1-P(=1) = 5/6</div>
  </div>
</div>` }
    ],
    practice: {
      basic: [
        { q: '3红2蓝取1个红球概率?', options: ['2/5','3/5','1/2','2/3'], answer: 1, explain: '3/5' },
        { q: '两硬币至少1正面概率?', options: ['1/2','3/4','1/4','1/3'], answer: 1, explain: '1-1/4=3/4' }
      ],
      advanced: [{ q: '1-10取质数概率?', options: ['2/5','1/2','3/10','1/5'], answer: 0, explain: '4/10=2/5' }],
      amc: [{ q: '[2025 #20] 三人轮流吃一半,第一人总共吃?', options: ['4/7','3/5','2/3','3/4','7/8'], answer: 0, explain: '等比S=4/7', year: 2025, num: 20 }]
    }
  },
  // ===== 主题6: 统计与逻辑 =====
  {
    id: 'statistics', name: '统计与数据', icon: '📈',
    theme: 'data_logic', grade: '7年级', gradeNum: 7,
    amcFreq: 6, difficulty: '基础',
    desc: '平均数/中位数/众数/图表',
    realLife: '班级成绩分析、NBA球员数据、股票走势',
    examTips: '⚠️ 常考"插入/删除数后统计量变化"',
    commonMistakes: ['❌ 中位数=平均数 → ✅ 经常不等','❌ 偶数个取一个 → ✅ 取中间两数平均'],
    prereqs: ['fractions'],
    glossary: [{ cn: '平均数', en: 'Mean / Average', pron: '' },{ cn: '中位数', en: 'Median', pron: 'MEE-dee-un' },{ cn: '众数', en: 'Mode', pron: '' },{ cn: '极差', en: 'Range', pron: '' },{ cn: '条形图', en: 'Bar Graph', pron: '' },{ cn: '折线图', en: 'Line Graph', pron: '' },{ cn: '饼图', en: 'Pie Chart', pron: '' }],
    definitions: [
      { term: '平均数 (Mean)', def: '所有数据之和除以数据个数。反映数据的"重心"位置，但受极端值影响大。' },
      { term: '中位数 (Median)', def: '将数据从小到大排列后，位于正中间的数(偶数个取中间两数平均)。不受极端值影响。' },
      { term: '众数 (Mode)', def: '出现次数最多的数据值。可以有多个众数，也可以没有。' },
      { term: '极差 (Range)', def: '最大值减去最小值。反映数据的"分散程度"。' }
    ],
    videosCn: [
      { title: '乐乐课堂 - 平均数/中位数/众数', url: 'https://www.bilibili.com/video/BV1wb411J7CB/', searchUrl: 'https://search.bilibili.com/all?keyword=平均数中位数众数+初中数学+讲解&order=click' }
    ],
    videosEn: [
      { title: 'Math Antics - Mean, Median and Mode', url: 'https://www.youtube.com/watch?v=B1HEzNTGeZ4' }
    ],
    lessons: [
      { title: '数据会说话', story: '成绩72,85,85,90,98:\n平均86, 中位数85, 众数85, 极差26', keyPoints: ['平均=和÷个数','中位数=排序后中间','众数=最多的','极差=最大-最小'],
        visual: `<div style="font-weight:700;margin-bottom:12px;color:var(--p)">🖼️ 数据集 {72, 85, 85, 90, 98} 的统计量</div>
<div style="display:flex;gap:4px;margin-bottom:12px;align-items:flex-end">
  ${[72,85,85,90,98].map((v,i)=>`<div style="display:flex;flex-direction:column;align-items:center;flex:1">
    <div style="width:100%;background:${i===0?'#fef3c7':i===4?'#fee2e2':i===1||i===2?'#dcfce7':'#dbeafe'};border-radius:4px 4px 0 0" style="height:${v/100*80}px"></div>
    <div style="height:${v*0.7}px;width:100%;background:${i===0?'#f59e0b':i===4?'#ef4444':i===1||i===2?'#10b981':'#4f46e5'};border-radius:4px 4px 0 0"></div>
    <div style="font-size:11px;font-weight:700;margin-top:2px">${v}</div>
  </div>`).join('')}
</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;font-size:12px">
  <div style="padding:6px;background:#dbeafe;border-radius:6px"><strong>平均数</strong><br>(72+85+85+90+98)÷5 = <strong style="color:#1e40af">86</strong></div>
  <div style="padding:6px;background:#dcfce7;border-radius:6px"><strong>中位数</strong><br>排序后第3个 = <strong style="color:#166534">85</strong></div>
  <div style="padding:6px;background:#fef3c7;border-radius:6px"><strong>众数</strong><br>出现最多 = <strong style="color:#92400e">85</strong></div>
  <div style="padding:6px;background:#fee2e2;border-radius:6px"><strong>极差</strong><br>98-72 = <strong style="color:#991b1b">26</strong></div>
</div>` }
    ],
    practice: {
      basic: [
        { q: '3,5,7,7,8中位数?', options: ['5','6','7','8'], answer: 2, explain: '排序中间是7' },
        { q: '2,3,3,5,7,9众数?', options: ['2','3','5','9'], answer: 1, explain: '3出现最多' }
      ],
      advanced: [],
      amc: [
        { q: '[2025 #14] 插N到2,6,7,7,28使均值=2×中位数,N=?', options: ['7','14','20','28','34'], answer: 4, explain: 'N=34', year: 2025, num: 14 },
        { q: '[2023 #20] 插两数到3,3,8,11,28使极差翻倍众数中位数不变,最大和?', options: ['56','57','58','60','61'], answer: 2, explain: '5+53=58', year: 2023, num: 20 }
      ]
    }
  },
  {
    id: 'logic', name: '逻辑推理', icon: '🧠',
    theme: 'data_logic', grade: '竞赛', gradeNum: 8,
    amcFreq: 4, difficulty: '困难',
    desc: '排除法、列表法、图着色',
    realLife: '数独、侦探推理、电路逻辑门',
    examTips: '⚠️ 没公式可套，必须逐步推理',
    commonMistakes: ['❌ 凭直觉猜 → ✅ 系统列条件推理'],
    prereqs: [],
    glossary: [{ cn: '逻辑', en: 'Logic', pron: '' },{ cn: '推理', en: 'Reasoning / Deduction', pron: '' },{ cn: '排除法', en: 'Elimination', pron: '' },{ cn: '反证法', en: 'Proof by Contradiction', pron: '' },{ cn: '图着色', en: 'Graph Coloring', pron: '' }],
    definitions: [
      { term: '逻辑推理 (Logical Reasoning)', def: '根据已知条件，通过严密的推理得出结论。常用方法：排除法、列表法、逆向思维。' }
    ],
    videosCn: [
      { title: '逻辑推理入门(排除法·小学奥数)', url: 'https://www.bilibili.com/video/BV1ME411E7Wj/', searchUrl: 'https://search.bilibili.com/all?keyword=逻辑推理+排除法+小学奥数&order=click' },
      { title: '数独怎么玩(逻辑思维训练)', url: 'https://www.bilibili.com/video/BV1st411M7hy/', searchUrl: 'https://search.bilibili.com/all?keyword=数独玩法+逻辑思维+入门&order=click' }
    ],
    videosEn: [
      { title: 'TED-Ed - Can you solve the riddle?', url: 'https://www.youtube.com/watch?v=1rDVz_Fb6HQ' }
    ],
    lessons: [
      { title: '像侦探一样思考', story: '每条线索排除一些可能→剩下的就是答案🔍', keyPoints: ['排除法','列表法','逆向思维','极端情况'],
        visual: `<div style="font-weight:700;margin-bottom:12px;color:var(--p)">🖼️ 排除法解题流程</div>
<div style="display:flex;flex-direction:column;gap:8px;font-size:13px">
  <div style="display:flex;align-items:center;gap:8px">
    <div style="width:28px;height:28px;background:var(--p);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0">1</div>
    <div style="padding:8px;background:#f8fafc;border-radius:8px;flex:1">列出<strong>所有可能</strong>的答案选项</div>
  </div>
  <div style="display:flex;align-items:center;gap:8px">
    <div style="width:28px;height:28px;background:var(--r);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0">2</div>
    <div style="padding:8px;background:#fef2f2;border-radius:8px;flex:1">用每条<strong>线索排除</strong>不可能的选项</div>
  </div>
  <div style="display:flex;align-items:center;gap:8px">
    <div style="width:28px;height:28px;background:var(--g);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0">3</div>
    <div style="padding:8px;background:#ecfdf5;border-radius:8px;flex:1"><strong>剩下的唯一选项</strong>就是答案！</div>
  </div>
</div>
<div style="margin-top:10px;padding:10px;background:#fffbeb;border-radius:8px;font-size:12px">
  <strong>例题：</strong>甲乙丙三人中一人偷了饼干。甲说"不是我"，乙说"是丙"，丙说"乙在说谎"。只有一人说谎。<br>
  <span style="color:var(--text2)">→ 假设甲说谎：则偷饼干的是甲，乙和丙都说真话...（逐一验证）</span>
</div>` }
    ],
    practice: {
      basic: [{ q: '甲"我不是最高",乙"我不是最矮",丙最高。谁最矮?', options: ['甲','乙','丙','不确定'], answer: 0, explain: '丙最高→乙不最矮→甲最矮' }],
      advanced: [],
      amc: []
    }
  }
];

// ===== Achievements =====
const ACHIEVEMENTS = [
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
  { id: 'star_50', name: '星光闪耀', desc: '累计获得50颗星星', icon: '✨' },
];
