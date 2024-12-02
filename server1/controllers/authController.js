const jwt = require("jsonwebtoken");
const db = require("../config/db"); // استيراد الاتصال بقاعدة البيانات
const bcrypt = require("bcryptjs"); // لتشفير كلمة المرور

// دالة مساعدة لتحويل استعلامات db.query إلى وعود (Promises)
const queryDatabase = (query, params) => {
  return new Promise((resolve, reject) => {
    db.query(query, params, (err, results) => {
      if (err) {
        reject(err); // إذا حدث خطأ، قم برفض الوعد
      } else {
        resolve(results); // إذا تم تنفيذ الاستعلام بنجاح
      }
    });
  });
};

// تسجيل الدخول
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // البحث عن المستخدم بالبريد الإلكتروني
    const results = await queryDatabase("SELECT * FROM users WHERE email = ?", [email]);

    if (results.length === 0) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const user = results[0];

    // مقارنة كلمة المرور المدخلة مع المخزنة
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // إنشاء التوكن
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// تسجيل مستخدم جديد
exports.registerUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // التحقق من وجود المستخدم مسبقًا
    const results = await queryDatabase("SELECT * FROM users WHERE email = ?", [email]);

    if (results.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // تشفير كلمة المرور
    const hashedPassword = await bcrypt.hash(password, 10);

    // إضافة المستخدم الجديد إلى قاعدة البيانات
    await queryDatabase("INSERT INTO users (email, password) VALUES (?, ?)", [email, hashedPassword]);

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
