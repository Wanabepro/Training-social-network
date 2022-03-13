import appStyles from './App.module.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import Images from './components/Images/Images';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer'

const App = (props) => {
  return (
    <div className={appStyles.App}>
      <Header />
      <div className={appStyles.bodyWrapper}>
        <Navbar state={props.store.getState().navbarPage} />
        <div className={appStyles.contentWrapper}>
          <Routes>
            <Route exact path='/profile' element={<Profile state={props.store.getState().profilePage} />} />
            <Route exact path='/users' element={<UsersContainer />} />
            <Route path='/messages' element={<Messages store={props.store} />} />
            <Route exact path='/images' element={<Images />} />
            <Route exact path='/music' element={<Music />} />
            <Route exact path='/news' element={<News />} />
            <Route exact path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}


export default App;
