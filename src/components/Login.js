import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();  
    onLogin( email, password);
  };

  return (
    <div className="Login-container">
      <div className="Login-box">
        <h2>Create New Account</h2>
        <p className="Subtitle">Connect with friends, work colleagues and the people around you.</p>
        <form className="signup-form" onSubmit={handleSubmit}>    
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
