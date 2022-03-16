import { combineReducers, createStore } from "redux";
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
let store = createStore(reducers)

export default store