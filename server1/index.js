// تحميل المتغيرات البيئية من ملف .env
require('dotenv').config();

// استيراد مكتبة Express لإنشاء التطبيق
const express = require('express');

// استيراد المسارات الخاصة بالمستخدمين
const userRoutes = require('./routes/userRoutes');

// إنشاء تطبيق Express
const app = express();

// تحديد رقم المنفذ من المتغيرات البيئية أو استخدام 3000 كمنفذ افتراضي
const port = process.env.PORT || 3000;

// Middleware لتحليل بيانات JSON في الطلبات
app.use(express.json());

// ربط المسارات الخاصة بالمستخدمين بالتطبيق (API Base Route: /api)
app.use('/api', userRoutes);

// بدء تشغيل الخادم والاستماع على المنفذ المحدد
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`); // طباعة رسالة تأكيد
});
