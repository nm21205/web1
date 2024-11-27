const express = require('express');
const app = express();
const port = 80;  // 80에서 3000으로 변경

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`서버가 구동 되었습니다 http://localhost:${port}`);  // https를 http로 변경
});