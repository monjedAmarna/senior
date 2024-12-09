const express = require('express');
const cors = require('cors'); // استيراد مكتبة CORS
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = 5000;

app.use(cors()); // تمكين CORS للسماح بالطلبات من الفرونت
app.use(express.json()); // للتعامل مع JSON في الطلبات
app.use('/api', authRoutes); // ربط المسارات

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
