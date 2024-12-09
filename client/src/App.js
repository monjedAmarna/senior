import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isSignUpMode, setSignUpMode] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        alert(`Login successful: ${data.message}`);
        localStorage.setItem('token', data.token); // تخزين التوكن إذا لزم الأمر
      } else {
        setErrorMessage(`Login failed: ${data.message}`);
      }
    } catch (error) {
      setErrorMessage(`Login error: ${error.message}`);
    }
  };

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        alert(`Registration successful: ${data.message}`);
        setFormData({ email: '', password: '' }); // Clear form data
      } else {
        setErrorMessage(`Registration failed: ${data.message}`);
      }
    } catch (error) {
      setErrorMessage(`Registration error: ${error.message}`);
    }
  };

  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {/* Form تسجيل الدخول */}
          <form className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="button" className="btn" onClick={handleLogin}>
              Login
            </button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>

          {/* Form التسجيل */}
          <form className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="button" className="btn" onClick={handleRegister}>
              Sign Up
            </button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>Sign up to get started!</p>
            <button className="btn transparent" onClick={() => setSignUpMode(true)}>
              Sign Up
            </button>
          </div>
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>Sign in to continue!</p>
            <button className="btn transparent" onClick={() => setSignUpMode(false)}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
