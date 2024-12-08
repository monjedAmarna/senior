import React, { useState } from 'react';
import authService from '../services/authService';

const SignInForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = { username, password };
      const data = await authService.loginUser (userData);
      console.log('User  logged in:', data);
      // يمكنك هنا إضافة أي إجراء بعد تسجيل الدخول الناجح، مثل إعادة التوجيه إلى صفحة أخرى
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="sign-in-form">
      <h2 className="title">Sign in</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input type="submit" value="Sign in" className="btn" />
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default SignInForm;