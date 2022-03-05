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
              <Route exact path='/profile' element={<Profile />} />
              <Route exact path='/messages' element={<Messages />} />
              <Route exact path='/images' element={<Images />} />
              <Route exact path='/music' element={<Music />} />
              <Route exact path='/news' element={<News />} />
              <Route exact path='/settings' element={<Settings />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;
