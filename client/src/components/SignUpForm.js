import React, { useState } from 'react';
import authService from '../services/authService';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = { username, email, password };
      const data = await authService.registerUser (userData);
      console.log('User  registered:', data);
    } catch (err) {
      setError('Registration failed');
    }
  };

  return (
    <div className="sign-up-form">
      <h2 className="title">Sign up</h2>
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
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <input type="submit" value="Sign up" className="btn" />
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default SignUpForm;