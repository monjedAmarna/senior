// استيراد نموذج المستخدمين و مكتبة bcryptjs و jsonwebtoken
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// وظيفة لتسجيل المستخدم
exports.register = (req, res) => {
  const { email, password } = req.body;

  // تحقق من وجود المستخدم مسبقًا
  User.findByEmail(email, (err, existingUser) => {
    if (err) {
      return res.status(500).json({ message: 'Error checking user', error: err });
    }

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // تشفير كلمة المرور
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        return res.status(500).json({ message: 'Error hashing password', error: err });
      }

      // إضافة المستخدم إلى قاعدة البيانات
      User.create({ email, password: hashedPassword }, (err, newUser) => {
        if (err) {
          return res.status(500).json({ message: 'Error creating user', error: err });
        }

        // توليد توكن JWT للمستخدم الجديد
        const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ message: 'User created successfully', token });
      });
    });
  });
};

// وظيفة لتسجيل الدخول
exports.login = (req, res) => {
  const { email, password } = req.body;

  // التحقق من وجود المستخدم
  User.findByEmail(email, (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching user', error: err });
    }

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // التحقق من صحة كلمة المرور
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return res.status(500).json({ message: 'Error comparing passwords', error: err });
      }

      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      // توليد توكن JWT للمستخدم
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

      res.status(200).json({ message: 'Login successful', token });
    });
  });
};
