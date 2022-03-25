import appStyles from './App.module.css';
import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

import AllPagePreloader from './Common/AllPagePreloader/AllPagePreloader';

import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer'

import { initialize } from './redux/reduсers/appReducer';
import { withSuspence } from './HOC/withSuspense';

const MessagesContainer = React.lazy(() => import('./components/Messages/MessagesContainer'))
const Login = React.lazy(() => import('./components/Login/Login'))
const Images = React.lazy(() => import('./components/Images/Images'))
const Music = React.lazy(() => import('./components/Music/Music'))
const News = React.lazy(() => import('./components/News/News'))
const Settings = React.lazy(() => import('./components/Settings/Settings'))

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
          <Navbar />
          <div className={appStyles.contentWrapper}>
            <Route exact path='/profile/:id' render={() => <ProfileContainer />} />
            <Route exact path='/users' render={() => <UsersContainer />} />
            <Route path='/messages' render={withSuspence(MessagesContainer)} />
            <Route exact path='/images' render={withSuspence(Images)} />
            <Route exact path='/music' render={withSuspence(Music)} />
            <Route exact path='/news' render={withSuspence(News)} />
            <Route exact path='/settings' render={withSuspence(Settings)} />
            <Route exact path='/login' render={withSuspence(Login)} />
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
