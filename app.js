const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('5조 테스트 공간');
});

// 서버 시작
app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다!`);
});
