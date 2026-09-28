const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// 静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

// 首页路由：返回包含服务器时间的页面
app.get('/', (req, res) => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const serverTime = `${year}年${month}月${day}日 ${hours}:${minutes}:${seconds}`;

  res.send(`
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello World - 我的第一个AI开发的网站</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: "PingFang SC", "Microsoft YaHei", "Helvetica Neue", Arial, sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: #ffffff;
      text-align: center;
      padding: 20px;
    }
    h1 {
      font-size: 2.5rem;
      margin-bottom: 24px;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
      line-height: 1.4;
    }
    .time-card {
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(10px);
      border-radius: 16px;
      padding: 24px 48px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
    }
    .time-label {
      font-size: 1rem;
      opacity: 0.85;
      margin-bottom: 8px;
    }
    .time-value {
      font-size: 2rem;
      font-weight: bold;
      font-variant-numeric: tabular-nums;
      letter-spacing: 2px;
    }
    .footer {
      margin-top: 40px;
      font-size: 0.9rem;
      opacity: 0.7;
    }
  </style>
</head>
<body>
  <h1>Hello World！<br>我是李广宇，<br>我的第一个AI开发的网站</h1>
  <div class="time-card">
    <div class="time-label">当前服务器时间</div>
    <div class="time-value" id="server-time">${serverTime}</div>
  </div>
  <div class="footer">由 Node.js + Express 驱动</div>
</body>
</html>
  `);
});

app.listen(PORT, () => {
  console.log(`服务器已启动！`);
  console.log(`请在浏览器访问: http://localhost:${PORT}`);
});
