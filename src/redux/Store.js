import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import appReducer from "./reduсers/appReducer";
import profileReducer from './reduсers/profileReducer';
import usersReducer from "./reduсers/usersReducer";
import messagesReducer from './reduсers/messagesReducer';
import authReducer from "./reduсers/authReducer";
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
    app: appReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    messagesPage: messagesReducer,
    auth: authReducer,
    form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

// const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store