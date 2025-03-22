import React from 'react';
import './login.css';

function LoginPage({ onLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div>
      <div>
        <div>
          <img
            alt="Cartoon character welcoming kids"
            height="100"
            src="https://storage.googleapis.com/a1aa/image/HdXLrFzA8UptBdUcUT9szyMfbFf98MOD96cvuSAzF0aEBoGUA.jpg"
            width="100"
          />
          <h1>Sanskriti Sagara</h1>
          <p>Learn Indian languages, culture, and traditions</p>
        </div>
        <form id="loginForm" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit">Login</button>
          <p>Don't have an account? <a href="#">Register</a></p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
