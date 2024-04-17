import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainScreen from './screen/MainScreen';
import LoginScreen from './screen/LoginScreen';
import GuideScreen from './screen/GuideScreen';
import HomepageScreen from './screen/HomepageScreen';
import ArticleScreen from './screen/ArticleScreen';
import IntroScreen from './screen/IntroScreen';
import MyPageScreen from './screen/MyPageScreen';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<MainScreen/>}/>
          <Route path="/login" element={<LoginScreen/>}/>
          <Route path="/guide" element={<GuideScreen/>}/>
          <Route path="/myhomepage" element={<HomepageScreen/>}/>
          {/* 특정 단체 페이지로 이동하기 위한 라우터 */}
          <Route path="/group/:groupId" element={<HomepageScreen/>} />
          <Route path="/article" element={<ArticleScreen/>}/>
          <Route path="/intro" element={<IntroScreen/>}/>
          <Route path="/mypage" element={<MyPageScreen/>}/>
        </Routes>
      </Router>
    );
  }
}

export default App;
