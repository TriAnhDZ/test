const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = 3000;

app.use(bodyParser.json());

// 📌 Phục vụ file HTML trong thư mục "public"
app.use(express.static("public"));

// 📌 Route mặc định để mở file index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
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
