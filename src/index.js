import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/Store';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App store={store} />
    </Provider>
  </Router>,
  document.getElementById('root')
)

reportWebVitals();
