// src/components/Main.js

import './Main.css';

const topics = [
   {
      id: 1,
      title: '어르신 기초연금 A to Z',
      description: '만 65세 이상이라면 꼭 확인해야 할 정보!',
      imageUrl: '/images/topic_elderly.jpg',
   },
   {
      id: 2,
      title: '우리아이 보육료 지원 A to Z',
      description: '어린이집, 유치원 비용 지원받는 법 총정리',
      imageUrl: '/images/topic_child.jpg',
   },
   {
      id: 3,
      title: '긴급복지 생계지원 A to Z',
      description: '갑작스러운 위기 상황, 도움을 요청하세요',
      imageUrl: '/images/topic_family.jpg',
   },
];

function Main() {
   return (
      <div className="main-container">
         <h2>경주 복지 A to Z</h2>

         <div className="topic-list">
            {topics.map((topic) => {
               // map 함수가 반복될 때마다 topic 객체를 콘솔에 출력합니다.

               return (
                  <div key={topic.id} className="topic-card">
                     <img src={topic.imageUrl} alt={topic.title} />
                     <h3>{topic.title}</h3>
                     <p>{topic.description}</p>
                  </div>
               );
            })}
         </div>
      </div>
   );
}

export default Main;
