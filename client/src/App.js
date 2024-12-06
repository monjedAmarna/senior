import React, { useState } from "react";  // استيراد React و useState لإدارة الحالة
import "./App.css";  // استيراد ملف CSS لتنسيق التطبيق

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
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>

          {/* نموذج التسجيل */}
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      {/* الحاويات التي تحتوي على الألواح */}
      <div className="panels-container">
        {/* اللوح الأيسر (التسجيل الجديد) */}
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              New client, welcome! Please log in to benefit from the offered services.
            </p>
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
