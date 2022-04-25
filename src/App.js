import appStyles from './App.module.css';
import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
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
import { Switch } from 'react-router-dom';

const MessagesContainer = React.lazy(() => import('./components/Messages/MessagesContainer'))
const Login = React.lazy(() => import('./components/Login/Login'))
// const Images = React.lazy(() => import('./components/Images/Images'))
// const Music = React.lazy(() => import('./components/Music/Music'))
// const News = React.lazy(() => import('./components/News/News'))
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
          <div className={appStyles.sidebar}>
            <Navbar />
          </div>
          <div className={appStyles.contentWrapper}>
            <Switch>
              <Route exact path='/profile/:id' component={ProfileContainer} />
              <Route exact path='/users' component={UsersContainer} />
              <Route path='/messages/:id' component={withSuspence(MessagesContainer)} />
              {/* <Route exact path='/images' component={withSuspence(Images)} />
              <Route exact path='/music' component={withSuspence(Music)} />
              <Route exact path='/news' component={withSuspence(News)} /> */}
              <Route exact path='/settings/:settingName?' component={withSuspence(Settings)} />
              <Route exact path='/login' component={withSuspence(Login)} />
              <Redirect exact from="/" to={`/profile/${this.props.authorizedUserId}`} />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  initialized: state.app.initialized,
  authorizedUserId: state.auth.id
})

export default compose(
  connect(mapStateToProps, { initialize }),
  withRouter,
)(App)
