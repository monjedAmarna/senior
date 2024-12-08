import React, { useState } from "react";  // استيراد React و useState لإدارة الحالة
import "./App.css";  // استيراد ملف CSS لتنسيق التطبيق
import SignInForm from "./components/SignInForm";  // استيراد نموذج تسجيل الدخول
import SignUpForm from "./components/SignUpForm";  // استيراد نموذج التسجيل

function App() {
  // استخدام hook useState لتتبع حالة ما إذا كان المستخدم في وضع SignUp أو SignIn
  const [isSignUp, setIsSignUp] = useState(false);

  // دالة لتفعيل وضع SignUp
  const handleSignUpClick = () => {
    setIsSignUp(true);  // تغيير الحالة لتفعيل وضع SignUp
  };

  // دالة لتفعيل وضع SignIn
  const handleSignInClick = () => {
    setIsSignUp(false);  // تغيير الحالة لتفعيل وضع SignIn
  };

  return (
    <div className={`container ${isSignUp ? "sign-up-mode" : ""}`}>
      {/* الحاوية الرئيسية التي تحتوي على النماذج. إذا كانت الحالة signUp مفعلة، يتم إضافة الكلاس sign-up-mode */}

      <div className="forms-container">
        {/* حاوية النماذج الخاصة بتسجيل الدخول والتسجيل، يتم التبديل بينهما استنادًا إلى حالة signUp */}
        <div className={`signin-signup ${isSignUp ? "sign-up-mode" : ""}`}>
          {/* نموذج تسجيل الدخول */}
          {isSignUp ? <SignUpForm /> : <SignInForm />}
        </div>
      </div>

      {/* الحاويات التي تحتوي على الألواح */}
      <div className="panels-container">
        {/* اللوح الأيسر (التسجيل الجديد) */}
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>New client, welcome! Please log in to benefit from the offered services.</p>
            <button className="btn transparent" onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>
          <img src="/Artboard 23.png" className="image" alt="" />
        </div>

        {/* اللوح الأيمن (الدخول للمستخدمين الجدد) */}
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>Welcome back! Please log in and enjoy all the services</p>
            <button className="btn transparent" onClick={handleSignInClick}>
              Sign in
            </button>
          </div>
          <img src="/Artboard 23.png" className="image" alt="Artboard" />
        </div>
      </div>
    </div>
  );
}

export default App;  // تصدير المكون ليتم استخدامه في أجزاء أخرى من التطبيق
