// =====================================================
// AMC8 Learning Hub — 配置文件
// =====================================================
// 你只需要维护这一个文件来管理用户和Firebase配置
// 修改后上传到 GitHub，网站会自动更新
// =====================================================

// ===== Firebase 配置 =====
// 注册步骤：
// 1. 访问 https://firebase.google.com，用Google账号登录
// 2. "Add project" → 名称填 amc8-hub → 关闭Analytics → 创建
// 3. 左侧 "Realtime Database" → 创建数据库 → 选"测试模式"
// 4. 左上齿轮 → "项目设置" → 复制下面三个值填入
const FIREBASE_CONFIG = {
  apiKey:           "AIzaSyAhGw5N8VldBtpFKvPWClWSziGcDOwBwUA",
  authDomain:       "amc8-hub.firebaseapp.com",
  databaseURL:      "https://amc8-hub-default-rtdb.firebaseio.com",
  projectId:        "amc8-hub",
  storageBucket:    "amc8-hub.firebasestorage.app",
  messagingSenderId:"536624927168",
  appId:            "1:536624927168:web:b355a6e875d2cc62d8f825"
};

// ===== 用户专属验证码 =====
// 格式：'验证码': { name: '姓名', avatar: 'emoji头像' }
// 验证码建议：姓名缩写 + 年份，如 AMY2027
// 添加新同学：在下面新增一行即可，保存后上传GitHub
const INVITE_CODES = {
  'AMY2027':   { name: '小美',  avatar: '🐰' },
  'MIKE2027':  { name: '小明',  avatar: '🐯' },
  'LUCY2027':  { name: '小露',  avatar: '🐼' },
  'TONY2027':  { name: '小华',  avatar: '🦊' },
  'ADMIN888':  { name: '老师',  avatar: '👩‍🏫' },
  'josie':     { name: 'josie',  avatar: '🌸' },
  'ever':      { name: 'ever',   avatar: '🌟' },
  'luc':       { name: 'luc',    avatar: '🦁' },
  'ariel':     { name: 'ariel',  avatar: '🐬' },
  // ↓ 在这里继续添加新同学
  // 'CODE2027': { name: '姓名', avatar: '🐻' },
};
