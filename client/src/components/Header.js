// src/components/Header.js

import './Header.css';
// ↓↓↓ 1. react-router-dom에서 Link 부품을 수입합니다. ↓↓↓
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header-container">
      <h1 className="header-logo">경주 복지 플랫폼</h1>
      <div className="header-menu">
        {/* ↓↓↓ 2. <a> 태그를 <Link>로, href를 to로 바꿉니다. ↓↓↓ */}
        <Link to="/">홈</Link>
        <Link to="/about">서비스 소개</Link>
        <Link to="/login">로그인</Link>
      </div>
    </div>
  );
}

export default Header;