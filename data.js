// ========== AMC8 Learning Hub - Data ==========

const THEMES = [
  {
    "id": "numbers",
    "name": "数与运算",
    "icon": "🔢",
    "color": "#4f46e5",
    "desc": "从整数到分数小数，计算是一切数学的基础",
    "mindmap": {
      "center": "数与运算",
      "branches": [
        {
          "name": "整数",
          "children": [
            "四则运算",
            "运算顺序",
            "估算"
          ]
        },
        {
          "name": "分数",
          "children": [
            "概念与约分",
            "加减法(通分)",
            "乘法(画格子)",
            "除法(翻转)"
          ]
        },
        {
          "name": "小数",
          "children": [
            "小数概念",
            "小数运算",
            "分数小数互化"
          ]
        },
        {
          "name": "百分数",
          "children": [
            "百分数概念",
            "折扣利润",
            "浓度问题"
          ]
        }
      ]
    },
    "formulas": [
      {
        "name": "分数加法",
        "formula": "a/b + c/d = (ad+bc)/bd",
        "note": "先通分再加"
      },
      {
        "name": "分数乘法",
        "formula": "a/b × c/d = ac/bd",
        "note": "分子×分子, 分母×分母"
      },
      {
        "name": "分数除法",
        "formula": "a/b ÷ c/d = a/b × d/c",
        "note": "翻转后相乘"
      },
      {
        "name": "百分数",
        "formula": "部分/整体 × 100%",
        "note": "利润率=(售价-成本)/成本"
      },
      {
        "name": "分数→小数",
        "formula": "3/4 = 3÷4 = 0.75",
        "note": "分子÷分母"
      }
    ]
  },
  {
    "id": "number_theory",
    "name": "数论",
    "icon": "💎",
    "color": "#7c3aed",
    "desc": "研究整数的深层性质——因数、质数、整除、余数",
    "mindmap": {
      "center": "数论",
      "branches": [
        {
          "name": "整除性",
          "children": [
            "整除判断规则",
            "因数与倍数",
            "GCD",
            "LCM"
          ]
        },
        {
          "name": "质数",
          "children": [
            "质数判定",
            "质因数分解",
            "唯一分解定理"
          ]
        },
        {
          "name": "数论技巧",
          "children": [
            "奇偶分析",
            "尾数规律",
            "完全平方数"
          ]
        }
      ]
    },
    "formulas": [
      {
        "name": "整除2",
        "formula": "末位是偶数",
        "note": "0,2,4,6,8"
      },
      {
        "name": "整除3",
        "formula": "各位数字和能被3整除",
        "note": "372→12→能整除"
      },
      {
        "name": "整除4",
        "formula": "末两位能被4整除",
        "note": "如1324→24÷4=6"
      },
      {
        "name": "GCD×LCM",
        "formula": "GCD(a,b)×LCM(a,b)=a×b",
        "note": "非常有用!"
      },
      {
        "name": "完全平方数",
        "formula": "质因数指数都是偶数",
        "note": "如36=2²×3²"
      }
    ]
  },
  {
    "id": "algebra",
    "name": "代数与方程",
    "icon": "⚖️",
    "color": "#2563eb",
    "desc": "用字母代替未知数，列方程解决问题",
    "mindmap": {
      "center": "代数",
      "branches": [
        {
          "name": "比与比例",
          "children": [
            "比的概念",
            "比例应用",
            "按比分配"
          ]
        },
        {
          "name": "方程",
          "children": [
            "一元一次方程",
            "列方程解应用题"
          ]
        },
        {
          "name": "数列",
          "children": [
            "等差数列",
            "数列求和",
            "规律寻找"
          ]
        },
        {
          "name": "行程问题",
          "children": [
            "速度×时间=距离",
            "相遇",
            "追及"
          ]
        }
      ]
    },
    "formulas": [
      {
        "name": "比例",
        "formula": "a:b = c:d → ad = bc",
        "note": "交叉相乘"
      },
      {
        "name": "等差通项",
        "formula": "aₙ = a₁ + (n-1)d",
        "note": "d=公差"
      },
      {
        "name": "等差求和",
        "formula": "S = n(a₁+aₙ)/2",
        "note": "首项+末项×项数÷2"
      },
      {
        "name": "行程",
        "formula": "距离 = 速度 × 时间",
        "note": "相遇时间=距离÷速度和"
      },
      {
        "name": "高斯求和",
        "formula": "1+2+...+n = n(n+1)/2",
        "note": ""
      }
    ]
  },
  {
    "id": "geometry",
    "name": "几何与测量",
    "icon": "📐",
    "color": "#059669",
    "desc": "图形的面积、周长、体积——看得见的数学",
    "mindmap": {
      "center": "几何",
      "branches": [
        {
          "name": "平面图形",
          "children": [
            "三角形面积",
            "四边形面积",
            "组合图形"
          ]
        },
        {
          "name": "圆",
          "children": [
            "圆周长",
            "圆面积",
            "扇形",
            "环形"
          ]
        },
        {
          "name": "坐标几何",
          "children": [
            "坐标系",
            "两点距离"
          ]
        }
      ]
    },
    "formulas": [
      {
        "name": "三角形面积",
        "formula": "S = 底×高÷2",
        "note": ""
      },
      {
        "name": "梯形面积",
        "formula": "S = (上底+下底)×高÷2",
        "note": ""
      },
      {
        "name": "圆周长",
        "formula": "C = 2πr = πd",
        "note": "π≈3.14159"
      },
      {
        "name": "圆面积",
        "formula": "S = πr²",
        "note": ""
      },
      {
        "name": "勾股定理",
        "formula": "a²+b²=c²",
        "note": "直角三角形斜边"
      },
      {
        "name": "两点距离",
        "formula": "d = √[(x₂-x₁)²+(y₂-y₁)²]",
        "note": ""
      }
    ]
  },
  {
    "id": "counting_prob",
    "name": "计数与概率",
    "icon": "🎲",
    "color": "#dc2626",
    "desc": "AMC8的王牌考点——排列组合与概率",
    "mindmap": {
      "center": "计数与概率",
      "branches": [
        {
          "name": "计数原理",
          "children": [
            "加法原理",
            "乘法原理",
            "分类讨论"
          ]
        },
        {
          "name": "排列组合",
          "children": [
            "排列(有序)",
            "组合(无序)"
          ]
        },
        {
          "name": "容斥原理",
          "children": [
            "两个集合",
            "补集思想"
          ]
        },
        {
          "name": "概率",
          "children": [
            "古典概型",
            "列举法",
            "补集概率"
          ]
        }
      ]
    },
    "formulas": [
      {
        "name": "加法原理",
        "formula": "方法A或B → N(A)+N(B)",
        "note": "互斥的方法相加"
      },
      {
        "name": "乘法原理",
        "formula": "步骤1然后2 → N(1)×N(2)",
        "note": "连续的步骤相乘"
      },
      {
        "name": "排列",
        "formula": "P(n,k) = n!/(n-k)!",
        "note": "从n个取k个有序"
      },
      {
        "name": "组合",
        "formula": "C(n,k) = n!/[k!(n-k)!]",
        "note": "从n个取k个无序"
      },
      {
        "name": "容斥",
        "formula": "|A∪B| = |A|+|B|-|A∩B|",
        "note": ""
      },
      {
        "name": "概率",
        "formula": "P = 有利结果数/总结果数",
        "note": "0≤P≤1"
      }
    ]
  },
  {
    "id": "data_logic",
    "name": "统计与逻辑",
    "icon": "📊",
    "color": "#ca8a04",
    "desc": "数据分析、图表阅读和逻辑推理",
    "mindmap": {
      "center": "统计与逻辑",
      "branches": [
        {
          "name": "统计量",
          "children": [
            "平均数",
            "中位数",
            "众数",
            "极差"
          ]
        },
        {
          "name": "图表",
          "children": [
            "条形图",
            "折线图",
            "饼图"
          ]
        },
        {
          "name": "逻辑推理",
          "children": [
            "排除法",
            "列表法",
            "逆向思维"
          ]
        }
      ]
    },
    "formulas": [
      {
        "name": "平均数",
        "formula": "平均数 = 总和÷个数",
        "note": ""
      },
      {
        "name": "中位数",
        "formula": "排序后最中间的数",
        "note": "偶数个取中间两数平均"
      },
      {
        "name": "众数",
        "formula": "出现次数最多的数",
        "note": "可以有多个"
      },
      {
        "name": "极差",
        "formula": "极差 = 最大值-最小值",
        "note": ""
      }
    ]
  }
];

const TOPICS = [
  {
    "id": "fractions",
    "name": "分数运算",
    "icon": "🍕",
    "theme": "numbers",
    "grade": "3-5年级",
    "gradeNum": 3,
    "amcFreq": 15,
    "difficulty": "基础",
    "desc": "分数加减乘除、约分通分",
    "realLifeHtml": "<div style=\"margin-bottom:12px;font-size:14px;line-height:1.8\">分数无处不在：分食物、量杯、打折，都是分数的实际应用！</div><div style=\"display:flex;gap:10px;flex-wrap:wrap\"><div style=\"flex:1;min-width:120px;max-width:160px;background:#dbeafe;border:2px solid #93c5fd;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">🍕</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">分披萨</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">8片取3片 = 3/8</div></div><div style=\"flex:1;min-width:120px;max-width:160px;background:#dcfce7;border:2px solid #86efac;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">🧪</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">量杯刻度</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">1/2杯面粉</div></div><div style=\"flex:1;min-width:120px;max-width:160px;background:#fef3c7;border:2px solid #fde68a;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">🏷️</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">打折标签</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">7折 = 70% = 7/10</div></div></div>",
    "examTips": "⚠️ AMC8常考\"连续取分数\"(如吃了1/4，剩余的1/3...)，注意每次的整体在变化",
    "commonMistakes": [
      "❌ 1/3 + 1/4 = 2/7 → ✅ 应该通分: 4/12 + 3/12 = 7/12",
      "❌ 分数乘法也通分 → ✅ 乘法直接分子×分子, 分母×分母",
      "❌ \"剩余的1/3\"当成\"全部的1/3\" → ✅ 注意每步的整体是谁"
    ],
    "prereqs": [],
    "glossary": [
      {
        "cn": "分数",
        "en": "Fraction",
        "pron": "FRAK-shun"
      },
      {
        "cn": "分子",
        "en": "Numerator",
        "pron": "NOO-muh-ray-ter"
      },
      {
        "cn": "分母",
        "en": "Denominator",
        "pron": "dih-NOM-ih-nay-ter"
      },
      {
        "cn": "约分",
        "en": "Simplify / Reduce",
        "pron": "SIM-plih-fy"
      },
      {
        "cn": "通分",
        "en": "Common Denominator",
        "pron": ""
      },
      {
        "cn": "倒数",
        "en": "Reciprocal",
        "pron": "reh-SIP-ruh-kul"
      },
      {
        "cn": "等值分数",
        "en": "Equivalent Fraction",
        "pron": ""
      },
      {
        "cn": "最大公因数",
        "en": "GCD",
        "pron": ""
      },
      {
        "cn": "最小公倍数",
        "en": "LCM",
        "pron": ""
      }
    ],
    "definitions": [
      {
        "term": "分数 (Fraction)",
        "def": "表示部分与整体关系的数。写作 a/b，分子 a 表示取几份，分母 b 表示共分几份。"
      },
      {
        "term": "约分 (Simplify)",
        "def": "把分数的分子和分母同时除以最大公因数。如 6/8 → 3/4。"
      },
      {
        "term": "通分 (Common Denominator)",
        "def": "把两个不同分母的分数化成相同分母。如 1/3 和 1/4 通分为 4/12 和 3/12。"
      },
      {
        "term": "倒数 (Reciprocal)",
        "def": "把分子和分母互换得到的数。如 2/3 的倒数是 3/2。两数之积为1。"
      }
    ],
    "videosCn": [
            {
                  "title": "洋葱学园 - 分数的意义(动画入门)",
                  "url": "https://www.bilibili.com/video/BV1Wb411H7GE/",
                  "searchUrl": "https://search.bilibili.com/all?keyword=分数的意义+小学+动画讲解&order=click"
            },
            {
                  "title": "分数乘法 - 为什么分子乘分子(画格子法)",
                  "url": "https://www.bilibili.com/video/BV1dT4y1c7Fb/",
                  "searchUrl": "https://search.bilibili.com/all?keyword=分数乘法+原理+画格子&order=click"
            },
            {
                  "title": "分数除法 - 为什么颠倒相乘",
                  "url": "https://www.bilibili.com/video/BV1uZ4y1M7Vx/",
                  "searchUrl": "https://search.bilibili.com/all?keyword=分数除法+颠倒相乘+原理&order=click"
            }
      ],
    "videosEn": [
      {
        "title": "Math Antics - What Are Fractions?",
        "url": "https://www.youtube.com/watch?v=n0FZhQ_GkKw",
        "searchUrl": "https://www.youtube.com/results?search_query=Math+Antics+fractions+introduction"
      },
      {
        "title": "Math Antics - Multiplying Fractions",
        "url": "https://www.youtube.com/watch?v=qmfXyR7Z6Lk",
        "searchUrl": "https://www.youtube.com/results?search_query=Math+Antics+multiplying+fractions"
      },
      {
        "title": "Math Antics - Dividing Fractions",
        "url": "https://www.youtube.com/watch?v=5juto2ze8Lg",
        "searchUrl": "https://www.youtube.com/results?search_query=Math+Antics+dividing+fractions"
      }
    ],
    "lessons": [
      {
        "title": "第1课：分数的含义与约分",
        "story": "一个大披萨切成8片，你吃了3片——你吃了 3/8！\n\n分数的分母是整体被分成的份数，分子是取了几份。\n\n约分就是换个说法但大小不变：2/4 和 1/2 是一样大的。",
        "keyPoints": [
          "分数 = 部分÷整体",
          "分母=总份数，分子=取几份",
          "约分：分子分母同除以最大公因数",
          "1/2 = 2/4 = 3/6（等值分数）"
        ],
        "visual": "<div style=\"font-weight:700;margin-bottom:8px;color:#4f46e5\">图解：3/8 是什么意思？（8片中蓝色3片）</div><div style=\"display:flex;gap:2px;flex-wrap:wrap\"><div style=\"width:25px;height:32px;background:#4f46e5;border-radius:4px\"></div><div style=\"width:25px;height:32px;background:#4f46e5;border-radius:4px\"></div><div style=\"width:25px;height:32px;background:#4f46e5;border-radius:4px\"></div><div style=\"width:25px;height:32px;background:#e2e8f0;border-radius:4px\"></div><div style=\"width:25px;height:32px;background:#e2e8f0;border-radius:4px\"></div><div style=\"width:25px;height:32px;background:#e2e8f0;border-radius:4px\"></div><div style=\"width:25px;height:32px;background:#e2e8f0;border-radius:4px\"></div><div style=\"width:25px;height:32px;background:#e2e8f0;border-radius:4px\"></div></div>",
        "textbook": "<div style=\"border:2px solid #3b82f6;border-radius:8px;overflow:hidden\"><div style=\"background:#3b82f6;color:#fff;padding:8px 14px;font-weight:700;font-size:14px\">📚 人教版 五年级上册 第四单元</div><div style=\"padding:14px;font-size:14px;line-height:2\"><p><strong>【知识要点】</strong>分数表示把一个整体平均分成若干份，取其中几份的数。</p><div style=\"background:#eff6ff;border-radius:6px;padding:10px;margin:10px 0;border-left:3px solid #3b82f6\"><strong>【例题】</strong> 把一根绳子平均分成5份，取其中3份，用分数表示是多少？<br><strong>解：</strong>整体分5份（分母=5），取3份（分子=3），所以是 <strong>3/5</strong>。</div><div style=\"background:#f0fdf4;border-radius:6px;padding:10px;border-left:3px solid #22c55e\"><strong>【练一练】</strong> 化简分数：(1) 8/12 (2) 15/20 (3) 6/9<br><span style=\"color:#666;font-size:12px\">答案：(1) 2/3 (2) 3/4 (3) 2/3</span></div></div></div>"
      },
      {
        "title": "第2课：加减法——为什么要通分？",
        "story": "1/3 + 1/4 能直接加吗？不能！因为每份大小不同。\n\n解决：把两块重新切成一样大的小块！\n1/3 = 4/12, 1/4 = 3/12\n4/12 + 3/12 = 7/12",
        "keyPoints": [
          "同分母直接加减分子",
          "不同分母→找最小公倍数→通分→再加减",
          "通分的本质：统一每份的大小"
        ],
        "visual": "<div style=\"font-weight:700;margin-bottom:10px;color:#4f46e5\">图解：通分步骤</div><div style=\"padding:10px;background:#eff6ff;border-radius:8px;font-size:14px;line-height:2\">1/3 + 1/4<br>→ 公分母 = LCM(3,4) = 12<br>→ 1/3 = 4/12，1/4 = 3/12<br>→ 4/12 + 3/12 = <strong style=\"color:#4f46e5\">7/12</strong></div>",
        "textbook": "<div style=\"border:2px solid #3b82f6;border-radius:8px;overflow:hidden\"><div style=\"background:#3b82f6;color:#fff;padding:8px 14px;font-weight:700;font-size:14px\">📚 人教版 五年级下册 分数加减法</div><div style=\"padding:14px;font-size:14px;line-height:2\"><p><strong>【知识要点】</strong>不同分母的分数相加减，需要先通分（找最小公倍数作为公分母）。</p><div style=\"background:#eff6ff;border-radius:6px;padding:10px;margin:10px 0;border-left:3px solid #3b82f6\"><strong>【例题】</strong> 1/2 + 1/3 = ?<br><strong>解：</strong>公分母=6。1/2=3/6，1/3=2/6。<br>3/6 + 2/6 = <strong>5/6</strong></div><div style=\"background:#f0fdf4;border-radius:6px;padding:10px;border-left:3px solid #22c55e\"><strong>【练一练】</strong> 计算：(1) 3/4 - 1/6 (2) 2/5 + 1/3<br><span style=\"color:#666;font-size:12px\">答案：(1)7/12 (2)11/15</span></div></div></div>"
      },
      {
        "title": "第3课：乘法——画格子秒懂",
        "story": "1/2 × 1/3 = ？想象一块巧克力：\n① 横切1刀→取1行=1/2（蓝色）\n② 竖切2刀→在蓝色取1列\n\n总格2×3=6格，取1格 → 答案1/6\n\n\"的\"就是\"乘\"：半个苹果的1/3 = 1/2 × 1/3",
        "keyPoints": [
          "a/b × c/d = (a×c)/(b×d)",
          "画格子：横切×竖切=总格数，选中格=分子之积",
          "\"的\"就是\"乘\"",
          "乘以小于1的数→结果变小"
        ],
        "visual": "<div style=\"font-weight:700;margin-bottom:10px;color:#4f46e5\">图解：1/2 × 1/3 = 1/6</div><div style=\"display:grid;grid-template-columns:repeat(3,48px);gap:3px;margin-bottom:8px\"><div style=\"height:40px;background:#312e81;border-radius:4px;border:2px solid #1e1b4b\"></div><div style=\"height:40px;background:#bfdbfe;border-radius:4px\"></div><div style=\"height:40px;background:#bfdbfe;border-radius:4px\"></div><div style=\"height:40px;background:#f1f5f9;border-radius:4px\"></div><div style=\"height:40px;background:#f1f5f9;border-radius:4px\"></div><div style=\"height:40px;background:#f1f5f9;border-radius:4px\"></div></div><div style=\"font-size:13px;color:#64748b\">深蓝1格 ÷ 总6格 = <strong style=\"color:#4f46e5\">1/6</strong></div>",
        "textbook": "<div style=\"border:2px solid #3b82f6;border-radius:8px;overflow:hidden\"><div style=\"background:#3b82f6;color:#fff;padding:8px 14px;font-weight:700;font-size:14px\">📚 人教版 六年级上册 分数乘法</div><div style=\"padding:14px;font-size:14px;line-height:2\"><p><strong>【知识要点】</strong>分数乘分数：分子×分子作新分子，分母×分母作新分母。可先约分再算更简便。</p><div style=\"background:#eff6ff;border-radius:6px;padding:10px;margin:10px 0;border-left:3px solid #3b82f6\"><strong>【例题】</strong> 2/3 × 3/5 = ?<br><strong>解：</strong>(2×3)/(3×5) = 6/15 = <strong>2/5</strong>。<br>先约分更快：3和3约去→(2/1)×(1/5)=2/5</div><div style=\"background:#f0fdf4;border-radius:6px;padding:10px;border-left:3px solid #22c55e\"><strong>【练一练】</strong> 计算：(1) 3/4 × 2/9 (2) 5/6 × 3/10<br><span style=\"color:#666;font-size:12px\">答案：(1)1/6 (2)1/4</span></div></div></div>"
      },
      {
        "title": "第4课：除法——为什么翻转相乘？",
        "story": "3块披萨，每盘放1/2块，能装几盘？\n3 ÷ 1/2 = ？每块切半，3块→6份 → 6盘！\n\n原理：除以1/2 = \"有几个1/2\" = 每个整体里有2个1/2 → 乘以2\n\n一般规律：除以一个数 = 乘以它的倒数",
        "keyPoints": [
          "倒数：分子分母互换，如2/3↔3/2",
          "除以分数 = 乘以倒数",
          "口诀：除号变乘号，后面翻个身",
          "÷小于1的数→结果变大"
        ],
        "visual": "<div style=\"font-weight:700;margin-bottom:10px;color:#4f46e5\">图解：除法步骤</div><div style=\"padding:10px;background:#eff6ff;border-radius:8px;font-size:14px;line-height:2\">3 ÷ 1/2<br>→ 1/2的倒数是 2/1 = 2<br>→ 3 × 2 = <strong style=\"color:#4f46e5\">6</strong><br><span style=\"font-size:12px;color:#64748b\">验证：6个1/2 = 6÷2 = 3 ✓</span></div>",
        "textbook": "<div style=\"border:2px solid #3b82f6;border-radius:8px;overflow:hidden\"><div style=\"background:#3b82f6;color:#fff;padding:8px 14px;font-weight:700;font-size:14px\">📚 人教版 六年级上册 分数除法</div><div style=\"padding:14px;font-size:14px;line-height:2\"><p><strong>【知识要点】</strong>除以一个不等于0的数，等于乘以这个数的倒数。</p><div style=\"background:#eff6ff;border-radius:6px;padding:10px;margin:10px 0;border-left:3px solid #3b82f6\"><strong>【例题】</strong> 3/4 ÷ 3/8 = ?<br><strong>解：</strong>3/8的倒数=8/3。<br>3/4 × 8/3 = 24/12 = <strong>2</strong></div><div style=\"background:#f0fdf4;border-radius:6px;padding:10px;border-left:3px solid #22c55e\"><strong>【练一练】</strong> 计算：(1) 2/3 ÷ 4 (2) 5/6 ÷ 2/3<br><span style=\"color:#666;font-size:12px\">答案：(1)1/6 (2)5/4</span></div></div></div>"
      }
    ],
    "practice": {
      "basic": [
        {
          "q": "3/8 + 2/8 = ?",
          "options": [
            "5/16",
            "5/8",
            "1/8",
            "6/8"
          ],
          "answer": 1,
          "explain": "同分母直接加：(3+2)/8=5/8"
        },
        {
          "q": "1/2 + 1/3 = ?",
          "options": [
            "2/5",
            "5/6",
            "1/5",
            "3/6"
          ],
          "answer": 1,
          "explain": "通分→3/6+2/6=5/6"
        },
        {
          "q": "1/3 × 1/5 = ?",
          "options": [
            "2/8",
            "1/15",
            "1/8",
            "2/15"
          ],
          "answer": 1,
          "explain": "(1×1)/(3×5)=1/15"
        },
        {
          "q": "6 ÷ 1/3 = ?",
          "options": [
            "2",
            "18",
            "6/3",
            "1/2"
          ],
          "answer": 1,
          "explain": "6×3=18（6里面有18个1/3）"
        },
        {
          "q": "0.75变成分数是?",
          "options": [
            "7/5",
            "3/4",
            "75/10",
            "7/50"
          ],
          "answer": 1,
          "explain": "0.75=75/100=3/4"
        }
      ],
      "advanced": [
        {
          "q": "2/3 × 3/4 × 4/5 = ?",
          "options": [
            "24/60",
            "2/5",
            "1/3",
            "6/12"
          ],
          "answer": 1,
          "explain": "连续约分：(2×3×4)/(3×4×5)=24/60=2/5"
        },
        {
          "q": "一杯果汁500ml倒出1/4后又喝了剩余的1/3，还剩多少ml？",
          "options": [
            "250",
            "200",
            "375",
            "125"
          ],
          "answer": 0,
          "explain": "倒出后剩375ml,再喝375×1/3=125ml,剩250ml"
        },
        {
          "q": "3/4 ÷ 3/8 = ?",
          "options": [
            "9/32",
            "1/2",
            "2",
            "8/4"
          ],
          "answer": 2,
          "explain": "3/4×8/3=24/12=2"
        }
      ],
      "amc": [
        {
          "q": "[2023 #1] (8×4+2)−(8+4×2) = ?",
          "options": [
            "0",
            "6",
            "10",
            "18",
            "24"
          ],
          "answer": 3,
          "explain": "先乘后加：(32+2)-(8+8)=34-16=18",
          "year": 2023,
          "num": 1
        },
        {
          "q": "[2023 #10] Harold吃1/4派，驼鹿吃剩余1/3，豪猪吃再剩余1/3。还剩?",
          "options": [
            "1/12",
            "1/6",
            "1/4",
            "1/3",
            "5/12"
          ],
          "answer": 3,
          "explain": "剩3/4→吃(3/4)×(1/3)=1/4剩1/2→吃(1/2)×(1/3)=1/6剩1/3",
          "year": 2023,
          "num": 10
        },
        {
          "q": "[2022 #8] (1/3)(2/4)(3/5)×...×(20/22)=?",
          "options": [
            "1/462",
            "1/231",
            "1/132",
            "2/213",
            "1/22"
          ],
          "answer": 1,
          "explain": "大量约消后分子剩1×2=2，分母剩21×22=462，结果2/462=1/231",
          "year": 2022,
          "num": 8
        }
      ]
    }
  },
  {
    "id": "percent",
    "name": "百分数应用",
    "icon": "📊",
    "theme": "numbers",
    "grade": "6年级",
    "gradeNum": 6,
    "amcFreq": 5,
    "difficulty": "基础",
    "desc": "折扣、利润率、浓度问题",
    "realLifeHtml": "<div style=\"margin-bottom:12px;font-size:14px;line-height:1.8\">百分数在购物、考试、金融中随处可见！</div><div style=\"display:flex;gap:10px;flex-wrap:wrap\"><div style=\"flex:1;min-width:120px;max-width:160px;background:#dbeafe;border:2px solid #93c5fd;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">🏷️</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">商场打折</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">8折 = 80%</div></div><div style=\"flex:1;min-width:120px;max-width:160px;background:#dcfce7;border:2px solid #86efac;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">📝</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">考试成绩</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">90分 = 90%</div></div><div style=\"flex:1;min-width:120px;max-width:160px;background:#fef3c7;border:2px solid #fde68a;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">🏦</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">银行利息</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">年利率3%</div></div></div>",
    "examTips": "⚠️ AMC8常在文字题中隐含百分数",
    "commonMistakes": [
      "❌ 涨20%再降20%回到原价 → ✅ 100×1.2×0.8=96，亏了！",
      "❌ 利润率=利润/售价 → ✅ 利润率=利润/成本"
    ],
    "prereqs": [
      "fractions"
    ],
    "glossary": [
      {
        "cn": "百分数",
        "en": "Percent/Percentage",
        "pron": "per-SENT"
      },
      {
        "cn": "折扣",
        "en": "Discount",
        "pron": "DIS-count"
      },
      {
        "cn": "利润",
        "en": "Profit",
        "pron": "PRAH-fit"
      },
      {
        "cn": "利润率",
        "en": "Profit Margin",
        "pron": ""
      }
    ],
    "definitions": [
      {
        "term": "百分数 (Percent)",
        "def": "以100为基准的比率。25% = 25/100 = 0.25。"
      },
      {
        "term": "利润率 (Profit Margin)",
        "def": "利润率 = (售价-成本)/成本 × 100%。分母是成本不是售价。"
      }
    ],
    "videosCn": [
            {
                  "title": "百分数的认识 - 小学动画",
                  "url": "https://www.bilibili.com/video/BV1y5411c7fo/",
                  "searchUrl": "https://search.bilibili.com/all?keyword=百分数+小学+动画讲解&order=click"
            },
            {
                  "title": "李永乐老师 - 折扣和利润率",
                  "url": "https://www.bilibili.com/video/BV1UE411M7Gc/",
                  "searchUrl": "https://search.bilibili.com/all?keyword=折扣+利润率+李永乐&order=click"
            }
      ],
    "videosEn": [
      {
        "title": "Math Antics - What Are Percentages?",
        "url": "https://www.youtube.com/watch?v=JeVSmq1Nrpw",
        "searchUrl": "https://www.youtube.com/results?search_query=Math+Antics+percentages"
      },
      {
        "title": "Math Antics - Finding A Percent",
        "url": "https://www.youtube.com/watch?v=rR95Cbcjzus",
        "searchUrl": "https://www.youtube.com/results?search_query=Math+Antics+percent+of+number"
      }
    ],
    "lessons": [
      {
        "title": "百分数与生活",
        "story": "商场写着\"全场8折\"——原价100元只要付80元！\n百分数就是\"以100为分母的分数\"：80% = 80/100 = 0.8",
        "keyPoints": [
          "百分数=分母为100的分数",
          "折扣：8折=×0.8",
          "利润率=(售价-成本)/成本×100%"
        ],
        "visual": "<div style=\"display:grid;grid-template-columns:repeat(10,1fr);gap:2px;max-width:220px\"><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#e2e8f0;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#e2e8f0;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#e2e8f0;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#e2e8f0;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#e2e8f0;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#e2e8f0;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#e2e8f0;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#e2e8f0;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#e2e8f0;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#e2e8f0;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#e2e8f0;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#e2e8f0;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#e2e8f0;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#e2e8f0;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#e2e8f0;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#e2e8f0;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#e2e8f0;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#e2e8f0;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#e2e8f0;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#e2e8f0;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#e2e8f0;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#e2e8f0;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#e2e8f0;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#e2e8f0;border-radius:2px\"></div><div style=\"aspect-ratio:1;background:#e2e8f0;border-radius:2px\"></div></div><div style=\"margin-top:8px;font-size:13px;color:var(--text2)\">蓝色75格 = <strong>75%</strong>（如考试75分）</div>",
        "textbook": "<div style=\"border:2px solid #3b82f6;border-radius:8px;overflow:hidden\"><div style=\"background:#3b82f6;color:#fff;padding:8px 14px;font-weight:700;font-size:14px\">📚 人教版 六年级上册 第一单元</div><div style=\"padding:14px;font-size:14px;line-height:2\"><p><strong>【知识要点】</strong>百分数表示一个数是另一个数的百分之几。利润率=(售价-成本)/成本×100%。</p><div style=\"background:#eff6ff;border-radius:6px;padding:10px;margin:10px 0;border-left:3px solid #3b82f6\"><strong>【例题】</strong> 一件衣服成本80元，售价100元，利润率是多少？<br><strong>解：</strong>利润=20元，利润率=20÷80×100%=<strong>25%</strong></div><div style=\"background:#f0fdf4;border-radius:6px;padding:10px;border-left:3px solid #22c55e\"><strong>【练一练】</strong> 商品成本50元，售价65元，利润率？<br><span style=\"color:#666;font-size:12px\">答案：30%</span></div></div></div>"
      }
    ],
    "practice": {
      "basic": [
        {
          "q": "原价200元打7折多少钱？",
          "options": [
            "140",
            "160",
            "70",
            "130"
          ],
          "answer": 0,
          "explain": "200×0.7=140"
        },
        {
          "q": "成本80售价100，利润率？",
          "options": [
            "20%",
            "25%",
            "80%",
            "125%"
          ],
          "answer": 1,
          "explain": "20/80=25%"
        }
      ],
      "advanced": [
        {
          "q": "商品涨25%再降20%，最终是原价的？",
          "options": [
            "100%",
            "105%",
            "95%",
            "80%"
          ],
          "answer": 0,
          "explain": "1.25×0.8=1.00=100%"
        }
      ],
      "amc": []
    }
  },
  {
    "id": "divisibility",
    "name": "因数/倍数/整除",
    "icon": "🔢",
    "theme": "number_theory",
    "grade": "5年级",
    "gradeNum": 5,
    "amcFreq": 10,
    "difficulty": "基础",
    "desc": "整除判断、GCD与LCM",
    "realLifeHtml": "<div style=\"margin-bottom:12px;font-size:14px;line-height:1.8\">因数和倍数让时间、日历和工程设计更有规律！</div><div style=\"display:flex;gap:10px;flex-wrap:wrap\"><div style=\"flex:1;min-width:120px;max-width:160px;background:#dbeafe;border:2px solid #93c5fd;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">⏰</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">1小时60分钟</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">60的因数最多！</div></div><div style=\"flex:1;min-width:120px;max-width:160px;background:#dcfce7;border:2px solid #86efac;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">📅</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">一周7天</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">日历的规律</div></div><div style=\"flex:1;min-width:120px;max-width:160px;background:#fef3c7;border:2px solid #fde68a;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">⚙️</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">齿轮设计</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">齿数用LCM</div></div></div>",
    "examTips": "⚠️ AMC8最常考整除规则快速排除选项",
    "commonMistakes": [
      "❌ GCD和LCM搞混 → ✅ GCD取小,LCM取大",
      "❌ 4的整除看末位 → ✅ 看末两位"
    ],
    "prereqs": [],
    "glossary": [
      {
        "cn": "因数/因子",
        "en": "Factor/Divisor",
        "pron": "FAK-ter"
      },
      {
        "cn": "倍数",
        "en": "Multiple",
        "pron": "MUL-tih-pul"
      },
      {
        "cn": "整除",
        "en": "Divisible",
        "pron": "dih-VIZ-ih-bul"
      },
      {
        "cn": "最大公因数",
        "en": "GCD",
        "pron": ""
      },
      {
        "cn": "最小公倍数",
        "en": "LCM",
        "pron": ""
      }
    ],
    "definitions": [
      {
        "term": "因数 (Factor)",
        "def": "如果 a÷b 没有余数，则 b 是 a 的因数。如 3 是 12 的因数，因为 12÷3=4。"
      },
      {
        "term": "GCD 最大公因数",
        "def": "两个数共有因数中最大的。GCD(12,18)=6。"
      },
      {
        "term": "LCM 最小公倍数",
        "def": "两个数共有倍数中最小的。LCM(4,6)=12。"
      }
    ],
    "videosCn": [
            {
                  "title": "乐乐课堂 - 因数和倍数(动画3分钟)",
                  "url": "https://www.bilibili.com/video/BV1Vb411H7cS/",
                  "searchUrl": "https://search.bilibili.com/all?keyword=因数倍数+小学+动画&order=click"
            },
            {
                  "title": "整除判断技巧大全(2/3/4/5/9/11)",
                  "url": "https://www.bilibili.com/video/BV1gJ411D7cN/",
                  "searchUrl": "https://search.bilibili.com/all?keyword=整除判断规则+技巧+小学&order=click"
            },
            {
                  "title": "最大公因数和最小公倍数(动画)",
                  "url": "https://www.bilibili.com/video/BV1WE411A7fK/",
                  "searchUrl": "https://search.bilibili.com/all?keyword=最大公因数+最小公倍数+动画讲解&order=click"
            }
      ],
    "videosEn": [
      {
        "title": "Math Antics - Factors and Multiples",
        "url": "https://www.youtube.com/watch?v=vcn2ruTOwFo",
        "searchUrl": "https://www.youtube.com/results?search_query=Math+Antics+factors+multiples"
      },
      {
        "title": "Math Antics - Greatest Common Factor",
        "url": "https://www.youtube.com/watch?v=JdME2jIG-ik",
        "searchUrl": "https://www.youtube.com/results?search_query=Math+Antics+greatest+common+factor"
      },
      {
        "title": "Khan Academy - Divisibility Rules",
        "url": "https://www.youtube.com/watch?v=M5VGKRTnfkE",
        "searchUrl": "https://www.youtube.com/results?search_query=Khan+Academy+divisibility+rules"
      }
    ],
    "lessons": [
      {
        "title": "因数和倍数",
        "story": "12个糖果分人：1×12, 2×6, 3×4... 这些1,2,3,4,6,12就是12的因数。\n\n为什么一小时60分钟？因为60的因数特别多！",
        "keyPoints": [
          "a÷b=整数 → b是a的因数",
          "整除口诀: 2看末位, 3看各位和, 5看末位0/5",
          "GCD=最大公因数, LCM=最小公倍数"
        ],
        "visual": "<div style=\"font-weight:700;margin-bottom:10px;color:var(--p)\">整除规则速查卡</div><div style=\"display:flex;flex-direction:column;gap:6px;font-size:13px\"><div style=\"padding:6px 10px;background:#dbeafe;border-radius:8px\"><strong>÷2：</strong>末位偶数 | 34✓ 35✗</div><div style=\"padding:6px 10px;background:#dcfce7;border-radius:8px\"><strong>÷3：</strong>各位数字和÷3 | 372:3+7+2=12✓</div><div style=\"padding:6px 10px;background:#fef3c7;border-radius:8px\"><strong>÷4：</strong>末两位÷4 | 1324:24÷4=6✓</div><div style=\"padding:6px 10px;background:#fce7f3;border-radius:8px\"><strong>÷5：</strong>末位0或5 | 35✓ 37✗</div><div style=\"padding:6px 10px;background:#ede9fe;border-radius:8px\"><strong>÷9：</strong>各位数字和÷9 | 729:18✓</div></div>",
        "textbook": "<div style=\"border:2px solid #3b82f6;border-radius:8px;overflow:hidden\"><div style=\"background:#3b82f6;color:#fff;padding:8px 14px;font-weight:700;font-size:14px\">📚 人教版 五年级上册 第三单元</div><div style=\"padding:14px;font-size:14px;line-height:2\"><p><strong>【知识要点】</strong>如果a÷b结果是整数，b是a的因数，a是b的倍数。</p><div style=\"background:#eff6ff;border-radius:6px;padding:10px;margin:10px 0;border-left:3px solid #3b82f6\"><strong>【例题】</strong> 写出18的全部因数。<br><strong>解：</strong>18÷1=18, 18÷2=9, 18÷3=6...<br>18的因数：1,2,3,6,9,18（共6个）</div><div style=\"background:#f0fdf4;border-radius:6px;padding:10px;border-left:3px solid #22c55e\"><strong>【练一练】</strong> 写出24的全部因数有几个？<br><span style=\"color:#666;font-size:12px\">答案：1,2,3,4,6,8,12,24，共8个</span></div></div></div>"
      },
      {
        "title": "GCD与LCM详解",
        "story": "GCD(12,18)=6——最大公因数\nLCM(4,6)=12——最小公倍数\n\n重要规律：GCD×LCM = 两数之积！",
        "keyPoints": [
          "GCD:质因数分解取公共部分",
          "LCM:质因数分解取最大幂次",
          "GCD(a,b)×LCM(a,b)=a×b"
        ],
        "visual": "<div style=\"display:grid;grid-template-columns:1fr 1fr;gap:10px;font-size:13px\"><div style=\"padding:10px;background:#dbeafe;border-radius:8px;text-align:center\"><div style=\"font-size:18px;font-weight:800;color:#1e40af\">GCD</div><div>GCD(12,18)=<strong>6</strong></div><div style=\"font-size:11px;color:#64748b\">12=2²×3, 18=2×3²</div></div><div style=\"padding:10px;background:#dcfce7;border-radius:8px;text-align:center\"><div style=\"font-size:18px;font-weight:800;color:#166534\">LCM</div><div>LCM(4,6)=<strong>12</strong></div><div style=\"font-size:11px;color:#64748b\">4=2², 6=2×3</div></div></div><div style=\"margin-top:8px;padding:8px;background:#f0fdf4;border-radius:8px;font-size:13px;text-align:center\"><strong>GCD × LCM = 两数之积</strong></div>",
        "textbook": "<div style=\"border:2px solid #3b82f6;border-radius:8px;overflow:hidden\"><div style=\"background:#3b82f6;color:#fff;padding:8px 14px;font-weight:700;font-size:14px\">📚 人教版 五年级上册</div><div style=\"padding:14px;font-size:14px;line-height:2\"><p><strong>【知识要点】</strong>最大公因数用质因数分解法求，取公共部分；最小公倍数取最高幂次。</p><div style=\"background:#eff6ff;border-radius:6px;padding:10px;margin:10px 0;border-left:3px solid #3b82f6\"><strong>【例题】</strong> 求GCD(24,36)和LCM(24,36)。<br><strong>解：</strong>24=2³×3，36=2²×3²<br>GCD=2²×3=<strong>12</strong>，LCM=2³×3²=<strong>72</strong></div><div style=\"background:#f0fdf4;border-radius:6px;padding:10px;border-left:3px solid #22c55e\"><strong>【练一练】</strong> 验证：12×72=864=24×36 ✓</div></div></div>"
      }
    ],
    "practice": {
      "basic": [
        {
          "q": "哪个数同时被2和3整除？",
          "options": [
            "35",
            "42",
            "44",
            "55"
          ],
          "answer": 1,
          "explain": "42偶数(÷2✓),4+2=6(÷3✓)"
        },
        {
          "q": "18的因数有几个？",
          "options": [
            "4",
            "5",
            "6",
            "8"
          ],
          "answer": 2,
          "explain": "1,2,3,6,9,18共6个"
        },
        {
          "q": "GCD(20,30)=?",
          "options": [
            "5",
            "10",
            "15",
            "60"
          ],
          "answer": 1,
          "explain": "10"
        },
        {
          "q": "LCM(6,8)=?",
          "options": [
            "14",
            "24",
            "48",
            "2"
          ],
          "answer": 1,
          "explain": "24"
        }
      ],
      "advanced": [
        {
          "q": "100以内同时是4和6的倍数有几个？",
          "options": [
            "8",
            "16",
            "12",
            "4"
          ],
          "answer": 0,
          "explain": "LCM=12，100÷12=8余4→8个"
        }
      ],
      "amc": [
        {
          "q": "[2025 #6] 15,16,17,18,19擦一个使剩余和被4整除，擦哪个？",
          "options": [
            "15",
            "16",
            "17",
            "18",
            "19"
          ],
          "answer": 2,
          "explain": "总和85，85-17=68=4×17✓",
          "year": 2025,
          "num": 6
        }
      ]
    }
  },
  {
    "id": "primes",
    "name": "质数与质因数分解",
    "icon": "💎",
    "theme": "number_theory",
    "grade": "5年级",
    "gradeNum": 5,
    "amcFreq": 7,
    "difficulty": "中等",
    "desc": "质数判定、质因数分解",
    "realLifeHtml": "<div style=\"margin-bottom:12px;font-size:14px;line-height:1.8\">质数是数学的原子，在密码学和自然界中都有应用！</div><div style=\"display:flex;gap:10px;flex-wrap:wrap\"><div style=\"flex:1;min-width:120px;max-width:160px;background:#dbeafe;border:2px solid #93c5fd;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">🔐</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">RSA加密</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">基于大质数</div></div><div style=\"flex:1;min-width:120px;max-width:160px;background:#dcfce7;border:2px solid #86efac;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">🦗</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">蝉的周期</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">13/17年(质数)</div></div><div style=\"flex:1;min-width:120px;max-width:160px;background:#fef3c7;border:2px solid #fde68a;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">📊</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">条形码</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">校验码原理</div></div></div>",
    "examTips": "⚠️ AMC8难题常考完全平方数的质因数特征",
    "commonMistakes": [
      "❌ 1是质数 → ✅ 1既不是质数也不是合数",
      "❌ 51是质数 → ✅ 51=3×17"
    ],
    "prereqs": [
      "divisibility"
    ],
    "glossary": [
      {
        "cn": "质数/素数",
        "en": "Prime Number",
        "pron": "PRYME"
      },
      {
        "cn": "合数",
        "en": "Composite Number",
        "pron": "kum-PAH-zit"
      },
      {
        "cn": "质因数分解",
        "en": "Prime Factorization",
        "pron": ""
      },
      {
        "cn": "完全平方数",
        "en": "Perfect Square",
        "pron": ""
      }
    ],
    "definitions": [
      {
        "term": "质数 (Prime)",
        "def": "大于1且只能被1和自身整除的正整数。2是最小的质数，也是唯一的偶数质数。"
      },
      {
        "term": "合数 (Composite)",
        "def": "大于1且有两个以上因数的正整数。1既不是质数也不是合数。"
      }
    ],
    "videosCn": [
            {
                  "title": "李永乐 - 质数有什么用？(RSA加密)",
                  "url": "https://www.bilibili.com/video/BV1V4411U7sN/",
                  "searchUrl": "https://search.bilibili.com/all?keyword=质数+用途+RSA加密+李永乐&order=click"
            },
            {
                  "title": "妈咪说 - 蝉为什么选质数年份繁殖？",
                  "url": "https://www.bilibili.com/video/BV1Mx411G7kR/",
                  "searchUrl": "https://search.bilibili.com/all?keyword=蝉+质数+周期+生物数学&order=click"
            },
            {
                  "title": "质因数分解方法详解(小学奥数)",
                  "url": "https://www.bilibili.com/video/BV1gE411T7NC/",
                  "searchUrl": "https://search.bilibili.com/all?keyword=质因数分解+小学奥数+方法&order=click"
            }
      ],
    "videosEn": [
      {
        "title": "Math Antics - Prime Factorization",
        "url": "https://www.youtube.com/watch?v=ZKhRkxB_NG0",
        "searchUrl": "https://www.youtube.com/results?search_query=Math+Antics+prime+factorization"
      },
      {
        "title": "Numberphile - Primes are like atoms",
        "url": "https://www.youtube.com/watch?v=M7kEpw1tn50",
        "searchUrl": "https://www.youtube.com/results?search_query=Numberphile+primes+atoms"
      }
    ],
    "lessons": [
      {
        "title": "质数——数学的原子",
        "story": "60 = 2²×3×5\n\n100以内25个质数要背熟：2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97",
        "keyPoints": [
          "质数：只有1和自身两个因数",
          "2是唯一偶数质数",
          "质因数分解：写成质数乘积",
          "判质：试除到√n"
        ],
        "visual": "<div style=\"font-weight:700;margin-bottom:8px\">100以内质数筛（蓝色=质数，共25个）</div><div style=\"display:grid;grid-template-columns:repeat(10,1fr);gap:2px;font-size:10px\"><div style=\"aspect-ratio:1;background:#fef3c7;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#92400e;font-weight:400;font-size:10px\">1</div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:10px\">2</div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:10px\">3</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">4</div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:10px\">5</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">6</div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:10px\">7</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">8</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">9</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">10</div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:10px\">11</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">12</div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:10px\">13</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">14</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">15</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">16</div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:10px\">17</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">18</div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:10px\">19</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">20</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">21</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">22</div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:10px\">23</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">24</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">25</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">26</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">27</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">28</div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:10px\">29</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">30</div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:10px\">31</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">32</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">33</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">34</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">35</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">36</div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:10px\">37</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">38</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">39</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">40</div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:10px\">41</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">42</div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:10px\">43</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">44</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">45</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">46</div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:10px\">47</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">48</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">49</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">50</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">51</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">52</div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:10px\">53</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">54</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">55</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">56</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">57</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">58</div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:10px\">59</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">60</div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:10px\">61</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">62</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">63</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">64</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">65</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">66</div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:10px\">67</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">68</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">69</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">70</div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:10px\">71</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">72</div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:10px\">73</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">74</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">75</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">76</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">77</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">78</div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:10px\">79</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">80</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">81</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">82</div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:10px\">83</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">84</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">85</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">86</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">87</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">88</div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:10px\">89</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">90</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">91</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">92</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">93</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">94</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">95</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">96</div><div style=\"aspect-ratio:1;background:#4f46e5;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:10px\">97</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">98</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">99</div><div style=\"aspect-ratio:1;background:#f1f5f9;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:400;font-size:10px\">100</div></div><div style=\"margin-top:6px;font-size:11px;color:#64748b\">蓝色=质数 | 黄色=1（特殊）</div>",
        "textbook": "<div style=\"border:2px solid #3b82f6;border-radius:8px;overflow:hidden\"><div style=\"background:#3b82f6;color:#fff;padding:8px 14px;font-weight:700;font-size:14px\">📚 人教版 五年级上册 质数与合数</div><div style=\"padding:14px;font-size:14px;line-height:2\"><p><strong>【知识要点】</strong>质数：只有1和本身两个因数。合数：有两个以上因数。1既不是质数也不是合数。</p><div style=\"background:#eff6ff;border-radius:6px;padding:10px;margin:10px 0;border-left:3px solid #3b82f6\"><strong>【例题】</strong> 60分解质因数。<br><strong>解：</strong>60=2×30=2×2×15=2×2×3×5=<strong>2²×3×5</strong></div><div style=\"background:#f0fdf4;border-radius:6px;padding:10px;border-left:3px solid #22c55e\"><strong>【练一练】</strong> 分解质因数：(1)36 (2)48<br><span style=\"color:#666;font-size:12px\">答案：(1)2²×3² (2)2⁴×3</span></div></div></div>"
      }
    ],
    "practice": {
      "basic": [
        {
          "q": "哪个是质数？",
          "options": [
            "39",
            "51",
            "57",
            "59"
          ],
          "answer": 3,
          "explain": "59只被1和59整除"
        },
        {
          "q": "84分解质因数?",
          "options": [
            "2²×3×7",
            "2×3²×7",
            "2²×21",
            "4×21"
          ],
          "answer": 0,
          "explain": "84=2²×3×7"
        }
      ],
      "advanced": [
        {
          "q": "完全平方数末位不可能是？",
          "options": [
            "4",
            "5",
            "6",
            "8"
          ],
          "answer": 3,
          "explain": "末位只能是0,1,4,5,6,9"
        }
      ],
      "amc": [
        {
          "q": "[2025 #23] 四位数末两位99,差1是完全平方,恰两个质因数,有几个?",
          "options": [
            "0",
            "1",
            "2",
            "3",
            "4"
          ],
          "answer": 1,
          "explain": "只有3599=59×61",
          "year": 2025,
          "num": 23
        }
      ]
    }
  },
  {
    "id": "number_tricks",
    "name": "数论技巧",
    "icon": "🧩",
    "theme": "number_theory",
    "grade": "竞赛",
    "gradeNum": 8,
    "amcFreq": 4,
    "difficulty": "困难",
    "desc": "奇偶分析、尾数规律、余数",
    "realLifeHtml": "<div style=\"margin-bottom:12px;font-size:14px;line-height:1.8\">奇偶性和尾数规律帮助快速判断和解题！</div><div style=\"display:flex;gap:10px;flex-wrap:wrap\"><div style=\"flex:1;min-width:120px;max-width:160px;background:#dbeafe;border:2px solid #93c5fd;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">🏅</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">奥运年份</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">都是4的倍数</div></div><div style=\"flex:1;min-width:120px;max-width:160px;background:#dcfce7;border:2px solid #86efac;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">🪪</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">身份证末位</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">余数校验码</div></div><div style=\"flex:1;min-width:120px;max-width:160px;background:#fef3c7;border:2px solid #fde68a;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">🔢</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">幂次尾数</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">2的幂:2,4,8,6循环</div></div></div>",
    "examTips": "⚠️ AMC8后5题常用尾数分析和奇偶分析快速排除",
    "commonMistakes": [
      "❌ 2的幂次尾数无规律 → ✅ 2,4,8,6循环(周期4)"
    ],
    "prereqs": [
      "primes"
    ],
    "glossary": [
      {
        "cn": "奇数",
        "en": "Odd Number",
        "pron": ""
      },
      {
        "cn": "偶数",
        "en": "Even Number",
        "pron": ""
      },
      {
        "cn": "尾数/末位",
        "en": "Units Digit",
        "pron": ""
      },
      {
        "cn": "余数",
        "en": "Remainder",
        "pron": ""
      },
      {
        "cn": "周期",
        "en": "Period/Cycle",
        "pron": ""
      }
    ],
    "definitions": [
      {
        "term": "奇偶性 (Parity)",
        "def": "整数分为奇数(不能被2整除)和偶数(能被2整除)。奇偶分析可快速排除不可能的答案。"
      },
      {
        "term": "尾数规律",
        "def": "一个数的幂次的个位数字会周期性重复。如2的幂次尾数：2,4,8,6,2,4,8,6...周期为4。"
      }
    ],
    "videosCn": [
            {
                  "title": "奇偶性分析秒解难题(竞赛技巧)",
                  "url": "https://www.bilibili.com/video/BV1VE411n7uh/",
                  "searchUrl": "https://search.bilibili.com/all?keyword=奇偶性+数学竞赛+技巧&order=click"
            },
            {
                  "title": "尾数规律与周期(幂次末位数)",
                  "url": "https://www.bilibili.com/video/BV1CE411F7nP/",
                  "searchUrl": "https://search.bilibili.com/all?keyword=尾数规律+幂次+末位数字&order=click"
            }
      ],
    "videosEn": [
      {
        "title": "Art of Problem Solving - Parity",
        "url": "https://www.youtube.com/watch?v=ycLqNjBRnOU",
        "searchUrl": "https://www.youtube.com/results?search_query=parity+odd+even+math+competition"
      }
    ],
    "lessons": [
      {
        "title": "奇偶分析与尾数",
        "story": "奇+奇=偶, 奇×奇=奇, 有偶因子→结果偶\n\n2的幂次尾数：2→4→8→6→2→4...(周期4)",
        "keyPoints": [
          "奇偶分析快速排除",
          "尾数周期性",
          "完全平方尾数只能0,1,4,5,6,9"
        ],
        "visual": "<div style=\"font-weight:700;margin-bottom:10px\">奇偶规律速查</div><div style=\"display:grid;grid-template-columns:1fr 1fr;gap:6px;font-size:13px\"><div style=\"padding:6px;background:#dbeafe;border-radius:6px\">奇+奇=<strong>偶</strong></div><div style=\"padding:6px;background:#fef3c7;border-radius:6px\">奇+偶=<strong>奇</strong></div><div style=\"padding:6px;background:#dbeafe;border-radius:6px\">偶+偶=<strong>偶</strong></div><div style=\"padding:6px;background:#fef3c7;border-radius:6px\">奇×奇=<strong>奇</strong></div><div style=\"padding:6px;background:#dbeafe;border-radius:6px\">奇×偶=<strong>偶</strong></div><div style=\"padding:6px;background:#dbeafe;border-radius:6px\">偶×偶=<strong>偶</strong></div></div><div style=\"margin-top:10px;font-size:13px;padding:8px;background:#fffbeb;border-radius:8px\"><strong>尾数周期：</strong>2的幂次尾数 = 2,4,8,6,2,4...(周期4)</div>",
        "textbook": "<div style=\"border:2px solid #3b82f6;border-radius:8px;overflow:hidden\"><div style=\"background:#3b82f6;color:#fff;padding:8px 14px;font-weight:700;font-size:14px\">📚 竞赛数学 数论技巧专题</div><div style=\"padding:14px;font-size:14px;line-height:2\"><p><strong>【知识要点】</strong>奇偶分析可以快速排除不可能的答案。尾数规律：幂次的尾数周期性重复。</p><div style=\"background:#eff6ff;border-radius:6px;padding:10px;margin:10px 0;border-left:3px solid #3b82f6\"><strong>【例题】</strong> 2²⁰²⁵的个位数字是？<br><strong>解：</strong>2025÷4=506余1，周期4中第1个=2<br>答案是<strong>2</strong></div><div style=\"background:#f0fdf4;border-radius:6px;padding:10px;border-left:3px solid #22c55e\"><strong>【练一练】</strong> 奇数+奇数+奇数=?<br><span style=\"color:#666;font-size:12px\">答案：一定是奇数（奇+奇=偶，偶+奇=奇）</span></div></div></div>"
      }
    ],
    "practice": {
      "basic": [
        {
          "q": "奇+奇+奇=?",
          "options": [
            "一定奇",
            "一定偶",
            "不确定",
            "0"
          ],
          "answer": 0,
          "explain": "奇+奇=偶,偶+奇=奇"
        }
      ],
      "advanced": [
        {
          "q": "2²⁰的个位数字是？",
          "options": [
            "2",
            "4",
            "6",
            "8"
          ],
          "answer": 2,
          "explain": "20÷4=5余0，周期4中第4个=6"
        }
      ],
      "amc": [
        {
          "q": "[2022 #17] 2!!+4!!+...+2022!!个位数字?",
          "options": [
            "0",
            "2",
            "4",
            "6",
            "8"
          ],
          "answer": 1,
          "explain": "前4项尾数和:2+8+8+4=22→尾2",
          "year": 2022,
          "num": 17
        }
      ]
    }
  },
  {
    "id": "ratio",
    "name": "比与比例",
    "icon": "⚖️",
    "theme": "algebra",
    "grade": "5-6年级",
    "gradeNum": 5,
    "amcFreq": 10,
    "difficulty": "基础",
    "desc": "比例应用、按比分配",
    "realLifeHtml": "<div style=\"margin-bottom:12px;font-size:14px;line-height:1.8\">比例帮助我们按配方放大缩小、读懂地图！</div><div style=\"display:flex;gap:10px;flex-wrap:wrap\"><div style=\"flex:1;min-width:120px;max-width:160px;background:#dbeafe;border:2px solid #93c5fd;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">🧋</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">奶茶配方</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">茶:奶 = 2:3</div></div><div style=\"flex:1;min-width:120px;max-width:160px;background:#dcfce7;border:2px solid #86efac;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">🗺️</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">地图比例尺</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">1cm = 50km</div></div><div style=\"flex:1;min-width:120px;max-width:160px;background:#fef3c7;border:2px solid #fde68a;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">🎨</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">调色配比</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">红:蓝 = 3:1</div></div></div>",
    "examTips": "⚠️ AMC8超高频！捕获再捕获法几乎每年考",
    "commonMistakes": [
      "❌ 3:5中3占3/5 → ✅ 占3/8(3+5=8)"
    ],
    "prereqs": [
      "fractions"
    ],
    "glossary": [
      {
        "cn": "比",
        "en": "Ratio",
        "pron": "RAY-shee-oh"
      },
      {
        "cn": "比例",
        "en": "Proportion",
        "pron": "pruh-POR-shun"
      },
      {
        "cn": "按比分配",
        "en": "Proportional Distribution",
        "pron": ""
      },
      {
        "cn": "比例尺",
        "en": "Scale",
        "pron": ""
      }
    ],
    "definitions": [
      {
        "term": "比 (Ratio)",
        "def": "两个量的相对大小关系。a:b = a/b。3:5意思是\"每有3份第一种就有5份第二种\"。"
      },
      {
        "term": "比例 (Proportion)",
        "def": "两个比相等的等式。a:b=c:d，等价于 ad=bc（交叉相乘）。"
      }
    ],
    "videosCn": [
            {
                  "title": "乐乐课堂 - 比和比例(动画)",
                  "url": "https://www.bilibili.com/video/BV1R54y1Q7La/",
                  "searchUrl": "https://search.bilibili.com/all?keyword=比和比例+小学+动画讲解&order=click"
            },
            {
                  "title": "按比例分配应用题详解",
                  "url": "https://www.bilibili.com/video/BV1rE411c7XT/",
                  "searchUrl": "https://search.bilibili.com/all?keyword=按比例分配+应用题+小学&order=click"
            }
      ],
    "videosEn": [
      {
        "title": "Math Antics - Ratios and Rates",
        "url": "https://www.youtube.com/watch?v=USmit5zUGas",
        "searchUrl": "https://www.youtube.com/results?search_query=Math+Antics+ratios+rates"
      }
    ],
    "lessons": [
      {
        "title": "比例的魔力",
        "story": "做奶茶🧋：茶:奶=2:3。200ml茶需要多少奶？\n2:3=200:x → x=300ml\n\n捕获再捕获法：抓鱼标记放回→再抓→按比例估计总数",
        "keyPoints": [
          "比a:b=分数a/b",
          "交叉相乘:a:b=c:d→ad=bc",
          "按比分配:总量×份数/总份数"
        ],
        "visual": "<div style=\"font-weight:700;margin-bottom:12px\">图解：比例天平模型</div><div style=\"padding:10px;background:#fffbeb;border-radius:8px;font-size:14px;line-height:2\">比例公式：a:b = c:d<br>↓ 交叉相乘<br><strong>a × d = b × c</strong><br><span style=\"font-size:12px;color:#64748b\">例：2:3 = x:9 → 3x=18 → x=6</span></div>",
        "textbook": "<div style=\"border:2px solid #3b82f6;border-radius:8px;overflow:hidden\"><div style=\"background:#3b82f6;color:#fff;padding:8px 14px;font-weight:700;font-size:14px\">📚 人教版 六年级上册 比和比例</div><div style=\"padding:14px;font-size:14px;line-height:2\"><p><strong>【知识要点】</strong>比例：两个比相等，a:b=c:d，则ad=bc（外项积=内项积）。</p><div style=\"background:#eff6ff;border-radius:6px;padding:10px;margin:10px 0;border-left:3px solid #3b82f6\"><strong>【例题】</strong> 一辆汽车3小时行180km，5小时行多少？<br><strong>解：</strong>3:180=5:x → 3x=900 → x=<strong>300km</strong></div><div style=\"background:#f0fdf4;border-radius:6px;padding:10px;border-left:3px solid #22c55e\"><strong>【练一练】</strong> 地图上2cm代表10km，7cm代表多少？<br><span style=\"color:#666;font-size:12px\">答案：2:10=7:x → x=35km</span></div></div></div>"
      }
    ],
    "practice": {
      "basic": [
        {
          "q": "1:4混合500ml需几ml果汁?",
          "options": [
            "50",
            "100",
            "125",
            "200"
          ],
          "answer": 1,
          "explain": "500×1/5=100"
        },
        {
          "q": "甲乙丙分奖比2:3:5,丙比甲多600,总奖金?",
          "options": [
            "1000",
            "1500",
            "2000",
            "3000"
          ],
          "answer": 2,
          "explain": "差3份=600→1份200→总2000"
        }
      ],
      "advanced": [
        {
          "q": "长宽比5:3周长48,面积?",
          "options": [
            "135",
            "180",
            "108",
            "96"
          ],
          "answer": 0,
          "explain": "16x=48→x=3, 15×9=135"
        }
      ],
      "amc": [
        {
          "q": "[2023 #5] 湖中250鳟鱼,捕180中30是鳟鱼,总鱼数?",
          "options": [
            "1250",
            "1500",
            "1750",
            "1800",
            "2000"
          ],
          "answer": 1,
          "explain": "250/(30/180)=1500",
          "year": 2023,
          "num": 5
        },
        {
          "q": "[2025 #3] 4人每人15张牌,6人每人几张?",
          "options": [
            "8",
            "9",
            "10",
            "11",
            "12"
          ],
          "answer": 2,
          "explain": "60÷6=10",
          "year": 2025,
          "num": 3
        }
      ]
    }
  },
  {
    "id": "equations",
    "name": "方程与应用题",
    "icon": "🔍",
    "theme": "algebra",
    "grade": "6年级",
    "gradeNum": 6,
    "amcFreq": 9,
    "difficulty": "中等",
    "desc": "列方程解应用题",
    "realLifeHtml": "<div style=\"margin-bottom:12px;font-size:14px;line-height:1.8\">方程帮助我们解决生活中的未知量问题！</div><div style=\"display:flex;gap:10px;flex-wrap:wrap\"><div style=\"flex:1;min-width:120px;max-width:160px;background:#dbeafe;border:2px solid #93c5fd;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">✈️</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">旅行预算</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">收支平衡方程</div></div><div style=\"flex:1;min-width:120px;max-width:160px;background:#dcfce7;border:2px solid #86efac;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">⚖️</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">天平称重</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">等式左=右</div></div><div style=\"flex:1;min-width:120px;max-width:160px;background:#fef3c7;border:2px solid #fde68a;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">🎂</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">年龄推算</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">今年比5年前大5</div></div></div>",
    "examTips": "⚠️ 关键三步：①设x ②找等量关系 ③解方程",
    "commonMistakes": [
      "❌ 移项不变号 → ✅ 移过去要变号",
      "❌ \"比A多3\"写成A-3 → ✅ 是A+3"
    ],
    "prereqs": [
      "fractions",
      "ratio"
    ],
    "glossary": [
      {
        "cn": "方程",
        "en": "Equation",
        "pron": "ih-KWAY-zhun"
      },
      {
        "cn": "未知数",
        "en": "Unknown/Variable",
        "pron": ""
      },
      {
        "cn": "解方程",
        "en": "Solve",
        "pron": ""
      },
      {
        "cn": "等式",
        "en": "Equality",
        "pron": ""
      }
    ],
    "definitions": [
      {
        "term": "方程 (Equation)",
        "def": "含有未知数的等式。如 3x+7=22。解方程就是找到使等式成立的未知数的值。"
      }
    ],
    "videosCn": [
            {
                  "title": "洋葱学园 - 一元一次方程(动画入门)",
                  "url": "https://www.bilibili.com/video/BV1R54y1Q7tf/",
                  "searchUrl": "https://search.bilibili.com/all?keyword=一元一次方程+小学+动画&order=click"
            },
            {
                  "title": "鸡兔同笼问题详解(经典应用题)",
                  "url": "https://www.bilibili.com/video/BV1fx411v7WZ/",
                  "searchUrl": "https://search.bilibili.com/all?keyword=鸡兔同笼+列方程+小学&order=click"
            }
      ],
    "videosEn": [
      {
        "title": "Math Antics - Solving Basic Equations",
        "url": "https://www.youtube.com/watch?v=Qyd_v3DGzTM",
        "searchUrl": "https://www.youtube.com/results?search_query=Math+Antics+solving+equations"
      },
      {
        "title": "Khan Academy - One-step Equations",
        "url": "https://www.youtube.com/watch?v=kbqO0YTUyAY",
        "searchUrl": "https://www.youtube.com/results?search_query=Khan+Academy+one+step+equations"
      }
    ],
    "lessons": [
      {
        "title": "方程——找到未知数",
        "story": "方程就像天平⚖️：左边=右边。你要找让天平平衡的x。",
        "keyPoints": [
          "等式两边同时加减乘除",
          "移项变号",
          "三步：设x→找等量→解"
        ],
        "visual": "<div style=\"font-weight:700;margin-bottom:12px\">图解：天平模型</div><div style=\"padding:10px;background:#ecfdf5;border-radius:8px;font-size:14px;line-height:2\">3x + 7 = 22<br>3x = 22 - 7 &nbsp;&nbsp;<span style=\"color:#64748b\">(两边同减7)</span><br>3x = 15<br>x = 15 ÷ 3 &nbsp;&nbsp;<span style=\"color:#64748b\">(两边同除3)</span><br><strong style=\"color:var(--g)\">x = 5 ✓</strong></div>",
        "textbook": "<div style=\"border:2px solid #3b82f6;border-radius:8px;overflow:hidden\"><div style=\"background:#3b82f6;color:#fff;padding:8px 14px;font-weight:700;font-size:14px\">📚 沪教版 六年级 方程初步</div><div style=\"padding:14px;font-size:14px;line-height:2\"><p><strong>【知识要点】</strong>列方程步骤：①设未知数x ②找等量关系 ③列方程 ④解方程 ⑤检验。</p><div style=\"background:#eff6ff;border-radius:6px;padding:10px;margin:10px 0;border-left:3px solid #3b82f6\"><strong>【例题】</strong> 鸡兔同笼，头35脚94，各几只？<br><strong>解：</strong>设兔x只，鸡(35-x)只<br>4x+2(35-x)=94 → 2x=24 → x=<strong>12只兔</strong>，23只鸡</div><div style=\"background:#f0fdf4;border-radius:6px;padding:10px;border-left:3px solid #22c55e\"><strong>【练一练】</strong> 一个数3倍减4等于2倍加6，这个数？<br><span style=\"color:#666;font-size:12px\">答案：3x-4=2x+6，x=10</span></div></div></div>"
      }
    ],
    "practice": {
      "basic": [
        {
          "q": "3x+7=22, x=?",
          "options": [
            "3",
            "5",
            "7",
            "15"
          ],
          "answer": 1,
          "explain": "3x=15，x=5"
        },
        {
          "q": "一个数3倍减4等于2倍加6，这个数？",
          "options": [
            "10",
            "8",
            "2",
            "6"
          ],
          "answer": 0,
          "explain": "3x-4=2x+6，x=10"
        }
      ],
      "advanced": [
        {
          "q": "鸡兔同笼，头35个脚94只，兔几只？",
          "options": [
            "10",
            "12",
            "14",
            "16"
          ],
          "answer": 1,
          "explain": "4x+2(35-x)=94→x=12"
        }
      ],
      "amc": [
        {
          "q": "[2022 #5] Bella 5年前6岁收到新生猫，今天三者年龄和30，Anna比Bella大？",
          "options": [
            "1",
            "2",
            "3",
            "4",
            "5"
          ],
          "answer": 2,
          "explain": "Bella现11猫5→Anna=14→差3",
          "year": 2022,
          "num": 5
        },
        {
          "q": "[2022 #11] 意面咬9次变10段，共减27寸，原来多长？",
          "options": [
            "34",
            "38",
            "41",
            "44",
            "47"
          ],
          "answer": 3,
          "explain": "17+9×3=44",
          "year": 2022,
          "num": 11
        }
      ]
    }
  },
  {
    "id": "sequences",
    "name": "数列与规律",
    "icon": "🔗",
    "theme": "algebra",
    "grade": "7年级",
    "gradeNum": 7,
    "amcFreq": 5,
    "difficulty": "中等",
    "desc": "等差数列、高斯求和",
    "realLifeHtml": "<div style=\"margin-bottom:12px;font-size:14px;line-height:1.8\">等差数列在存钱、台阶、日历中到处都是！</div><div style=\"display:flex;gap:10px;flex-wrap:wrap\"><div style=\"flex:1;min-width:120px;max-width:160px;background:#dbeafe;border:2px solid #93c5fd;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">🪜</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">楼梯台阶</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">每级高15cm</div></div><div style=\"flex:1;min-width:120px;max-width:160px;background:#dcfce7;border:2px solid #86efac;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">💰</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">每周存钱</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">每次多存5元</div></div><div style=\"flex:1;min-width:120px;max-width:160px;background:#fef3c7;border:2px solid #fde68a;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">📅</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">日历规律</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">每周+7天</div></div></div>",
    "examTips": "⚠️ 高斯求和公式几乎每年都用到，必须背熟",
    "commonMistakes": [
      "❌ 第n项忘减1→aₙ=a₁+(n-1)d不是+nd"
    ],
    "prereqs": [
      "equations"
    ],
    "glossary": [
      {
        "cn": "数列",
        "en": "Sequence",
        "pron": "SEE-kwens"
      },
      {
        "cn": "等差数列",
        "en": "Arithmetic Sequence",
        "pron": ""
      },
      {
        "cn": "公差",
        "en": "Common Difference",
        "pron": ""
      },
      {
        "cn": "通项公式",
        "en": "General Term",
        "pron": ""
      }
    ],
    "definitions": [
      {
        "term": "等差数列 (Arithmetic Sequence)",
        "def": "每相邻两项的差(公差d)相同的数列。如 2,5,8,11...公差d=3。"
      },
      {
        "term": "高斯求和",
        "def": "1+2+3+...+n = n(n+1)/2。高斯10岁时用\"首尾配对法\"秒算出 1+2+...+100=5050。"
      }
    ],
    "videosCn": [
            {
                  "title": "高斯的故事：10岁秒算1+2+...+100",
                  "url": "https://www.bilibili.com/video/BV1xE411N7HS/",
                  "searchUrl": "https://search.bilibili.com/all?keyword=高斯求和+故事+数学&order=click"
            },
            {
                  "title": "等差数列求和(小学奥数)",
                  "url": "https://www.bilibili.com/video/BV1PE411A7Fv/",
                  "searchUrl": "https://search.bilibili.com/all?keyword=等差数列求和+小学奥数&order=click"
            }
      ],
    "videosEn": [
      {
        "title": "Math Antics - Arithmetic Sequences",
        "url": "https://www.youtube.com/watch?v=dSmSrLmCGOw",
        "searchUrl": "https://www.youtube.com/results?search_query=Gauss+sum+arithmetic+sequence"
      },
      {
        "title": "Khan Academy - Sum of Arithmetic Series",
        "url": "https://www.youtube.com/watch?v=Dj1JZIdIwwo",
        "searchUrl": "https://www.youtube.com/results?search_query=Khan+Academy+arithmetic+series+sum"
      }
    ],
    "lessons": [
      {
        "title": "数列——数字的规律",
        "story": "1,3,5,7,9...每个+2！高斯10岁时秒算1+2+...+100=5050：首尾配对(1+100)×50=5050",
        "keyPoints": [
          "通项aₙ=a₁+(n-1)d",
          "求和S=n(a₁+aₙ)/2",
          "高斯: 1+2+...+n=n(n+1)/2"
        ],
        "visual": "<div style=\"font-weight:700;margin-bottom:12px\">图解：高斯配对法</div><div style=\"display:flex;flex-wrap:wrap;gap:4px;margin-bottom:8px\"><div style=\"display:flex;align-items:center;gap:3px;padding:4px 8px;background:var(--p3);border-radius:20px;font-size:12px\"><span style=\"color:var(--p);font-weight:700\">1</span>+<span style=\"color:var(--p);font-weight:700\">100</span>=<span style=\"color:var(--g);font-weight:700\">101</span></div><div style=\"display:flex;align-items:center;gap:3px;padding:4px 8px;background:var(--p3);border-radius:20px;font-size:12px\"><span style=\"color:var(--p);font-weight:700\">2</span>+<span style=\"color:var(--p);font-weight:700\">99</span>=<span style=\"color:var(--g);font-weight:700\">101</span></div><div style=\"display:flex;align-items:center;gap:3px;padding:4px 8px;background:var(--p3);border-radius:20px;font-size:12px\"><span style=\"color:var(--p);font-weight:700\">3</span>+<span style=\"color:var(--p);font-weight:700\">98</span>=<span style=\"color:var(--g);font-weight:700\">101</span></div><div style=\"display:flex;align-items:center;gap:3px;padding:4px 8px;background:var(--p3);border-radius:20px;font-size:12px\"><span style=\"color:var(--p);font-weight:700\">4</span>+<span style=\"color:var(--p);font-weight:700\">97</span>=<span style=\"color:var(--g);font-weight:700\">101</span></div><div style=\"display:flex;align-items:center;gap:3px;padding:4px 8px;background:var(--p3);border-radius:20px;font-size:12px\"><span style=\"color:var(--p);font-weight:700\">5</span>+<span style=\"color:var(--p);font-weight:700\">96</span>=<span style=\"color:var(--g);font-weight:700\">101</span></div><div style=\"padding:4px 8px;background:#f1f5f9;border-radius:20px;font-size:12px;color:#64748b\">...共50对</div></div><div style=\"padding:10px;background:#ecfdf5;border-radius:8px;font-size:13px\">每对和=101，共50对<br><strong style=\"color:var(--g)\">总和=101×50=5050 ✓</strong></div>",
        "textbook": "<div style=\"border:2px solid #3b82f6;border-radius:8px;overflow:hidden\"><div style=\"background:#3b82f6;color:#fff;padding:8px 14px;font-weight:700;font-size:14px\">📚 沪教版 七年级 数列初步</div><div style=\"padding:14px;font-size:14px;line-height:2\"><p><strong>【知识要点】</strong>等差数列通项：aₙ=a₁+(n-1)d。求和：S=n(首项+末项)/2。</p><div style=\"background:#eff6ff;border-radius:6px;padding:10px;margin:10px 0;border-left:3px solid #3b82f6\"><strong>【例题】</strong> 等差数列2,5,8,...第20项和前20项的和？<br><strong>解：</strong>a₂₀=2+19×3=<strong>59</strong><br>S=20×(2+59)/2=<strong>610</strong></div></div></div>"
      }
    ],
    "practice": {
      "basic": [
        {
          "q": "2,5,8,11,...第10项是?",
          "options": [
            "29",
            "32",
            "27",
            "26"
          ],
          "answer": 0,
          "explain": "2+9×3=29"
        },
        {
          "q": "1+2+3+...+100=?",
          "options": [
            "5000",
            "5050",
            "5100",
            "10100"
          ],
          "answer": 1,
          "explain": "100×101÷2=5050"
        }
      ],
      "advanced": [
        {
          "q": "等差数列首项3公差4，前5项和?",
          "options": [
            "55",
            "75",
            "35",
            "45"
          ],
          "answer": 0,
          "explain": "末项=3+4×4=19，S=5×(3+19)/2=55"
        }
      ],
      "amc": [
        {
          "q": "[2022 #6] 三个等距正整数中间15,最大=4×最小,最小?",
          "options": [
            "4",
            "5",
            "6",
            "7",
            "8"
          ],
          "answer": 2,
          "explain": "b=30-a,b=4a→a=6",
          "year": 2022,
          "num": 6
        },
        {
          "q": "[2022 #9] 212°F水在68°F冷却,温差每5分钟减半,15分钟后?",
          "options": [
            "77",
            "86",
            "92",
            "98",
            "104"
          ],
          "answer": 1,
          "explain": "差144→72→36→18,68+18=86",
          "year": 2022,
          "num": 9
        }
      ]
    }
  },
  {
    "id": "speed",
    "name": "行程问题",
    "icon": "🚗",
    "theme": "algebra",
    "grade": "5-6年级",
    "gradeNum": 5,
    "amcFreq": 7,
    "difficulty": "中等",
    "desc": "速度时间距离、相遇追及",
    "realLifeHtml": "<div style=\"margin-bottom:12px;font-size:14px;line-height:1.8\">速度时间距离公式在交通、运动中应用广泛！</div><div style=\"display:flex;gap:10px;flex-wrap:wrap\"><div style=\"flex:1;min-width:120px;max-width:160px;background:#dbeafe;border:2px solid #93c5fd;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">🚗</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">导航系统</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">预估到达时间</div></div><div style=\"flex:1;min-width:120px;max-width:160px;background:#dcfce7;border:2px solid #86efac;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">🏃</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">跑步配速</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">5分钟/公里</div></div><div style=\"flex:1;min-width:120px;max-width:160px;background:#fef3c7;border:2px solid #fde68a;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">✈️</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">飞机航速</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">900km/h巡航</div></div></div>",
    "examTips": "⚠️ AMC8行程题常给不同路段不同速度，画时间轴",
    "commonMistakes": [
      "❌ 去回平均速度直接加÷2 → ✅ =总路程÷总时间"
    ],
    "prereqs": [
      "equations",
      "ratio"
    ],
    "glossary": [
      {
        "cn": "速度",
        "en": "Speed/Rate",
        "pron": ""
      },
      {
        "cn": "距离",
        "en": "Distance",
        "pron": ""
      },
      {
        "cn": "时间",
        "en": "Time",
        "pron": ""
      },
      {
        "cn": "相遇",
        "en": "Meet/Encounter",
        "pron": ""
      },
      {
        "cn": "追及",
        "en": "Catch up",
        "pron": ""
      }
    ],
    "definitions": [
      {
        "term": "速度 (Speed)",
        "def": "单位时间内走过的距离。速度=距离÷时间。单位如km/h。"
      }
    ],
    "videosCn": [
            {
                  "title": "行程问题三大类型(相遇/追及/流水)",
                  "url": "https://www.bilibili.com/video/BV1hE411T7Sm/",
                  "searchUrl": "https://search.bilibili.com/all?keyword=行程问题+相遇追及+小学&order=click"
            },
            {
                  "title": "生活中的速度计算",
                  "url": "https://www.bilibili.com/video/BV1fE411w7cD/",
                  "searchUrl": "https://search.bilibili.com/all?keyword=速度时间距离+生活数学&order=click"
            }
      ],
    "videosEn": [
      {
        "title": "Math Antics - Distance, Rate and Time",
        "url": "https://www.youtube.com/watch?v=1UcCHNNsVaU",
        "searchUrl": "https://www.youtube.com/results?search_query=Math+Antics+distance+rate+time"
      }
    ],
    "lessons": [
      {
        "title": "追上你——行程问题",
        "story": "距离=速度×时间。相遇时间=距离÷速度和。追及时间=距离差÷速度差。",
        "keyPoints": [
          "距离=速度×时间",
          "相遇:÷速度和",
          "追及:÷速度差"
        ],
        "visual": "<div style=\"display:flex;flex-direction:column;gap:10px\"><div style=\"padding:10px;background:#dbeafe;border-radius:8px\"><div style=\"font-weight:700;color:#1e40af;margin-bottom:4px\">相遇问题（相向而行）</div><div style=\"font-size:13px\">时间 = 距离 ÷ (甲速 + 乙速)</div></div><div style=\"padding:10px;background:#dcfce7;border-radius:8px\"><div style=\"font-weight:700;color:#166534;margin-bottom:4px\">追及问题（同向而行）</div><div style=\"font-size:13px\">时间 = 距离差 ÷ (快速 - 慢速)</div></div></div>",
        "textbook": "<div style=\"border:2px solid #3b82f6;border-radius:8px;overflow:hidden\"><div style=\"background:#3b82f6;color:#fff;padding:8px 14px;font-weight:700;font-size:14px\">📚 人教版 六年级 行程应用题</div><div style=\"padding:14px;font-size:14px;line-height:2\"><p><strong>【知识要点】</strong>距离=速度×时间。相遇：两人相向，时间=距离÷(速度和)。</p><div style=\"background:#eff6ff;border-radius:6px;padding:10px;margin:10px 0;border-left:3px solid #3b82f6\"><strong>【例题】</strong> 甲乙相距300km，汽车80km/h，火车120km/h同时出发相向而行，几小时后相遇？<br><strong>解：</strong>300÷(80+120)=<strong>1.5小时</strong></div></div></div>"
      }
    ],
    "practice": {
      "basic": [
        {
          "q": "60km/h开2小时走多远?",
          "options": [
            "30km",
            "62km",
            "120km",
            "180km"
          ],
          "answer": 2,
          "explain": "60×2=120"
        },
        {
          "q": "甲乙相距100km相向，甲30乙20，几小时相遇？",
          "options": [
            "2h",
            "5h",
            "3h",
            "4h"
          ],
          "answer": 0,
          "explain": "100÷50=2"
        }
      ],
      "advanced": [],
      "amc": [
        {
          "q": "[2022 #7] 56kbps下载4.2MB约几分钟?(1MB=8000kb)",
          "options": [
            "0.6",
            "10",
            "1800",
            "7200",
            "36000"
          ],
          "answer": 1,
          "explain": "33600÷56÷60≈10",
          "year": 2022,
          "num": 7
        },
        {
          "q": "[2023 #11] NASA火星车6.5月飞2.93亿英里，时速约?",
          "options": [
            "6000",
            "12000",
            "60000",
            "120000",
            "600000"
          ],
          "answer": 2,
          "explain": "≈293M÷4680h≈62500≈60000",
          "year": 2023,
          "num": 11
        }
      ]
    }
  },
  {
    "id": "area",
    "name": "平面图形面积",
    "icon": "📐",
    "theme": "geometry",
    "grade": "4-5年级",
    "gradeNum": 4,
    "amcFreq": 12,
    "difficulty": "基础",
    "desc": "三角形/梯形/组合图形/割补法",
    "realLifeHtml": "<div style=\"margin-bottom:12px;font-size:14px;line-height:1.8\">面积计算在装修、裁剪、规划中都要用到！</div><div style=\"display:flex;gap:10px;flex-wrap:wrap\"><div style=\"flex:1;min-width:120px;max-width:160px;background:#dbeafe;border:2px solid #93c5fd;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">🏠</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">铺地砖</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">算需要多少块</div></div><div style=\"flex:1;min-width:120px;max-width:160px;background:#dcfce7;border:2px solid #86efac;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">✂️</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">裁布料</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">裁剪前算面积</div></div><div style=\"flex:1;min-width:120px;max-width:160px;background:#fef3c7;border:2px solid #fde68a;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">🏟️</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">操场规划</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">计算跑道面积</div></div></div>",
    "examTips": "⚠️ AMC8面积题最常考割补法和数格子法",
    "commonMistakes": [
      "❌ 三角形忘÷2",
      "❌ 用斜边当高 → ✅ 高一定垂直于底"
    ],
    "prereqs": [],
    "glossary": [
      {
        "cn": "面积",
        "en": "Area",
        "pron": "AIR-ee-uh"
      },
      {
        "cn": "周长",
        "en": "Perimeter",
        "pron": "peh-RIM-eh-ter"
      },
      {
        "cn": "底",
        "en": "Base",
        "pron": ""
      },
      {
        "cn": "高",
        "en": "Height",
        "pron": ""
      },
      {
        "cn": "割补法",
        "en": "Cut-and-Paste Method",
        "pron": ""
      }
    ],
    "definitions": [
      {
        "term": "面积 (Area)",
        "def": "一个平面图形所覆盖区域的大小。单位是\"平方XX\"，如 cm²、m²。"
      },
      {
        "term": "割补法",
        "def": "通过\"切割\"和\"拼补\"把不规则图形变成规则图形来计算面积。"
      }
    ],
    "videosCn": [
            {
                  "title": "洋葱学园 - 三角形面积(为什么÷2)",
                  "url": "https://www.bilibili.com/video/BV1U64y1c7h1/",
                  "searchUrl": "https://search.bilibili.com/all?keyword=三角形面积公式+为什么除以2&order=click"
            },
            {
                  "title": "割补法求面积(小学奥数经典)",
                  "url": "https://www.bilibili.com/video/BV1F7411x7Tt/",
                  "searchUrl": "https://search.bilibili.com/all?keyword=割补法+面积+小学奥数&order=click"
            }
      ],
    "videosEn": [
      {
        "title": "Math Antics - Area",
        "url": "https://www.youtube.com/watch?v=PF26xbR7OIQ",
        "searchUrl": "https://www.youtube.com/results?search_query=Math+Antics+area+introduction"
      },
      {
        "title": "Khan Academy - Area of Triangles",
        "url": "https://www.youtube.com/watch?v=_JJFTMf5pRo",
        "searchUrl": "https://www.youtube.com/results?search_query=Khan+Academy+area+triangles"
      }
    ],
    "lessons": [
      {
        "title": "面积的本质",
        "story": "面积=\"铺几个小方格\"。三角形=长方形一半！割补法：复杂图形=大图形-挖洞",
        "keyPoints": [
          "长方形=长×宽",
          "三角形=底×高÷2",
          "梯形=(上底+下底)×高÷2",
          "割补法"
        ],
        "visual": "<div style=\"font-weight:700;margin-bottom:10px\">图解：三角形=长方形一半</div><div style=\"display:flex;gap:12px;align-items:center;flex-wrap:wrap\"><div style=\"padding:10px;background:#dbeafe;border-radius:8px;text-align:center\"><div style=\"font-size:12px;color:#1e40af;margin-bottom:4px\">三角形</div><div style=\"font-size:14px;font-weight:700\">底×高÷2</div></div><div style=\"font-size:20px\">=</div><div style=\"padding:10px;background:#dcfce7;border-radius:8px;text-align:center\"><div style=\"font-size:12px;color:#166534;margin-bottom:4px\">长方形</div><div style=\"font-size:14px;font-weight:700\">底×高</div></div><div style=\"font-size:20px\">÷2</div></div>",
        "textbook": "<div style=\"border:2px solid #3b82f6;border-radius:8px;overflow:hidden\"><div style=\"background:#3b82f6;color:#fff;padding:8px 14px;font-weight:700;font-size:14px\">📚 人教版 五年级上册 多边形的面积</div><div style=\"padding:14px;font-size:14px;line-height:2\"><p><strong>【知识要点】</strong>三角形面积=底×高÷2。梯形面积=(上底+下底)×高÷2。割补法：把复杂图形割拼成简单图形。</p><div style=\"background:#eff6ff;border-radius:6px;padding:10px;margin:10px 0;border-left:3px solid #3b82f6\"><strong>【例题】</strong> 一个平行四边形底8cm高5cm，面积是多少？<br><strong>解：</strong>割下一个三角形补到另一边→变成长方形<br>面积=8×5=<strong>40cm²</strong></div><div style=\"background:#f0fdf4;border-radius:6px;padding:10px;border-left:3px solid #22c55e\"><strong>【练一练】</strong> 梯形上底3cm,下底7cm,高4cm，面积？<br><span style=\"color:#666;font-size:12px\">答案：(3+7)×4÷2=20cm²</span></div></div></div>"
      }
    ],
    "practice": {
      "basic": [
        {
          "q": "三角形底8高5，面积?",
          "options": [
            "40",
            "20",
            "13",
            "30"
          ],
          "answer": 1,
          "explain": "8×5÷2=20"
        },
        {
          "q": "梯形上底3下底7高4，面积?",
          "options": [
            "40",
            "20",
            "14",
            "28"
          ],
          "answer": 1,
          "explain": "(3+7)×4÷2=20"
        }
      ],
      "advanced": [
        {
          "q": "边10正方形内接旋转45°正方形(顶点在边中点)面积?",
          "options": [
            "25",
            "50",
            "75",
            "100"
          ],
          "answer": 1,
          "explain": "对角线=10，面积=10×10÷2=50"
        }
      ],
      "amc": []
    }
  },
  {
    "id": "circle",
    "name": "圆",
    "icon": "⭕",
    "theme": "geometry",
    "grade": "6年级",
    "gradeNum": 6,
    "amcFreq": 6,
    "difficulty": "中等",
    "desc": "周长、面积、扇形、环形",
    "realLifeHtml": "<div style=\"margin-bottom:12px;font-size:14px;line-height:1.8\">圆形在车轮、时钟、球类中无处不在！</div><div style=\"display:flex;gap:10px;flex-wrap:wrap\"><div style=\"flex:1;min-width:120px;max-width:160px;background:#dbeafe;border:2px solid #93c5fd;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">🚲</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">自行车轮</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">一圈=πd(周长)</div></div><div style=\"flex:1;min-width:120px;max-width:160px;background:#dcfce7;border:2px solid #86efac;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">🍕</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">比较披萨</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">哪个更大？用面积！</div></div><div style=\"flex:1;min-width:120px;max-width:160px;background:#fef3c7;border:2px solid #fde68a;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">🕐</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">钟表表盘</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">扇形区域</div></div></div>",
    "examTips": "⚠️ 常与正方形组合考\"圆面积-内接图形\"",
    "commonMistakes": [
      "❌ 面积用直径→用半径!",
      "❌ 直径×2面积×2→面积×4!"
    ],
    "prereqs": [
      "area"
    ],
    "glossary": [
      {
        "cn": "圆",
        "en": "Circle",
        "pron": ""
      },
      {
        "cn": "半径",
        "en": "Radius",
        "pron": "RAY-dee-us"
      },
      {
        "cn": "直径",
        "en": "Diameter",
        "pron": "dy-AM-eh-ter"
      },
      {
        "cn": "圆周率",
        "en": "Pi (π)",
        "pron": "PIE"
      },
      {
        "cn": "扇形",
        "en": "Sector",
        "pron": ""
      },
      {
        "cn": "环形",
        "en": "Annulus/Ring",
        "pron": ""
      }
    ],
    "definitions": [
      {
        "term": "圆 (Circle)",
        "def": "平面上到定点(圆心)距离相等的所有点的集合。"
      },
      {
        "term": "π (Pi)",
        "def": "圆周长与直径的比值，约等于3.14159...是无限不循环小数。"
      }
    ],
    "videosCn": [
            {
                  "title": "3Blue1Brown - 圆面积为什么是πr²(中文)",
                  "url": "https://www.bilibili.com/video/BV1Cx411m78Y/",
                  "searchUrl": "https://search.bilibili.com/all?keyword=圆面积公式+推导+中文&order=click"
            },
            {
                  "title": "洋葱学园 - 圆的面积(动画推导)",
                  "url": "https://www.bilibili.com/video/BV1p64y1c7YE/",
                  "searchUrl": "https://search.bilibili.com/all?keyword=圆的面积公式+动画推导+小学&order=click"
            }
      ],
    "videosEn": [
      {
        "title": "3Blue1Brown - WHY is a circle's area πr²?",
        "url": "https://www.youtube.com/watch?v=YokKp3pwVFc",
        "searchUrl": "https://www.youtube.com/results?search_query=3Blue1Brown+circle+area+pi+r+squared"
      },
      {
        "title": "Math Antics - Circles, Circumference And Area",
        "url": "https://www.youtube.com/watch?v=O-cawByg2aA",
        "searchUrl": "https://www.youtube.com/results?search_query=Math+Antics+circles+circumference+area"
      }
    ],
    "lessons": [
      {
        "title": "完美的圆",
        "story": "车轮🚲为何是圆的？每点到中心距离相等才平稳！\n\nπ≈3.14是周长与直径的比。面积πr²：切成薄三角→拼成长方形→长πr×宽r=πr²",
        "keyPoints": [
          "C=2πr=πd",
          "S=πr²",
          "扇形=πr²×角度/360",
          "环形=π(R²-r²)"
        ],
        "visual": "<div style=\"font-weight:700;margin-bottom:10px\">图解：为什么圆面积 = πr²？</div><div style=\"padding:10px;background:#dbeafe;border-radius:8px;font-size:14px;line-height:2\">把圆切成很多细扇形，展开拼成近似长方形：<br>• 长 = 半周长 = <strong>πr</strong><br>• 宽 = 半径 = <strong>r</strong><br>• 面积 = πr × r = <strong style=\"color:var(--p)\">πr²</strong></div>",
        "textbook": "<div style=\"border:2px solid #3b82f6;border-radius:8px;overflow:hidden\"><div style=\"background:#3b82f6;color:#fff;padding:8px 14px;font-weight:700;font-size:14px\">📚 人教版 六年级上册 圆的周长和面积</div><div style=\"padding:14px;font-size:14px;line-height:2\"><p><strong>【知识要点】</strong>圆周长C=2πr，圆面积S=πr²(π≈3.14)。半径扩大n倍，面积扩大n²倍！</p><div style=\"background:#eff6ff;border-radius:6px;padding:10px;margin:10px 0;border-left:3px solid #3b82f6\"><strong>【例题】</strong> 圆形花坛半径5m，求周长和面积。<br><strong>解：</strong>C=2×3.14×5=<strong>31.4m</strong><br>S=3.14×25=<strong>78.5m²</strong></div><div style=\"background:#f0fdf4;border-radius:6px;padding:10px;border-left:3px solid #22c55e\"><strong>【练一练】</strong> 直径扩大2倍，面积扩大几倍？<br><span style=\"color:#666;font-size:12px\">答案：4倍（半径×2，面积×4）</span></div></div></div>"
      }
    ],
    "practice": {
      "basic": [
        {
          "q": "半径3圆面积?",
          "options": [
            "6π",
            "9π",
            "3π",
            "12π"
          ],
          "answer": 1,
          "explain": "π×3²=9π"
        },
        {
          "q": "大圆R4小圆r2，环形面积?",
          "options": [
            "12π",
            "8π",
            "4π",
            "16π"
          ],
          "answer": 0,
          "explain": "16π-4π=12π"
        }
      ],
      "advanced": [
        {
          "q": "正方形边4内切圆面积?",
          "options": [
            "4π",
            "8π",
            "16π",
            "2π"
          ],
          "answer": 0,
          "explain": "r=2→4π"
        }
      ],
      "amc": []
    }
  },
  {
    "id": "coordinates",
    "name": "坐标几何",
    "icon": "📍",
    "theme": "geometry",
    "grade": "7年级",
    "gradeNum": 7,
    "amcFreq": 5,
    "difficulty": "中等",
    "desc": "坐标系、距离、坐标法求面积",
    "realLifeHtml": "<div style=\"margin-bottom:12px;font-size:14px;line-height:1.8\">坐标系是地图定位和数据可视化的基础！</div><div style=\"display:flex;gap:10px;flex-wrap:wrap\"><div style=\"flex:1;min-width:120px;max-width:160px;background:#dbeafe;border:2px solid #93c5fd;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">📱</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">手机定位</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">经纬度=坐标</div></div><div style=\"flex:1;min-width:120px;max-width:160px;background:#dcfce7;border:2px solid #86efac;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">🎮</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">游戏地图</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">角色位置(x,y)</div></div><div style=\"flex:1;min-width:120px;max-width:160px;background:#fef3c7;border:2px solid #fde68a;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">📊</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">散点图</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">数据可视化</div></div></div>",
    "examTips": "⚠️ 常考网格上数面积和判断点在线上",
    "commonMistakes": [
      "❌ 距离=x+y → ✅ =√(x²+y²)"
    ],
    "prereqs": [
      "area",
      "equations"
    ],
    "glossary": [
      {
        "cn": "坐标",
        "en": "Coordinate",
        "pron": "koh-OR-dih-nit"
      },
      {
        "cn": "坐标系",
        "en": "Coordinate System",
        "pron": ""
      },
      {
        "cn": "原点",
        "en": "Origin",
        "pron": ""
      },
      {
        "cn": "x轴",
        "en": "x-axis",
        "pron": ""
      },
      {
        "cn": "y轴",
        "en": "y-axis",
        "pron": ""
      }
    ],
    "definitions": [
      {
        "term": "平面直角坐标系",
        "def": "由两条互相垂直的数轴(x轴和y轴)组成，交点为原点(0,0)。平面上每个点用(x,y)唯一表示。"
      }
    ],
    "videosCn": [
            {
                  "title": "平面直角坐标系入门(洋葱学园)",
                  "url": "https://www.bilibili.com/video/BV1K7411n7FJ/",
                  "searchUrl": "https://search.bilibili.com/all?keyword=平面直角坐标系+入门+初中&order=click"
            }
      ],
    "videosEn": [
      {
        "title": "Math Antics - Graphing on the Coordinate Plane",
        "url": "https://www.youtube.com/watch?v=9Uc62CUSvLo",
        "searchUrl": "https://www.youtube.com/results?search_query=Math+Antics+coordinate+plane+graphing"
      }
    ],
    "lessons": [
      {
        "title": "给点起地址",
        "story": "(3,4)=右3上4。到原点距离=√(9+16)=5(勾股定理!)",
        "keyPoints": [
          "坐标(x,y)",
          "距离=√(Δx²+Δy²)",
          "中点=(两x平均,两y平均)"
        ],
        "visual": "<div style=\"font-weight:700;margin-bottom:10px\">图解：坐标系</div><div style=\"padding:10px;background:#f8fafc;border-radius:8px;font-size:14px;line-height:2\">(3,4)到原点距离：<br>d = √(3²+4²) = √(9+16) = √25 = <strong style=\"color:var(--p)\">5</strong><br><span style=\"font-size:12px;color:#64748b\">3-4-5是最常见的勾股数！</span></div>",
        "textbook": "<div style=\"border:2px solid #3b82f6;border-radius:8px;overflow:hidden\"><div style=\"background:#3b82f6;color:#fff;padding:8px 14px;font-weight:700;font-size:14px\">📚 沪教版 七年级下册 平面直角坐标系</div><div style=\"padding:14px;font-size:14px;line-height:2\"><p><strong>【知识要点】</strong>用(x,y)唯一确定平面上的点。x轴（横轴）、y轴（纵轴），交点为原点O(0,0)。</p><div style=\"background:#eff6ff;border-radius:6px;padding:10px;margin:10px 0;border-left:3px solid #3b82f6\"><strong>【例题】</strong> 点A(3,4)到原点O的距离是多少？<br><strong>解：</strong>d=√(3²+4²)=√25=<strong>5</strong></div></div></div>"
      }
    ],
    "practice": {
      "basic": [
        {
          "q": "点(3,4)到原点距离?",
          "options": [
            "5",
            "7",
            "12",
            "25"
          ],
          "answer": 0,
          "explain": "√(9+16)=5"
        },
        {
          "q": "(2,3)关于x轴对称点?",
          "options": [
            "(-2,3)",
            "(2,-3)",
            "(-2,-3)",
            "(3,2)"
          ],
          "answer": 1,
          "explain": "y取反"
        }
      ],
      "advanced": [],
      "amc": [
        {
          "q": "[2022 #16] 四数相邻平均21,26,30，首尾平均?",
          "options": [
            "24",
            "25",
            "26",
            "27",
            "28"
          ],
          "answer": 1,
          "explain": "42+60-52=50→25",
          "year": 2022,
          "num": 16
        }
      ]
    }
  },
  {
    "id": "counting",
    "name": "计数原理",
    "icon": "🎯",
    "theme": "counting_prob",
    "grade": "竞赛",
    "gradeNum": 8,
    "amcFreq": 8,
    "difficulty": "困难",
    "desc": "加法乘法原理、排列组合",
    "realLifeHtml": "<div style=\"margin-bottom:12px;font-size:14px;line-height:1.8\">计数原理帮助我们算出密码、排列的总方案数！</div><div style=\"display:flex;gap:10px;flex-wrap:wrap\"><div style=\"flex:1;min-width:120px;max-width:160px;background:#dbeafe;border:2px solid #93c5fd;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">🔐</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">密码锁</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">4位数字=10000种</div></div><div style=\"flex:1;min-width:120px;max-width:160px;background:#dcfce7;border:2px solid #86efac;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">🚗</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">车牌号</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">字母+数字组合</div></div><div style=\"flex:1;min-width:120px;max-width:160px;background:#fef3c7;border:2px solid #fde68a;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">👗</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">穿搭组合</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">5件×3条=15种</div></div></div>",
    "examTips": "⚠️ \"然后\"=乘法，\"或者\"=加法",
    "commonMistakes": [
      "❌ 该乘用加",
      "❌ 忽略不重复条件",
      "❌ 有序无序搞混"
    ],
    "prereqs": [
      "divisibility"
    ],
    "glossary": [
      {
        "cn": "排列",
        "en": "Permutation",
        "pron": "per-myoo-TAY-shun"
      },
      {
        "cn": "组合",
        "en": "Combination",
        "pron": "kom-bih-NAY-shun"
      },
      {
        "cn": "阶乘",
        "en": "Factorial (!)",
        "pron": "fak-TOR-ee-ul"
      },
      {
        "cn": "加法原理",
        "en": "Addition Principle",
        "pron": ""
      },
      {
        "cn": "乘法原理",
        "en": "Multiplication Principle",
        "pron": ""
      }
    ],
    "definitions": [
      {
        "term": "加法原理",
        "def": "完成一件事有多种互斥的方法，总方法数=各方法数之和。关键词：\"或者\"。"
      },
      {
        "term": "乘法原理",
        "def": "完成一件事需要多个步骤，总方法数=各步方法数之积。关键词：\"然后\"。"
      },
      {
        "term": "排列 P(n,k)",
        "def": "从n个取k个并排序。P(n,k)=n!/(n-k)!。如5人选正副班长=5×4=20。"
      },
      {
        "term": "组合 C(n,k)",
        "def": "从n个取k个不排序。C(n,k)=n!/[k!(n-k)!]。如5人选2人组队=10。"
      }
    ],
    "videosCn": [
            {
                  "title": "加法原理和乘法原理(动画讲解)",
                  "url": "https://www.bilibili.com/video/BV1VE411G7M5/",
                  "searchUrl": "https://search.bilibili.com/all?keyword=加法原理+乘法原理+计数+动画&order=click"
            },
            {
                  "title": "排列和组合的区别(一个视频搞懂)",
                  "url": "https://www.bilibili.com/video/BV1J4411R7bF/",
                  "searchUrl": "https://search.bilibili.com/all?keyword=排列组合+区别+初中数学&order=click"
            },
            {
                  "title": "李永乐 - 密码有多少种组合",
                  "url": "https://www.bilibili.com/video/BV1Gb411v7V3/",
                  "searchUrl": "https://search.bilibili.com/all?keyword=密码+组合数学+李永乐&order=click"
            }
      ],
    "videosEn": [
      {
        "title": "Math Antics - Intro to Combinations",
        "url": "https://www.youtube.com/watch?v=iKy-d5_erhI",
        "searchUrl": "https://www.youtube.com/results?search_query=Math+Antics+combinations+introduction"
      }
    ],
    "lessons": [
      {
        "title": "有几种可能？",
        "story": "🍦3种口味×2种容器=6种(乘法)\n去B或C: 2+3=5种(加法)\n\n\"先...再...\"→乘 | \"...或者...\"→加",
        "keyPoints": [
          "乘法：连续步骤相乘",
          "加法：互斥方法相加",
          "P(n,k):有序",
          "C(n,k):无序"
        ],
        "visual": "<div style=\"font-weight:700;margin-bottom:10px\">图解：树状图</div><div style=\"display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:13px\"><div style=\"padding:8px;background:#dbeafe;border-radius:8px\"><strong>乘法原理</strong><br>\"然后\" → 相乘<br>3×2=<strong>6种</strong></div><div style=\"padding:8px;background:#dcfce7;border-radius:8px\"><strong>加法原理</strong><br>\"或者\" → 相加<br>2+3=<strong>5种</strong></div></div>",
        "textbook": "<div style=\"border:2px solid #3b82f6;border-radius:8px;overflow:hidden\"><div style=\"background:#3b82f6;color:#fff;padding:8px 14px;font-weight:700;font-size:14px\">📚 沪教版 八年级 计数原理</div><div style=\"padding:14px;font-size:14px;line-height:2\"><p><strong>【知识要点】</strong>加法原理：互斥事件用加法。乘法原理：独立步骤用乘法。</p><div style=\"background:#eff6ff;border-radius:6px;padding:10px;margin:10px 0;border-left:3px solid #3b82f6\"><strong>【例题】</strong> 5道判断题和3道4选1选择题，全部做完有多少种不同做法？<br><strong>解：</strong>判断题：2⁵=32种<br>选择题：4³=64种<br>总计：32×64=<strong>2048种</strong></div></div></div>"
      }
    ],
    "practice": {
      "basic": [
        {
          "q": "4件上衣3条裤子搭配?",
          "options": [
            "7",
            "12",
            "24",
            "10"
          ],
          "answer": 1,
          "explain": "乘法：4×3=12"
        },
        {
          "q": "1-9选2个不同数字组两位数共几个?",
          "options": [
            "72",
            "81",
            "36",
            "18"
          ],
          "answer": 0,
          "explain": "9×8=72"
        }
      ],
      "advanced": [
        {
          "q": "10人选3人组队?",
          "options": [
            "720",
            "120",
            "30",
            "1000"
          ],
          "answer": 1,
          "explain": "C(10,3)=120"
        },
        {
          "q": "BOOK排列几种?",
          "options": [
            "24",
            "12",
            "6",
            "4"
          ],
          "answer": 1,
          "explain": "4!/2!=12"
        }
      ],
      "amc": [
        {
          "q": "[2025 #22] 35挂钩等距挂衣服有几种衣服数?",
          "options": [
            "2",
            "4",
            "5",
            "7",
            "9"
          ],
          "answer": 3,
          "explain": "7种",
          "year": 2025,
          "num": 22
        }
      ]
    }
  },
  {
    "id": "inclusion_exclusion",
    "name": "容斥原理",
    "icon": "🔄",
    "theme": "counting_prob",
    "grade": "竞赛",
    "gradeNum": 8,
    "amcFreq": 4,
    "difficulty": "困难",
    "desc": "集合交并补",
    "realLifeHtml": "<div style=\"margin-bottom:12px;font-size:14px;line-height:1.8\">容斥原理帮助我们不重复、不遗漏地计数！</div><div style=\"display:flex;gap:10px;flex-wrap:wrap\"><div style=\"flex:1;min-width:120px;max-width:160px;background:#dbeafe;border:2px solid #93c5fd;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">📋</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">问卷调查</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">喜欢猫或狗的人</div></div><div style=\"flex:1;min-width:120px;max-width:160px;background:#dcfce7;border:2px solid #86efac;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">🔍</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">搜索过滤</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">A或B的结果</div></div><div style=\"flex:1;min-width:120px;max-width:160px;background:#fef3c7;border:2px solid #fde68a;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">📊</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">集合统计</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">韦恩图</div></div></div>",
    "examTips": "⚠️ \"至少一个\"→容斥或补集",
    "commonMistakes": [
      "❌ A或B=A+B → ✅ 要减去A且B"
    ],
    "prereqs": [
      "counting"
    ],
    "glossary": [
      {
        "cn": "容斥原理",
        "en": "Inclusion-Exclusion",
        "pron": ""
      },
      {
        "cn": "集合",
        "en": "Set",
        "pron": ""
      },
      {
        "cn": "并集",
        "en": "Union (∪)",
        "pron": ""
      },
      {
        "cn": "交集",
        "en": "Intersection (∩)",
        "pron": ""
      },
      {
        "cn": "补集",
        "en": "Complement",
        "pron": ""
      }
    ],
    "definitions": [
      {
        "term": "容斥原理 (Inclusion-Exclusion)",
        "def": "|A∪B|=|A|+|B|-|A∩B|。\"加上的要减去重复的\"。"
      }
    ],
    "videosCn": [
            {
                  "title": "容斥原理(画圈圈秒懂)",
                  "url": "https://www.bilibili.com/video/BV1AE411n7Kz/",
                  "searchUrl": "https://search.bilibili.com/all?keyword=容斥原理+韦恩图+讲解&order=click"
            }
      ],
    "videosEn": [
      {
        "title": "AoPS - Inclusion-Exclusion",
        "url": "https://www.youtube.com/watch?v=YQLUO-h6sSE",
        "searchUrl": "https://www.youtube.com/results?search_query=inclusion+exclusion+principle+math"
      }
    ],
    "lessons": [
      {
        "title": "不要数重了！",
        "story": "50人：游泳30，骑车25，都会15→至少一样30+25-15=40→都不会10",
        "keyPoints": [
          "|A∪B|=|A|+|B|-|A∩B|",
          "补集：都不=总-至少一个"
        ],
        "visual": "<div style=\"font-weight:700;margin-bottom:10px\">图解：韦恩图</div><div style=\"padding:10px;background:#f8fafc;border-radius:8px;font-size:14px;line-height:2\">50人中：游泳30 + 骑车25 - 两样都会15 = <strong>40人</strong>（至少一样）<br>都不会 = 50 - 40 = <strong style=\"color:var(--r)\">10人</strong></div>",
        "textbook": "<div style=\"border:2px solid #3b82f6;border-radius:8px;overflow:hidden\"><div style=\"background:#3b82f6;color:#fff;padding:8px 14px;font-weight:700;font-size:14px\">📚 竞赛数学 容斥原理</div><div style=\"padding:14px;font-size:14px;line-height:2\"><p><strong>【知识要点】</strong>|A∪B|=|A|+|B|-|A∩B|。计算两个集合并集时，要减去被重复计算的交集。</p><div style=\"background:#eff6ff;border-radius:6px;padding:10px;margin:10px 0;border-left:3px solid #3b82f6\"><strong>【例题】</strong> 1-100中，能被3或5整除的数有多少个？<br><strong>解：</strong>被3整除33个+被5整除20个-被15整除6个=<strong>47个</strong></div></div></div>"
      }
    ],
    "practice": {
      "basic": [
        {
          "q": "50人数学28英语25都喜欢13，都不喜欢?",
          "options": [
            "10",
            "12",
            "8",
            "15"
          ],
          "answer": 0,
          "explain": "50-(28+25-13)=10"
        }
      ],
      "advanced": [
        {
          "q": "1-100能被3或5整除的数?",
          "options": [
            "47",
            "53",
            "33",
            "46"
          ],
          "answer": 0,
          "explain": "33+20-6=47"
        }
      ],
      "amc": [
        {
          "q": "[2025 #7] ≥95%有5人,≥90%有13,≥80%有50，80%-90%几人?",
          "options": [
            "8",
            "14",
            "22",
            "37",
            "45"
          ],
          "answer": 3,
          "explain": "50-13=37",
          "year": 2025,
          "num": 7
        }
      ]
    }
  },
  {
    "id": "probability",
    "name": "概率",
    "icon": "🎲",
    "theme": "counting_prob",
    "grade": "8年级",
    "gradeNum": 8,
    "amcFreq": 5,
    "difficulty": "困难",
    "desc": "古典概型、补集概率",
    "realLifeHtml": "<div style=\"margin-bottom:12px;font-size:14px;line-height:1.8\">概率告诉我们一件事发生的可能性有多大！</div><div style=\"display:flex;gap:10px;flex-wrap:wrap\"><div style=\"flex:1;min-width:120px;max-width:160px;background:#dbeafe;border:2px solid #93c5fd;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">🎲</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">掷骰子</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">每面概率1/6</div></div><div style=\"flex:1;min-width:120px;max-width:160px;background:#dcfce7;border:2px solid #86efac;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">🌦️</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">天气预报</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">60%降水概率</div></div><div style=\"flex:1;min-width:120px;max-width:160px;background:#fef3c7;border:2px solid #fde68a;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">🎯</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">射击命中</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">命中率统计</div></div></div>",
    "examTips": "⚠️ 先计数再算概率。\"至少一个\"用1-P(全没有)",
    "commonMistakes": [
      "❌ 凭感觉猜 → ✅ 必须精确计数",
      "❌ \"至少\"直接算 → ✅ 用补集"
    ],
    "prereqs": [
      "counting",
      "fractions"
    ],
    "glossary": [
      {
        "cn": "概率",
        "en": "Probability",
        "pron": "prah-buh-BIL-ih-tee"
      },
      {
        "cn": "样本空间",
        "en": "Sample Space",
        "pron": ""
      },
      {
        "cn": "事件",
        "en": "Event",
        "pron": ""
      },
      {
        "cn": "古典概型",
        "en": "Classical Probability",
        "pron": ""
      },
      {
        "cn": "独立事件",
        "en": "Independent Events",
        "pron": ""
      }
    ],
    "definitions": [
      {
        "term": "概率 (Probability)",
        "def": "一个事件发生的可能性大小，用0到1之间的数表示。P=有利结果数÷总可能结果数。"
      },
      {
        "term": "补集概率",
        "def": "P(A发生) = 1 - P(A不发生)。当\"至少一个\"难以直接算时用此方法。"
      }
    ],
    "videosCn": [
            {
                  "title": "洋葱学园 - 概率入门(动画)",
                  "url": "https://www.bilibili.com/video/BV1PE411n7xP/",
                  "searchUrl": "https://search.bilibili.com/all?keyword=概率入门+小学初中+动画&order=click"
            },
            {
                  "title": "李永乐 - 生活中的概率(彩票/天气)",
                  "url": "https://www.bilibili.com/video/BV1Wt411Y7Fb/",
                  "searchUrl": "https://search.bilibili.com/all?keyword=概率+生活+彩票+李永乐&order=click"
            }
      ],
    "videosEn": [
      {
        "title": "Math Antics - Basic Probability",
        "url": "https://www.youtube.com/watch?v=KzfWUEJjG18",
        "searchUrl": "https://www.youtube.com/results?search_query=Math+Antics+basic+probability"
      },
      {
        "title": "Khan Academy - Intro to Probability",
        "url": "https://www.youtube.com/watch?v=uzkc-qNVoOk",
        "searchUrl": "https://www.youtube.com/results?search_query=Khan+Academy+intro+probability"
      }
    ],
    "lessons": [
      {
        "title": "运气的数学",
        "story": "抛硬币🪙正面P=1/2。概率=想要的÷全部可能。天气60%降水=100次相似条件下60次下雨。",
        "keyPoints": [
          "P=有利/总数",
          "0≤P≤1",
          "P(不发生)=1-P(发生)",
          "独立事件相乘"
        ],
        "visual": "<div style=\"font-weight:700;margin-bottom:10px\">图解：掷骰子的概率</div><div style=\"display:flex;gap:4px;flex-wrap:wrap;margin-bottom:8px\"><div style=\"width:36px;height:36px;background:#4f46e5;border-radius:6px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#fff\">1</div><div style=\"width:36px;height:36px;background:#4f46e5;border-radius:6px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#fff\">2</div><div style=\"width:36px;height:36px;background:#f1f5f9;border-radius:6px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#94a3b8\">3</div><div style=\"width:36px;height:36px;background:#f1f5f9;border-radius:6px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#94a3b8\">4</div><div style=\"width:36px;height:36px;background:#f1f5f9;border-radius:6px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#94a3b8\">5</div><div style=\"width:36px;height:36px;background:#f1f5f9;border-radius:6px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#94a3b8\">6</div></div><div style=\"font-size:13px;color:#64748b\">P(点数≤2) = 蓝色格/总格 = <strong style=\"color:var(--p)\">2/6 = 1/3</strong></div>",
        "textbook": "<div style=\"border:2px solid #3b82f6;border-radius:8px;overflow:hidden\"><div style=\"background:#3b82f6;color:#fff;padding:8px 14px;font-weight:700;font-size:14px\">📚 人教版 八年级下册 概率初步</div><div style=\"padding:14px;font-size:14px;line-height:2\"><p><strong>【知识要点】</strong>概率P=有利结果数÷总结果数，0≤P≤1。P(不发生)=1-P(发生)。</p><div style=\"background:#eff6ff;border-radius:6px;padding:10px;margin:10px 0;border-left:3px solid #3b82f6\"><strong>【例题】</strong> 抛一枚骰子，求点数大于4的概率。<br><strong>解：</strong>大于4的：5,6，共2种。P=2/6=<strong>1/3</strong></div><div style=\"background:#f0fdf4;border-radius:6px;padding:10px;border-left:3px solid #22c55e\"><strong>【练一练】</strong> 袋中有3红2白，取到白球概率？不是白球概率？<br><span style=\"color:#666;font-size:12px\">答案：白球P=2/5，非白球P=3/5</span></div></div></div>"
      }
    ],
    "practice": {
      "basic": [
        {
          "q": "袋中3红2蓝取1个红球概率?",
          "options": [
            "2/5",
            "3/5",
            "1/2",
            "2/3"
          ],
          "answer": 1,
          "explain": "3/(3+2)=3/5"
        },
        {
          "q": "两硬币至少1正面概率?",
          "options": [
            "1/2",
            "3/4",
            "1/4",
            "1/3"
          ],
          "answer": 1,
          "explain": "1-P(全反)=1-1/4=3/4"
        }
      ],
      "advanced": [
        {
          "q": "1-10取质数概率?",
          "options": [
            "2/5",
            "1/2",
            "3/10",
            "1/5"
          ],
          "answer": 0,
          "explain": "质数2,3,5,7共4个→4/10=2/5"
        }
      ],
      "amc": [
        {
          "q": "[2025 #20] 三人轮流吃一半，第一人总共吃?",
          "options": [
            "4/7",
            "3/5",
            "2/3",
            "3/4",
            "7/8"
          ],
          "answer": 0,
          "explain": "等比级数S=4/7",
          "year": 2025,
          "num": 20
        }
      ]
    }
  },
  {
    "id": "statistics",
    "name": "统计与数据",
    "icon": "📈",
    "theme": "data_logic",
    "grade": "7年级",
    "gradeNum": 7,
    "amcFreq": 6,
    "difficulty": "基础",
    "desc": "平均数/中位数/众数/图表",
    "realLifeHtml": "<div style=\"margin-bottom:12px;font-size:14px;line-height:1.8\">统计帮助我们分析数据、发现规律！</div><div style=\"display:flex;gap:10px;flex-wrap:wrap\"><div style=\"flex:1;min-width:120px;max-width:160px;background:#dbeafe;border:2px solid #93c5fd;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">📊</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">班级成绩</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">平均分/中位数</div></div><div style=\"flex:1;min-width:120px;max-width:160px;background:#dcfce7;border:2px solid #86efac;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">🏀</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">球员数据</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">NBA统计分析</div></div><div style=\"flex:1;min-width:120px;max-width:160px;background:#fef3c7;border:2px solid #fde68a;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">📈</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">股票走势</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">折线图/趋势</div></div></div>",
    "examTips": "⚠️ 常考\"插入/删除数后统计量变化\"",
    "commonMistakes": [
      "❌ 中位数=平均数 → ✅ 经常不等",
      "❌ 偶数个取一个 → ✅ 取中间两数平均"
    ],
    "prereqs": [
      "fractions"
    ],
    "glossary": [
      {
        "cn": "平均数",
        "en": "Mean/Average",
        "pron": ""
      },
      {
        "cn": "中位数",
        "en": "Median",
        "pron": "MEE-dee-un"
      },
      {
        "cn": "众数",
        "en": "Mode",
        "pron": ""
      },
      {
        "cn": "极差",
        "en": "Range",
        "pron": ""
      },
      {
        "cn": "条形图",
        "en": "Bar Graph",
        "pron": ""
      },
      {
        "cn": "折线图",
        "en": "Line Graph",
        "pron": ""
      }
    ],
    "definitions": [
      {
        "term": "平均数 (Mean)",
        "def": "所有数据之和除以数据个数。受极端值影响大。"
      },
      {
        "term": "中位数 (Median)",
        "def": "将数据从小到大排列后，位于正中间的数。偶数个取中间两数的平均。不受极端值影响。"
      },
      {
        "term": "众数 (Mode)",
        "def": "出现次数最多的数据值。可以有多个众数，也可以没有。"
      },
      {
        "term": "极差 (Range)",
        "def": "最大值减去最小值。反映数据的分散程度。"
      }
    ],
    "videosCn": [
            {
                  "title": "乐乐课堂 - 平均数/中位数/众数",
                  "url": "https://www.bilibili.com/video/BV1wb411J7CB/",
                  "searchUrl": "https://search.bilibili.com/all?keyword=平均数中位数众数+初中数学+讲解&order=click"
            }
      ],
    "videosEn": [
      {
        "title": "Math Antics - Mean, Median and Mode",
        "url": "https://www.youtube.com/watch?v=B1HEzNTGeZ4",
        "searchUrl": "https://www.youtube.com/results?search_query=Math+Antics+mean+median+mode"
      }
    ],
    "lessons": [
      {
        "title": "数据会说话",
        "story": "成绩72,85,85,90,98:\n平均86, 中位数85, 众数85, 极差26",
        "keyPoints": [
          "平均=和÷个数",
          "中位数=排序后中间",
          "众数=最多的",
          "极差=最大-最小"
        ],
        "visual": "<div style=\"font-weight:700;margin-bottom:10px\">图解：数据集 {72,85,85,90,98}</div><div style=\"display:grid;grid-template-columns:1fr 1fr;gap:6px;font-size:12px\"><div style=\"padding:6px;background:#dbeafe;border-radius:6px\"><strong>平均数</strong><br>(72+85+85+90+98)÷5=<strong>86</strong></div><div style=\"padding:6px;background:#dcfce7;border-radius:6px\"><strong>中位数</strong><br>排序后第3个=<strong>85</strong></div><div style=\"padding:6px;background:#fef3c7;border-radius:6px\"><strong>众数</strong><br>出现最多=<strong>85</strong></div><div style=\"padding:6px;background:#fee2e2;border-radius:6px\"><strong>极差</strong><br>98-72=<strong>26</strong></div></div>",
        "textbook": "<div style=\"border:2px solid #3b82f6;border-radius:8px;overflow:hidden\"><div style=\"background:#3b82f6;color:#fff;padding:8px 14px;font-weight:700;font-size:14px\">📚 人教版 七年级下册 数据的收集与整理</div><div style=\"padding:14px;font-size:14px;line-height:2\"><p><strong>【知识要点】</strong>平均数=总和÷个数；中位数=排序后中间值；众数=出现最多的值；极差=最大-最小。</p><div style=\"background:#eff6ff;border-radius:6px;padding:10px;margin:10px 0;border-left:3px solid #3b82f6\"><strong>【例题】</strong> 数据3,7,5,7,9,4，求平均数、中位数、众数、极差。<br><strong>解：</strong>排序:3,4,5,7,7,9<br>平均=(3+4+5+7+7+9)/6≈<strong>5.8</strong><br>中位数=(5+7)/2=<strong>6</strong>，众数=<strong>7</strong>，极差=<strong>6</strong></div></div></div>"
      }
    ],
    "practice": {
      "basic": [
        {
          "q": "3,5,7,7,8中位数?",
          "options": [
            "5",
            "6",
            "7",
            "8"
          ],
          "answer": 2,
          "explain": "排序后中间是7"
        },
        {
          "q": "2,3,3,5,7,9众数?",
          "options": [
            "2",
            "3",
            "5",
            "9"
          ],
          "answer": 1,
          "explain": "3出现最多"
        }
      ],
      "advanced": [],
      "amc": [
        {
          "q": "[2025 #14] 插N到2,6,7,7,28使均值=2×中位数，N=?",
          "options": [
            "7",
            "14",
            "20",
            "28",
            "34"
          ],
          "answer": 4,
          "explain": "N=34",
          "year": 2025,
          "num": 14
        },
        {
          "q": "[2023 #20] 插两数到3,3,8,11,28使极差翻倍众数中位数不变，最大和?",
          "options": [
            "56",
            "57",
            "58",
            "60",
            "61"
          ],
          "answer": 2,
          "explain": "5+53=58",
          "year": 2023,
          "num": 20
        }
      ]
    }
  },
  {
    "id": "logic",
    "name": "逻辑推理",
    "icon": "🧠",
    "theme": "data_logic",
    "grade": "竞赛",
    "gradeNum": 8,
    "amcFreq": 4,
    "difficulty": "困难",
    "desc": "排除法、列表法、图着色",
    "realLifeHtml": "<div style=\"margin-bottom:12px;font-size:14px;line-height:1.8\">逻辑推理是数学思维的核心能力！</div><div style=\"display:flex;gap:10px;flex-wrap:wrap\"><div style=\"flex:1;min-width:120px;max-width:160px;background:#dbeafe;border:2px solid #93c5fd;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">🧩</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">数独游戏</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">每行每列不重复</div></div><div style=\"flex:1;min-width:120px;max-width:160px;background:#dcfce7;border:2px solid #86efac;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">🔍</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">侦探推理</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">排除法找真相</div></div><div style=\"flex:1;min-width:120px;max-width:160px;background:#fef3c7;border:2px solid #fde68a;border-radius:12px;padding:14px 10px;text-align:center\"><div style=\"font-size:36px;margin-bottom:6px\">💡</div><div style=\"font-size:12px;font-weight:700;color:#1e293b\">电路设计</div><div style=\"font-size:11px;color:#64748b;margin-top:3px\">逻辑门AND/OR</div></div></div>",
    "examTips": "⚠️ 没公式可套，必须逐步系统推理",
    "commonMistakes": [
      "❌ 凭直觉猜 → ✅ 系统列条件推理"
    ],
    "prereqs": [],
    "glossary": [
      {
        "cn": "逻辑",
        "en": "Logic",
        "pron": ""
      },
      {
        "cn": "推理",
        "en": "Reasoning/Deduction",
        "pron": ""
      },
      {
        "cn": "排除法",
        "en": "Elimination",
        "pron": ""
      }
    ],
    "definitions": [
      {
        "term": "逻辑推理 (Logical Reasoning)",
        "def": "根据已知条件，通过严密的推理得出结论。常用方法：排除法、列表法、逆向思维。"
      }
    ],
    "videosCn": [
            {
                  "title": "逻辑推理入门(排除法·小学奥数)",
                  "url": "https://www.bilibili.com/video/BV1ME411E7Wj/",
                  "searchUrl": "https://search.bilibili.com/all?keyword=逻辑推理+排除法+小学奥数&order=click"
            },
            {
                  "title": "数独怎么玩(逻辑思维训练)",
                  "url": "https://www.bilibili.com/video/BV1st411M7hy/",
                  "searchUrl": "https://search.bilibili.com/all?keyword=数独玩法+逻辑思维+入门&order=click"
            }
      ],
    "videosEn": [
      {
        "title": "TED-Ed - Can you solve the riddle?",
        "url": "https://www.youtube.com/watch?v=1rDVz_Fb6HQ",
        "searchUrl": "https://www.youtube.com/results?search_query=TED-Ed+logic+riddle+solve"
      }
    ],
    "lessons": [
      {
        "title": "像侦探一样思考",
        "story": "每条线索排除一些可能→剩下的就是答案🔍",
        "keyPoints": [
          "排除法",
          "列表法",
          "逆向思维",
          "极端情况"
        ],
        "visual": "<div style=\"font-weight:700;margin-bottom:10px\">排除法解题流程</div><div style=\"display:flex;flex-direction:column;gap:8px;font-size:13px\"><div style=\"display:flex;align-items:center;gap:8px\"><div style=\"width:28px;height:28px;background:var(--p);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0\">1</div><div style=\"padding:8px;background:#f8fafc;border-radius:8px;flex:1\">列出所有可能的答案</div></div><div style=\"display:flex;align-items:center;gap:8px\"><div style=\"width:28px;height:28px;background:var(--r);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0\">2</div><div style=\"padding:8px;background:#fef2f2;border-radius:8px;flex:1\">用每条线索排除不可能的</div></div><div style=\"display:flex;align-items:center;gap:8px\"><div style=\"width:28px;height:28px;background:var(--g);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0\">3</div><div style=\"padding:8px;background:#ecfdf5;border-radius:8px;flex:1\">剩下唯一的就是答案！</div></div></div>",
        "textbook": "<div style=\"border:2px solid #3b82f6;border-radius:8px;overflow:hidden\"><div style=\"background:#3b82f6;color:#fff;padding:8px 14px;font-weight:700;font-size:14px\">📚 竞赛数学 逻辑推理专题</div><div style=\"padding:14px;font-size:14px;line-height:2\"><p><strong>【知识要点】</strong>排除法：列出所有可能，逐一排除不符合条件的。列表法：用表格系统整理信息。</p><div style=\"background:#eff6ff;border-radius:6px;padding:10px;margin:10px 0;border-left:3px solid #3b82f6\"><strong>【例题】</strong> 甲乙丙中有一人偷吃了蛋糕。甲说\"不是我\"，乙说\"是丙\"，丙说\"乙在说谎\"。只有一人说谎，谁偷了？<br><strong>解：</strong>逐假设验证→假设丙说谎→乙说真=是丙→<strong>丙偷了</strong></div></div></div>"
      }
    ],
    "practice": {
      "basic": [
        {
          "q": "甲\"我不是最高\",乙\"我不是最矮\",丙最高。谁最矮?",
          "options": [
            "甲",
            "乙",
            "丙",
            "不确定"
          ],
          "answer": 0,
          "explain": "丙最高→乙不最矮→甲最矮"
        }
      ],
      "advanced": [],
      "amc": []
    }
  }
];

const ACHIEVEMENTS = [
  {
    "id": "first_login",
    "name": "初次探险",
    "desc": "第一次打开学习中心",
    "icon": "🚀"
  },
  {
    "id": "streak_3",
    "name": "三天小将",
    "desc": "连续学习3天",
    "icon": "🔥"
  },
  {
    "id": "streak_7",
    "name": "一周勇士",
    "desc": "连续学习7天",
    "icon": "⚡"
  },
  {
    "id": "streak_30",
    "name": "月度之星",
    "desc": "连续学习30天",
    "icon": "🌟"
  },
  {
    "id": "streak_100",
    "name": "百日传奇",
    "desc": "连续学习100天",
    "icon": "👑"
  },
  {
    "id": "topic_1",
    "name": "初窥门径",
    "desc": "完成第一个知识点",
    "icon": "📖"
  },
  {
    "id": "topic_5",
    "name": "五子登科",
    "desc": "完成5个知识点",
    "icon": "🎓"
  },
  {
    "id": "topic_all",
    "name": "学霸诞生",
    "desc": "完成全部知识点",
    "icon": "🏆"
  },
  {
    "id": "problems_10",
    "name": "做题新手",
    "desc": "累计做10道题",
    "icon": "✏️"
  },
  {
    "id": "problems_50",
    "name": "做题达人",
    "desc": "累计做50道题",
    "icon": "📝"
  },
  {
    "id": "problems_200",
    "name": "刷题机器",
    "desc": "累计做200道题",
    "icon": "🤖"
  },
  {
    "id": "star_50",
    "name": "星光闪耀",
    "desc": "累计获得50颗星星",
    "icon": "✨"
  }
];
