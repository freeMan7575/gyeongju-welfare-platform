// src/App.js

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Main from './components/Main'; // 기존 Main 컴포넌트

import { Routes, Route } from 'react-router-dom';

function App() {
   return (
      <div>
         {/* 모든 페이지에 공통으로 나타날 Header와 Footer는 Routes 밖에 둡니다. */}
         <Header />

         {/* URL 경로에 따라 페이지를 보여주는 Routes 컴포넌트입니다. */}
         <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />

            <Route path="/main" element={<Main />} />
         </Routes>

         <Footer />
      </div>
   );
}

export default App;
