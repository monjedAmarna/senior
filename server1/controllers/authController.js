// استيراد النموذج الخاص بالمستخدمين
const User = require('../models/user');

// تعريف وظيفة لجلب جميع المستخدمين
exports.getUsers = (req, res) => {
  // استدعاء وظيفة getAllUsers من النموذج
  User.getAllUsers((err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      return res.status(500).send('Error fetching users');
    }
    res.status(200).json(results); // إرجاع النتائج كاستجابة JSON
  });
};
