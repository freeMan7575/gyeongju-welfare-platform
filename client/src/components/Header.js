import './Header.css';

function Header() {
   return (
      <div className="header-container">
         <h1 className="header-logo">경주 복지 플랫폼</h1>
         <div className="header-menu">
         <a href="/">홈</a>
         <a href="/about">서비스 소개</a>
         <a href="/login">로그인</a>
         </div>
      </div>
   );


}

export default Header;
