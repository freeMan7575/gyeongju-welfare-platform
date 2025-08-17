// src/pages/About.js

import './About.css'; // 1. About 페이지 전용 CSS를 import 합니다.

function About() {
  return (
    // 2. className으로 스타일을 적용할 컨테이너를 만듭니다.
    <div className="about-container">
      <h1>경주 맞춤형 복지 플랫폼을 소개합니다.</h1>

      <h2>우리의 목적</h2>
      <p>
        경주 맞춤형 복지 플랫폼은 정보의 격차로 인해 필요한 복지 혜택을 놓치는 분들이 없도록, 흩어져 있는 복잡한 복지 정보를 한곳에 모아 가장 알기 쉽게 전달하는 것을 목표로 합니다.
      </p>

      <h2>주요 기능</h2>
      <ul>
        <li>✅ 맞춤 복지 검색: 나에게 맞는 복지 서비스를 쉽고 빠르게 찾아보세요.</li>
        <li>✅ 복지 A to Z: 어려운 복지 제도, 저희가 하나부터 열까지 쉽게 풀어드립니다.</li>
        <li>✅ 최신 복지 소식: 경주시의 새로운 복지 소식을 가장 먼저 알려드립니다.</li>
      </ul>
    </div>
  );
}

export default About;