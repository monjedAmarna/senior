const express = require("express");
const router = express.Router();
const { loginUser, registerUser } = require("../controllers/authController"); // تأكد من استيراد loginUser

// إضافة باقي الكود
router.post("/login", loginUser);
router.post("/register", registerUser);

module.exports = router;
