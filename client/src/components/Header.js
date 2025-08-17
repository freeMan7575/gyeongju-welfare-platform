// src/components/Header.js

import './Header.css';
import { Link } from 'react-router-dom'; // Link를 import합니다.

function Header() {
    return (
      <div className="header-container">
        <h1 className="header-logo">경주 복지 플랫폼</h1>
        <div className="header-menu">
          {/* <a> 태그를 <Link> 컴포넌트로 변경합니다. */}
          <Link to="/home">홈</Link>
          <Link to="/about">서비스 소개</Link>
          <Link to="/login">로그인</Link>
        </div>
      </div>
    );
}

export default Header;