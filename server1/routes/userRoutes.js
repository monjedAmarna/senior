// استيراد مكتبة Express لإنشاء الراوتر
const express = require('express');
const router = express.Router();

// استيراد الدوال الخاصة بـ authController
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
// مسار لتسجيل المستخدمين
router.post('/register', authController.register);

// مسار لتسجيل الدخول
router.post('/login', authController.login);

// تصدير الراوتر بحيث يمكن استخدامه في الملفات الأخرى
module.exports = router;
