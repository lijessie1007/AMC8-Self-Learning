const fs = require('fs');
let content = fs.readFileSync('D:/11. AI/AI 0324/amc8-hub/data.js', 'utf8');

// Textbook content for each visual block (by identifying title)
const textbookMap = {
  '因数和倍数': `<div style="border:2px solid #3b82f6;border-radius:8px;overflow:hidden">
  <div style="background:#3b82f6;color:#fff;padding:8px 14px;font-weight:700;font-size:14px">📚 教材讲解 · 人教版 五年级上册 第三单元</div>
  <div style="padding:14px;font-size:14px;line-height:2">
    <p><strong>【知识要点】</strong>如果 a÷b 结果是整数，我们就说 a 能被 b 整除，b 是 a 的因数，a 是 b 的倍数。</p>
    <div style="background:#eff6ff;border-radius:6px;padding:10px;margin:10px 0;border-left:3px solid #3b82f6">
      <strong>【例题】</strong> 写出18的全部因数。<br>
      <strong>解：</strong>18÷1=18, 18÷2=9, 18÷3=6, 18÷6=3...<br>
      18的因数有：1, 2, 3, 6, 9, 18（共6个）
    </div>
    <div style="background:#f0fdf4;border-radius:6px;padding:10px;border-left:3px solid #22c55e">
      <strong>【练一练】</strong> 写出24的全部因数，并数出有几个。<br>
      <span style="color:#666;font-size:12px">答案：1,2,3,4,6,8,12,24，共8个</span>
    </div>
  </div>
</div>`,

  '整除判断规则详解': `<div style="border:2px solid #3b82f6;border-radius:8px;overflow:hidden">
  <div style="background:#3b82f6;color:#fff;padding:8px 14px;font-weight:700;font-size:14px">📚 教材讲解 · 人教版 五年级上册 整除性质</div>
  <div style="padding:14px;font-size:14px;line-height:2">
    <p><strong>【知识要点】</strong>最大公因数(GCD)：两数公有因数中最大的一个。最小公倍数(LCM)：两数公有倍数中最小的一个。</p>
    <div style="background:#eff6ff;border-radius:6px;padding:10px;margin:10px 0;border-left:3px solid #3b82f6">
      <strong>【例题】</strong> 求12和18的最大公因数和最小公倍数。<br>
      <strong>解：</strong>12=2²×3，18=2×3²<br>
      GCD(12,18)=2×3=<strong>6</strong><br>
      LCM(12,18)=2²×3²=<strong>36</strong>
    </div>
    <div style="background:#fffbeb;border-radius:6px;padding:8px;border-left:3px solid #f59e0b;font-size:13px">
      <strong>💡 重要规律：</strong>GCD(a,b) × LCM(a,b) = a × b
    </div>
  </div>
</div>`,

  '质数——数学的原子': `<div style="border:2px solid #3b82f6;border-radius:8px;overflow:hidden">
  <div style="background:#3b82f6;color:#fff;padding:8px 14px;font-weight:700;font-size:14px">📚 教材讲解 · 人教版 五年级上册 质数与合数</div>
  <div style="padding:14px;font-size:14px;line-height:2">
    <p><strong>【知识要点】</strong>只有1和本身两个因数的数叫<strong>质数</strong>。有两个以上因数的数叫<strong>合数</strong>。1既不是质数也不是合数。</p>
    <div style="background:#eff6ff;border-radius:6px;padding:10px;margin:10px 0;border-left:3px solid #3b82f6">
      <strong>【例题】</strong> 把60分解质因数。<br>
      <strong>解：</strong>60=2×30=2×2×15=2×2×3×5=<strong>2²×3×5</strong>
    </div>
    <div style="background:#f0fdf4;border-radius:6px;padding:10px;border-left:3px solid #22c55e">
      <strong>【练一练】</strong> 分解质因数：(1) 36 (2) 48 (3) 100<br>
      <span style="color:#666;font-size:12px">答案：(1)2²×3² (2)2⁴×3 (3)2²×5²</span>
    </div>
  </div>
</div>`,

  '比例的魔力': `<div style="border:2px solid #3b82f6;border-radius:8px;overflow:hidden">
  <div style="background:#3b82f6;color:#fff;padding:8px 14px;font-weight:700;font-size:14px">📚 教材讲解 · 人教版 六年级上册 比和比例</div>
  <div style="padding:14px;font-size:14px;line-height:2">
    <p><strong>【知识要点】</strong>比例：两个比相等，a:b=c:d，则 ad=bc（外项之积等于内项之积）。</p>
    <div style="background:#eff6ff;border-radius:6px;padding:10px;margin:10px 0;border-left:3b82f6">
      <strong>【例题】</strong> 一辆汽车3小时行驶180km，照这样的速度，5小时行驶多少km？<br>
      <strong>解：</strong>设行驶 x km。<br>
      3:180 = 5:x（时间比=路程比）<br>
      3x = 180×5 = 900，x = <strong>300km</strong>
    </div>
    <div style="background:#f0fdf4;border-radius:6px;padding:10px;border-left:3px solid #22c55e">
      <strong>【练一练】</strong> 一张地图上2cm代表实际10km，地图上城市间距5cm，实际距离多少？<br>
      <span style="color:#666;font-size:12px">答案：2:10=5:x，x=25km</span>
    </div>
  </div>
</div>`,

  '方程——找到未知数': `<div style="border:2px solid #3b82f6;border-radius:8px;overflow:hidden">
  <div style="background:#3b82f6;color:#fff;padding:8px 14px;font-weight:700;font-size:14px">📚 教材讲解 · 沪教版 六年级 方程初步</div>
  <div style="padding:14px;font-size:14px;line-height:2">
    <p><strong>【知识要点】</strong>列方程解题步骤：①设未知数x ②找等量关系 ③列方程 ④解方程 ⑤检验答案</p>
    <div style="background:#eff6ff;border-radius:6px;padding:10px;margin:10px 0;border-left:3px solid #3b82f6">
      <strong>【例题】鸡兔同笼】</strong> 头35个，脚94只，各有几只？<br>
      <strong>解：</strong>设兔子 x 只，鸡 (35-x) 只<br>
      4x + 2(35-x) = 94<br>
      4x + 70 - 2x = 94<br>
      2x = 24，x = <strong>12只兔子</strong>，23只鸡
    </div>
    <div style="background:#f0fdf4;border-radius:6px;padding:10px;border-left:3px solid #22c55e">
      <strong>【练一练】</strong> 一个数的3倍加7等于34，这个数是多少？<br>
      <span style="color:#666;font-size:12px">答案：设x，3x+7=34，x=9</span>
    </div>
  </div>
</div>`,

  '数列——数字的规律': `<div style="border:2px solid #3b82f6;border-radius:8px;overflow:hidden">
  <div style="background:#3b82f6;color:#fff;padding:8px 14px;font-weight:700;font-size:14px">📚 教材讲解 · 沪教版 七年级 数列初步</div>
  <div style="padding:14px;font-size:14px;line-height:2">
    <p><strong>【知识要点】</strong>等差数列：aₙ = a₁ + (n-1)d，求和 S = n(a₁+aₙ)/2</p>
    <div style="background:#eff6ff;border-radius:6px;padding:10px;margin:10px 0;border-left:3px solid #3b82f6">
      <strong>【例题】</strong> 等差数列2, 5, 8, 11, ...，求第20项和前20项的和。<br>
      <strong>解：</strong>a₁=2, d=3<br>
      第20项：a₂₀ = 2 + 19×3 = <strong>59</strong><br>
      前20项和：S = 20×(2+59)/2 = <strong>610</strong>
    </div>
  </div>
</div>`,

  '追上你——行程问题': `<div style="border:2px solid #3b82f6;border-radius:8px;overflow:hidden">
  <div style="background:#3b82f6;color:#fff;padding:8px 14px;font-weight:700;font-size:14px">📚 教材讲解 · 人教版 六年级 应用题</div>
  <div style="padding:14px;font-size:14px;line-height:2">
    <p><strong>【知识要点】</strong>距离=速度×时间。相遇问题：两人相向，时间=距离÷(速度和)。追及问题：时间=距离差÷(速度差)。</p>
    <div style="background:#eff6ff;border-radius:6px;padding:10px;margin:10px 0;border-left:3px solid #3b82f6">
      <strong>【例题】</strong> 甲乙两地相距300km，汽车从甲以80km/h出发，同时火车从乙以120km/h出发，几小时后相遇？<br>
      <strong>解：</strong>相遇时间 = 300 ÷ (80+120) = 300 ÷ 200 = <strong>1.5小时</strong>
    </div>
  </div>
</div>`,

  '面积的本质': `<div style="border:2px solid #3b82f6;border-radius:8px;overflow:hidden">
  <div style="background:#3b82f6;color:#fff;padding:8px 14px;font-weight:700;font-size:14px">📚 教材讲解 · 人教版 五年级上册 多边形的面积</div>
  <div style="padding:14px;font-size:14px;line-height:2">
    <p><strong>【知识要点】</strong>三角形面积 = 底×高÷2。梯形面积 = (上底+下底)×高÷2。</p>
    <div style="background:#eff6ff;border-radius:6px;padding:10px;margin:10px 0;border-left:3px solid #3b82f6">
      <strong>【例题】割补法】</strong> 一个平行四边形底8cm高5cm，面积是多少？<br>
      <strong>解：</strong>把平行四边形"割"下一个三角形"补"到另一边→变成长方形<br>
      面积 = 8×5 = <strong>40cm²</strong>（与长方形相同！）
    </div>
    <div style="background:#f0fdf4;border-radius:6px;padding:10px;border-left:3px solid #22c55e">
      <strong>【练一练】</strong> 梯形上底3cm,下底7cm,高4cm，面积是多少？<br>
      <span style="color:#666;font-size:12px">答案：(3+7)×4÷2=20cm²</span>
    </div>
  </div>
</div>`,

  '完美的圆': `<div style="border:2px solid #3b82f6;border-radius:8px;overflow:hidden">
  <div style="background:#3b82f6;color:#fff;padding:8px 14px;font-weight:700;font-size:14px">📚 教材讲解 · 人教版 六年级上册 圆的周长和面积</div>
  <div style="padding:14px;font-size:14px;line-height:2">
    <p><strong>【知识要点】</strong>圆周长 C=2πr，圆面积 S=πr²（π≈3.14）。半径扩大n倍，面积扩大n²倍！</p>
    <div style="background:#eff6ff;border-radius:6px;padding:10px;margin:10px 0;border-left:3px solid #3b82f6">
      <strong>【例题】</strong> 一个圆形花坛半径为5m，求周长和面积。<br>
      <strong>解：</strong>周长 C = 2×3.14×5 = <strong>31.4m</strong><br>
      面积 S = 3.14×5² = <strong>78.5m²</strong>
    </div>
    <div style="background:#fffbeb;border-radius:6px;padding:8px;border-left:3px solid #f59e0b;font-size:13px">
      <strong>⚠️注意：</strong>直径×2≠面积×2！半径增大1倍，面积增大<strong>4倍</strong>！
    </div>
  </div>
</div>`,

  '给点起地址': `<div style="border:2px solid #3b82f6;border-radius:8px;overflow:hidden">
  <div style="background:#3b82f6;color:#fff;padding:8px 14px;font-weight:700;font-size:14px">📚 教材讲解 · 沪教版 七年级下册 平面直角坐标系</div>
  <div style="padding:14px;font-size:14px;line-height:2">
    <p><strong>【知识要点】</strong>用(x,y)唯一确定平面上的点。x轴（横轴）、y轴（纵轴），交点为原点O(0,0)。</p>
    <div style="background:#eff6ff;border-radius:6px;padding:10px;margin:10px 0;border-left:3px solid #3b82f6">
      <strong>【例题】</strong> 点A(3,4)到原点O的距离是多少？<br>
      <strong>解：</strong>由勾股定理：d = √(3²+4²) = √(9+16) = √25 = <strong>5</strong>
    </div>
  </div>
</div>`,

  '有几种可能？': `<div style="border:2px solid #3b82f6;border-radius:8px;overflow:hidden">
  <div style="background:#3b82f6;color:#fff;padding:8px 14px;font-weight:700;font-size:14px">📚 教材讲解 · 沪教版 八年级 计数原理</div>
  <div style="padding:14px;font-size:14px;line-height:2">
    <p><strong>【知识要点】</strong>加法原理：互斥事件用加法。乘法原理：独立步骤用乘法。</p>
    <div style="background:#eff6ff;border-radius:6px;padding:10px;margin:10px 0;border-left:3px solid #3b82f6">
      <strong>【例题】</strong> 一次数学测验有5道判断题和3道选择题（每题4个选项），全部做完有多少种不同的做法？<br>
      <strong>解：</strong>判断题：每题2种，5题共 2⁵=32种<br>
      选择题：每题4种，3题共 4³=64种<br>
      总计：32×64 = <strong>2048种</strong>
    </div>
  </div>
</div>`,

  '不要数重了！': `<div style="border:2px solid #3b82f6;border-radius:8px;overflow:hidden">
  <div style="background:#3b82f6;color:#fff;padding:8px 14px;font-weight:700;font-size:14px">📚 教材讲解 · 竞赛数学 容斥原理</div>
  <div style="padding:14px;font-size:14px;line-height:2">
    <p><strong>【知识要点】</strong>|A∪B| = |A| + |B| - |A∩B|（加两个集合，减去被重复计算的交集）</p>
    <div style="background:#eff6ff;border-radius:6px;padding:10px;margin:10px 0;border-left:3px solid #3b82f6">
      <strong>【例题】</strong> 1到100中，能被3或5整除的数有多少个？<br>
      <strong>解：</strong>被3整除：⌊100/3⌋=33个<br>
      被5整除：⌊100/5⌋=20个<br>
      被15整除（重复计算）：⌊100/15⌋=6个<br>
      答案：33+20-6 = <strong>47个</strong>
    </div>
  </div>
</div>`,

  '运气的数学': `<div style="border:2px solid #3b82f6;border-radius:8px;overflow:hidden">
  <div style="background:#3b82f6;color:#fff;padding:8px 14px;font-weight:700;font-size:14px">📚 教材讲解 · 人教版 八年级下册 概率初步</div>
  <div style="padding:14px;font-size:14px;line-height:2">
    <p><strong>【知识要点】</strong>概率 P = 有利结果数/总结果数，0≤P≤1。P(不发生)=1-P(发生)。</p>
    <div style="background:#eff6ff;border-radius:6px;padding:10px;margin:10px 0;border-left:3px solid #3b82f6">
      <strong>【例题】</strong> 抛一枚骰子，求点数大于4的概率。<br>
      <strong>解：</strong>总结果：1,2,3,4,5,6，共6种<br>
      大于4的：5,6，共2种<br>
      P = 2/6 = <strong>1/3</strong>
    </div>
    <div style="background:#f0fdf4;border-radius:6px;padding:10px;border-left:3px solid #22c55e">
      <strong>【练一练】</strong> 袋中有3红2白，随机取一个，取到白球概率？不是白球概率？<br>
      <span style="color:#666;font-size:12px">答案：白球P=2/5，非白球P=1-2/5=3/5</span>
    </div>
  </div>
</div>`,

  '数据会说话': `<div style="border:2px solid #3b82f6;border-radius:8px;overflow:hidden">
  <div style="background:#3b82f6;color:#fff;padding:8px 14px;font-weight:700;font-size:14px">📚 教材讲解 · 人教版 七年级下册 数据的收集与整理</div>
  <div style="padding:14px;font-size:14px;line-height:2">
    <p><strong>【知识要点】</strong>平均数=总和÷个数；中位数=排序后中间值；众数=出现最多的值；极差=最大-最小。</p>
    <div style="background:#eff6ff;border-radius:6px;padding:10px;margin:10px 0;border-left:3px solid #3b82f6">
      <strong>【例题】</strong> 数据：3, 7, 5, 7, 9, 4，求平均数、中位数、众数、极差。<br>
      <strong>解：</strong>排序：3,4,5,7,7,9<br>
      平均数 = (3+4+5+7+7+9)/6 = 35/6 ≈ <strong>5.8</strong><br>
      中位数 = (5+7)/2 = <strong>6</strong>（偶数取中间两数平均）<br>
      众数 = <strong>7</strong>（出现2次最多）<br>
      极差 = 9-3 = <strong>6</strong>
    </div>
  </div>
</div>`,

  '像侦探一样思考': `<div style="border:2px solid #3b82f6;border-radius:8px;overflow:hidden">
  <div style="background:#3b82f6;color:#fff;padding:8px 14px;font-weight:700;font-size:14px">📚 竞赛数学 · 逻辑推理专题</div>
  <div style="padding:14px;font-size:14px;line-height:2">
    <p><strong>【知识要点】</strong>排除法：列出所有可能，逐一排除不符合条件的。列表法：用表格系统整理信息。</p>
    <div style="background:#eff6ff;border-radius:6px;padding:10px;margin:10px 0;border-left:3px solid #3b82f6">
      <strong>【例题】</strong> 甲乙丙三人中有一人偷吃了蛋糕。甲说"不是我"，乙说"是丙"，丙说"乙在说谎"。已知只有一人说谎，谁偷吃了？<br>
      <strong>解：</strong>假设甲说谎→是甲偷的→乙说是丙（假）→乙说谎（矛盾，两人说谎）<br>
      假设乙说谎→不是丙→丙说乙谎（真）→是甲→甲说"不是我"（假）→矛盾<br>
      假设丙说谎→乙说真=是丙→丙偷的→甲说不是我（真）✓ → <strong>丙偷吃了</strong>
    </div>
  </div>
</div>`,

  '奇偶分析与尾数': `<div style="border:2px solid #3b82f6;border-radius:8px;overflow:hidden">
  <div style="background:#3b82f6;color:#fff;padding:8px 14px;font-weight:700;font-size:14px">📚 竞赛数学 · 数论技巧专题</div>
  <div style="padding:14px;font-size:14px;line-height:2">
    <p><strong>【知识要点】</strong>奇偶分析快速排除答案。尾数规律：2的幂次尾数 2→4→8→6 循环。</p>
    <div style="background:#eff6ff;border-radius:6px;padding:10px;margin:10px 0;border-left:3px solid #3b82f6">
      <strong>【例题】</strong> 求 2¹⁰⁰ 的个位数字。<br>
      <strong>解：</strong>2的幂次尾数周期为4：2,4,8,6,2,4,8,6...<br>
      100÷4=25，余数=0，对应周期第4位<br>
      2¹⁰⁰的个位数字是 <strong>6</strong>
    </div>
  </div>
</div>`
};

// Now wrap string visual fields in objects with diagram + textbook
// Find pattern: visual: `...` inside a lesson object
let count = 0;
Object.entries(textbookMap).forEach(function([lessonTitle, tb]) {
  // Find the lesson with this title and add textbook to its visual
  const titlePattern = "title: '" + lessonTitle + "'";
  const idx = content.indexOf(titlePattern);
  if (idx === -1) { console.log('NOT FOUND lesson: ' + lessonTitle); return; }
  
  // Find the visual: `...` after this title
  const visualStart = content.indexOf("visual: `", idx);
  if (visualStart === -1 || visualStart - idx > 2000) { 
    console.log('No visual for: ' + lessonTitle); 
    return; 
  }
  
  // Find the end of the visual template literal
  let backtickCount = 0;
  let pos = visualStart + 9; // skip 'visual: `'
  let depth = 1;
  while (pos < content.length && depth > 0) {
    if (content[pos] === '`' && content[pos-1] !== '\\') depth--;
    pos++;
  }
  
  const oldVisual = content.slice(visualStart, pos);
  const diagramContent = content.slice(visualStart + 9, pos - 1); // content between backticks
  
  const newVisual = "visual: {\n          diagram: `" + diagramContent + "`,\n          textbook: `" + tb + "`\n        }";
  
  content = content.slice(0, visualStart) + newVisual + content.slice(pos);
  console.log('Updated visual for: ' + lessonTitle);
  count++;
});

fs.writeFileSync('D:/11. AI/AI 0324/amc8-hub/data.js', content, 'utf8');
console.log('\nDone! Updated ' + count + ' visual fields with textbook content.');
