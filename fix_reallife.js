const fs = require('fs');
let content = fs.readFileSync('D:/11. AI/AI 0324/amc8-hub/data.js', 'utf8');

// realLife replacements for all remaining topics
const replacements = [
  {
    old: "realLife: '密码学(RSA加密基于大质数!)、蝉的13/17年周期(质数避免天敌)、条形码校验'",
    newStr: `realLifeHtml: \`<div style="margin-bottom:10px;font-size:14px;line-height:1.8">🔐 密码学(RSA加密基于大质数)、🌿 蝉的13/17年周期(质数避免天敌)、📊 条形码校验</div>
    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <div style="flex:1;min-width:140px"><img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80" alt="密码锁" style="width:100%;height:120px;object-fit:cover;border-radius:8px"/><div style="font-size:11px;color:var(--text2);margin-top:4px;text-align:center">密码锁 → 质数加密</div></div>
      <div style="flex:1;min-width:140px"><img src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=300&q=80" alt="条形码" style="width:100%;height:120px;object-fit:cover;border-radius:8px"/><div style="font-size:11px;color:var(--text2);margin-top:4px;text-align:center">条形码 → 数字校验</div></div>
    </div>\`,`
  },
  {
    old: "realLife: '条形码/身份证校验码(用余数检测错误)、奥运年份都是偶数'",
    newStr: `realLifeHtml: \`<div style="margin-bottom:10px;font-size:14px;line-height:1.8">📅 奥运年份都是偶数、🪪 身份证校验码用到余数、⏰ 时钟周期性(秒针60格)</div>
    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <div style="flex:1;min-width:140px"><img src="https://images.unsplash.com/photo-1509228468518-180dd4864904?w=300&q=80" alt="日历" style="width:100%;height:120px;object-fit:cover;border-radius:8px"/><div style="font-size:11px;color:var(--text2);margin-top:4px;text-align:center">日历 → 奇偶规律</div></div>
    </div>\`,`
  },
  {
    old: "realLife: '做菜的配方(茶:奶=2:3)、地图比例尺(1:50000)、调颜色'",
    newStr: `realLifeHtml: \`<div style="margin-bottom:10px;font-size:14px;line-height:1.8">🧋 配料比例(茶:奶=2:3)、🗺️ 地图比例尺(1:50000)、🎨 调颜色配比</div>
    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <div style="flex:1;min-width:140px"><img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&q=80" alt="奶茶" style="width:100%;height:120px;object-fit:cover;border-radius:8px"/><div style="font-size:11px;color:var(--text2);margin-top:4px;text-align:center">奶茶配方 → 比例</div></div>
      <div style="flex:1;min-width:140px"><img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=300&q=80" alt="地图" style="width:100%;height:120px;object-fit:cover;border-radius:8px"/><div style="font-size:11px;color:var(--text2);margin-top:4px;text-align:center">地图 → 比例尺</div></div>
    </div>\`,`
  },
  {
    old: "realLife: '旅行预算规划、推算年龄、配平化学方程式'",
    newStr: `realLifeHtml: \`<div style="margin-bottom:10px;font-size:14px;line-height:1.8">✈️ 旅行预算规划、🧪 配平化学方程式、🎂 推算生日年龄</div>
    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <div style="flex:1;min-width:140px"><img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=300&q=80" alt="旅行" style="width:100%;height:120px;object-fit:cover;border-radius:8px"/><div style="font-size:11px;color:var(--text2);margin-top:4px;text-align:center">旅行预算 → 方程应用</div></div>
      <div style="flex:1;min-width:140px"><img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&q=80" alt="天平" style="width:100%;height:120px;object-fit:cover;border-radius:8px"/><div style="font-size:11px;color:var(--text2);margin-top:4px;text-align:center">天平 → 等式平衡</div></div>
    </div>\`,`
  },
  {
    old: "realLife: '存钱计划(每周多存5元)、楼梯台阶、日历规律(每周+7)'",
    newStr: `realLifeHtml: \`<div style="margin-bottom:10px;font-size:14px;line-height:1.8">💰 存钱计划(每周多存5元)、🪜 楼梯台阶数、📅 日历规律(每周+7天)</div>
    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <div style="flex:1;min-width:140px"><img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=300&q=80" alt="楼梯" style="width:100%;height:120px;object-fit:cover;border-radius:8px"/><div style="font-size:11px;color:var(--text2);margin-top:4px;text-align:center">楼梯 → 等差数列</div></div>
      <div style="flex:1;min-width:140px"><img src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=300&q=80" alt="存钱" style="width:100%;height:120px;object-fit:cover;border-radius:8px"/><div style="font-size:11px;color:var(--text2);margin-top:4px;text-align:center">存钱罐 → 等差增长</div></div>
    </div>\`,`
  },
  {
    old: "realLife: '导航预估到达时间、跑步配速、飞机航速'",
    newStr: `realLifeHtml: \`<div style="margin-bottom:10px;font-size:14px;line-height:1.8">🚗 导航预估到达时间、🏃 跑步配速计算、✈️ 飞机航速</div>
    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <div style="flex:1;min-width:140px"><img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=300&q=80" alt="开车导航" style="width:100%;height:120px;object-fit:cover;border-radius:8px"/><div style="font-size:11px;color:var(--text2);margin-top:4px;text-align:center">导航 → 速度时间距离</div></div>
      <div style="flex:1;min-width:140px"><img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=300&q=80" alt="跑步" style="width:100%;height:120px;object-fit:cover;border-radius:8px"/><div style="font-size:11px;color:var(--text2);margin-top:4px;text-align:center">跑步 → 配速计算</div></div>
    </div>\`,`
  },
  {
    old: "realLife: '装修铺地砖、裁剪衣服布料、操场面积计算'",
    newStr: `realLifeHtml: \`<div style="margin-bottom:10px;font-size:14px;line-height:1.8">🏠 装修铺地砖计算数量、✂️ 裁剪布料、🏟️ 操场面积计算</div>
    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <div style="flex:1;min-width:140px"><img src="https://images.unsplash.com/photo-1558618047-3c8c76ca5e39?w=300&q=80" alt="地砖" style="width:100%;height:120px;object-fit:cover;border-radius:8px"/><div style="font-size:11px;color:var(--text2);margin-top:4px;text-align:center">铺地砖 → 面积计算</div></div>
      <div style="flex:1;min-width:140px"><img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80" alt="布料" style="width:100%;height:120px;object-fit:cover;border-radius:8px"/><div style="font-size:11px;color:var(--text2);margin-top:4px;text-align:center">裁布料 → 矩形面积</div></div>
    </div>\`,`
  },
  {
    old: "realLife: '自行車轮一圈=周长、披萨大小比(面积)、钟表扇形'",
    newStr: `realLifeHtml: \`<div style="margin-bottom:10px;font-size:14px;line-height:1.8">🚲 自行车轮一圈=周长、🍕 比较披萨大小(面积)、🕐 钟表扇形区域</div>
    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <div style="flex:1;min-width:140px"><img src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=300&q=80" alt="自行车轮" style="width:100%;height:120px;object-fit:cover;border-radius:8px"/><div style="font-size:11px;color:var(--text2);margin-top:4px;text-align:center">车轮 → 圆周长</div></div>
      <div style="flex:1;min-width:140px"><img src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=300&q=80" alt="披萨" style="width:100%;height:120px;object-fit:cover;border-radius:8px"/><div style="font-size:11px;color:var(--text2);margin-top:4px;text-align:center">比较披萨大小 → 圆面积</div></div>
    </div>\`,`
  },
  {
    old: "realLife: '手机地图定位(经纬度)、游戏角色位置、散点图'",
    newStr: `realLifeHtml: \`<div style="margin-bottom:10px;font-size:14px;line-height:1.8">📱 手机地图定位(经纬度)、🎮 游戏角色位置坐标、📊 散点图数据分析</div>
    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <div style="flex:1;min-width:140px"><img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=300&q=80" alt="地图定位" style="width:100%;height:120px;object-fit:cover;border-radius:8px"/><div style="font-size:11px;color:var(--text2);margin-top:4px;text-align:center">地图定位 → 坐标系</div></div>
    </div>\`,`
  },
  {
    old: "realLife: '密码组合数(4位=10000种)、车牌号、抽奖'",
    newStr: `realLifeHtml: \`<div style="margin-bottom:10px;font-size:14px;line-height:1.8">🔐 密码有多少种(4位数字=10000种)、🚗 车牌号组合、🎰 抽奖概率</div>
    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <div style="flex:1;min-width:140px"><img src="https://images.unsplash.com/photo-1626278664285-f796b9ee7806?w=300&q=80" alt="密码锁" style="width:100%;height:120px;object-fit:cover;border-radius:8px"/><div style="font-size:11px;color:var(--text2);margin-top:4px;text-align:center">密码锁 → 计数原理</div></div>
      <div style="flex:1;min-width:140px"><img src="https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=300&q=80" alt="车牌" style="width:100%;height:120px;object-fit:cover;border-radius:8px"/><div style="font-size:11px;color:var(--text2);margin-top:4px;text-align:center">车牌号 → 排列计数</div></div>
    </div>\`,`
  },
  {
    old: "realLife: '问卷调查(喜欢猫或狗?)、搜索引擎过滤'",
    newStr: `realLifeHtml: \`<div style="margin-bottom:10px;font-size:14px;line-height:1.8">📋 问卷调查(喜欢猫或狗的人)、🔍 搜索引擎结果过滤、📊 统计数据不重复计数</div>
    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <div style="flex:1;min-width:140px"><img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&q=80" alt="问卷" style="width:100%;height:120px;object-fit:cover;border-radius:8px"/><div style="font-size:11px;color:var(--text2);margin-top:4px;text-align:center">问卷调查 → 容斥原理</div></div>
    </div>\`,`
  },
  {
    old: "realLife: '天气预报(60%降水)、彩票中奖率、游戏掉落率'",
    newStr: `realLifeHtml: \`<div style="margin-bottom:10px;font-size:14px;line-height:1.8">🌦️ 天气预报(60%降水概率)、🎲 骰子游戏、💊 药物副作用概率</div>
    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <div style="flex:1;min-width:140px"><img src="https://images.unsplash.com/photo-1596838132731-75c33736cda5?w=300&q=80" alt="骰子" style="width:100%;height:120px;object-fit:cover;border-radius:8px"/><div style="font-size:11px;color:var(--text2);margin-top:4px;text-align:center">骰子 → 古典概型</div></div>
      <div style="flex:1;min-width:140px"><img src="https://images.unsplash.com/photo-1504608524841-42584120d693?w=300&q=80" alt="天气" style="width:100%;height:120px;object-fit:cover;border-radius:8px"/><div style="font-size:11px;color:var(--text2);margin-top:4px;text-align:center">天气预报 → 概率含义</div></div>
    </div>\`,`
  },
  {
    old: "realLife: '班级成绩分析、NBA球员数据、股票走势'",
    newStr: `realLifeHtml: \`<div style="margin-bottom:10px;font-size:14px;line-height:1.8">📊 班级成绩分析、🏀 NBA球员数据比较、📈 股票走势图</div>
    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <div style="flex:1;min-width:140px"><img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&q=80" alt="数据图表" style="width:100%;height:120px;object-fit:cover;border-radius:8px"/><div style="font-size:11px;color:var(--text2);margin-top:4px;text-align:center">数据图表 → 统计分析</div></div>
      <div style="flex:1;min-width:140px"><img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&q=80" alt="股票" style="width:100%;height:120px;object-fit:cover;border-radius:8px"/><div style="font-size:11px;color:var(--text2);margin-top:4px;text-align:center">折线图 → 数据趋势</div></div>
    </div>\`,`
  },
  {
    old: "realLife: '数独、侦探推理、电路逻辑门'",
    newStr: `realLifeHtml: \`<div style="margin-bottom:10px;font-size:14px;line-height:1.8">🧩 数独游戏(逻辑推理)、🔍 侦探破案、💡 电路逻辑门设计</div>
    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <div style="flex:1;min-width:140px"><img src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=300&q=80" alt="数独" style="width:100%;height:120px;object-fit:cover;border-radius:8px"/><div style="font-size:11px;color:var(--text2);margin-top:4px;text-align:center">数独 → 逻辑推理</div></div>
    </div>\`,`
  }
];

replacements.forEach(function(r) {
  if (content.includes(r.old)) {
    content = content.replace(r.old, r.newStr);
    console.log('Replaced: ' + r.old.slice(0, 50));
  } else {
    console.log('NOT FOUND: ' + r.old.slice(0, 50));
  }
});

fs.writeFileSync('D:/11. AI/AI 0324/amc8-hub/data.js', content, 'utf8');
console.log('\nDone! All realLife fields updated.');
const remaining = (content.match(/realLife: '/g) || []).length;
console.log('Remaining realLife fields: ' + remaining);
