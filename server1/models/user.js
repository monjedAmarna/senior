// استيراد اتصال قاعدة البيانات من ملف config/db.js
const db = require('../config/db');

// تعريف وظيفة لجلب جميع المستخدمين من قاعدة البيانات
exports.getAllUsers = (callback) => {
  // استعلام SQL لجلب كل السجلات من جدول "users"
  const query = 'SELECT * FROM users';
  
  // تنفيذ الاستعلام
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      return callback(err, null); // إرجاع الخطأ إلى الوظيفة المستدعية
    }
    callback(null, results); // إرجاع النتائج إذا نجح الاستعلام
  });
};

// تعريف وظيفة لإضافة مستخدم جديد (اختياري)
exports.addUser = (userData, callback) => {
  // استعلام SQL لإدخال بيانات المستخدم الجديد
  const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  
  // تنفيذ الاستعلام مع البيانات
  db.query(query, [userData.name, userData.email, userData.password], (err, results) => {
    if (err) {
      console.error('Error adding user:', err);
      return callback(err, null);
    }
    callback(null, results); // إرجاع النتائج إذا نجح الإدخال
  });
};
