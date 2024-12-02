const express = require('express');
const bcrypt = require('bcryptjs');
const app = express();
const port = 3000;

app.use(express.json());

const users = []; // للتخزين المؤقت للمستخدمين

// مسار التسجيل
app.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;

    // البحث عن المستخدم بناءً على البريد الإلكتروني
    const findUser = users.find((data) => data.email === email);
    if (findUser) {
      return res.status(400).send("البريد الإلكتروني موجود بالفعل!");
    }

    // تشفير كلمة المرور
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ email, password: hashedPassword });

    res.status(201).send("تم التسجيل بنجاح!");
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
