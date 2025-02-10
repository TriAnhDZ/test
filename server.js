const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

// 📌 Phục vụ trực tiếp file `index.html` từ thư mục gốc (KHÔNG cần thư mục `public/`)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// 📌 API lưu câu trả lời
app.post("/answer", (req, res) => {
    const { answers } = req.body;
    console.log("📩 Câu trả lời nhận được:", answers);
    res.send("Câu trả lời đã được ghi nhận!");
});

// 📌 Chạy server
app.listen(port, () => {
    console.log(`🚀 Server đang chạy tại http://localhost:${port}`);
});
