import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import navbarReducer from './reduсers/navbarReducer';
import profileReducer from './reduсers/profileReducer';
import usersReducer from "./reduсers/usersReducer";
import messagesReducer from './reduсers/messagesReducer';
import authReducer from "./reduсers/authReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    usersPage: usersReducer,
    messagesPage: messagesReducer,
    navbarPage: navbarReducer,
    auth: authReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store