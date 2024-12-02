const express = require("express");
const app = express();
const authRoutes = require("./routes/authRoutes"); // استيراد مسارات التوثيق

app.use(express.json()); // للتعامل مع بيانات JSON
app.use("/api/auth", authRoutes); // استخدام مسارات التوثيق

// تشغيل السيرفر
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
