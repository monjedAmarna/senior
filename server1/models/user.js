// استيراد اتصال قاعدة البيانات من ملف config/db.js
const db = require('../config/db');

// تعريف وظيفة للبحث عن المستخدم بناءً على البريد الإلكتروني
exports.findByEmail = (email, callback) => {
  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results[0]); // إرجاع أول نتيجة (إذا وجد)
  });
};

// تعريف وظيفة لإضافة مستخدم جديد
exports.create = (userData, callback) => {
  const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
  db.query(query, [userData.email, userData.password], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    console.log(results);  // إضافة هذا السطر لفحص ما يتم إرجاعه
    callback(null, { id: results.insertId, ...userData }); 
  });
};
