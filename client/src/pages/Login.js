// src/pages/Login.js

import './Login.css'; // 1. Login 페이지 전용 CSS를 import 합니다.
import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('아이디:', username, '비밀번호:', password);
  };

  return (
    // 2. className을 올바르게 지정합니다.
    <div className="login-container">
      <h1>로그인</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">아이디</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" className="login-button">로그인</button>
      </form>
    </div>
  );
}

export default Login;