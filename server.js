const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(__dirname));

app.post('/save', (req, res) => {
    const data = req.body.answers.join("\n");
    fs.writeFileSync('answers.txt', data);
    res.send("Lưu thành công!");
});

app.listen(3000, () => console.log('Server chạy tại http://localhost:3000'));
