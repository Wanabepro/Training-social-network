import appStyles from './App.module.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import Images from './components/Images/Images';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';

const App = () => {
  return (
    <BrowserRouter>
      <div className={appStyles.App}>
        <Header />
        <div className={appStyles.bodyWrapper}>
          <Navbar />
          <div className={appStyles.contentWrapper}>
            <Routes>
              <Route path='/profile' element={<Profile />} />
              <Route path='/messages' element={<Messages />} />
              <Route path='/images' element={<Images />} />
              <Route path='/music' element={<Music />} />
              <Route path='/news' element={<News />} />
              <Route path='/settings' element={<Settings />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;
