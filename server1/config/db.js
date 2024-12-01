// استيراد مكتبة mysql2 للتعامل مع قاعدة البيانات
const mysql = require('mysql2');

// استيراد مكتبة dotenv لتحميل المتغيرات البيئية من ملف .env
require('dotenv').config();

// إنشاء اتصال بقاعدة البيانات باستخدام بيانات من ملف .env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,        // اسم المضيف (Host)
  user: process.env.DB_USER,        // اسم المستخدم لقاعدة البيانات
  password: process.env.DB_PASSWORD, // كلمة المرور
  database: process.env.DB_NAME     // اسم قاعدة البيانات
});

// التحقق من نجاح الاتصال بقاعدة البيانات
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err); // في حالة وجود خطأ، يظهر في وحدة التحكم
    return;
  }
  console.log('Connected to MySQL database!'); // تأكيد الاتصال الناجح
});

// تصدير الاتصال لاستخدامه في أجزاء أخرى من التطبيق
module.exports = connection;
