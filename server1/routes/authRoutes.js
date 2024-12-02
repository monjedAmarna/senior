// استيراد مكتبة Express لإنشاء المسارات
const express = require('express');

// إنشاء كائن Router
const router = express.Router();

// استيراد وحدة التحكم الخاصة بالمستخدمين
const userController = require('../controllers/userController');



// POST route for registration
router.post('/register', authController.register);

// تعريف المسار لجلب بيانات المستخدمين واستدعاء الدالة من وحدة التحكم
router.get('/users', userController.getUsers);

// تصدير الراوتر لاستخدامه في التطبيق الرئيسي
module.exports = router;
