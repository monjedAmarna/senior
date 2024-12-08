import axios from 'axios';  // استيراد axios لإجراء طلبات HTTP

const API_URL = 'http://localhost:5000/api/auth/';  // عنوان API الخاص بالتوثيق

// دالة لتسجيل المستخدم
const registerUser  = async (userData) => {
  const response = await axios.post(API_URL + 'register', userData);
  return response.data;
};

// دالة لتسجيل الدخول
const loginUser  = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData);
  return response.data;
};

export default {
  registerUser ,
  loginUser 
};