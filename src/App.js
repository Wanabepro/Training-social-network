import appStyles from './App.module.css';
import React from 'react';
import { Route } from 'react-router-dom';

import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Messages from './components/Messages/Messages';
import Images from './components/Images/Images';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer'


const App = (props) => {
  return (
    <div className={appStyles.App}>
      <HeaderContainer />
      <div className={appStyles.bodyWrapper}>
        <Navbar state={props.store.getState().navbarPage} />
        <div className={appStyles.contentWrapper}>
          <Route exact path='/profile/:id?' render={() => <ProfileContainer state={props.store.getState().profilePage} />} />
          <Route exact path='/users' render={() => <UsersContainer />} />
          <Route path='/messages' render={() => <Messages store={props.store} />} />
          <Route exact path='/images' render={() => <Images />} />
          <Route exact path='/music' render={() => <Music />} />
          <Route exact path='/news' render={() => <News />} />
          <Route exact path='/settings' render={() => <Settings />} />
        </div>
      </div>
      <Footer />
    </div>
  );
}


export default App;
