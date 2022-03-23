import appStyles from './App.module.css';
import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ProfileContainer from './components/Profile/ProfileContainer';
import MessagesContainer from './components/Messages/MessagesContainer';
import Images from './components/Images/Images';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer'
import Login from './components/Login/Login';
import AllPagePreloader from './Common/AllPagePreloader/AllPagePreloader';
import { initialize } from './redux/reduсers/appReducer';

class App extends React.Component {
  componentDidMount() {
    this.props.initialize()
  }

  render() {
    if (!this.props.initialized) return <AllPagePreloader />

    return (
      <div className={appStyles.App}>
        <HeaderContainer />
        <div className={appStyles.bodyWrapper}>
          <Navbar state={this.props.store.getState().navbarPage} />
          <div className={appStyles.contentWrapper}>
            <Route exact path='/profile/:id?' render={() => <ProfileContainer />} />
            <Route exact path='/users' render={() => <UsersContainer />} />
            <Route path='/messages' render={() => <MessagesContainer />} />
            <Route exact path='/images' render={() => <Images />} />
            <Route exact path='/music' render={() => <Music />} />
            <Route exact path='/news' render={() => <News />} />
            <Route exact path='/settings' render={() => <Settings />} />
            <Route exact path='/login' render={() => <Login />} />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  initialized: state.app.initialized
})

export default compose(
  connect(mapStateToProps, { initialize }),
  withRouter
)(App)
