import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import appReducer from "./reduсers/appReducer";
import navbarReducer from './reduсers/navbarReducer';
import profileReducer from './reduсers/profileReducer';
import usersReducer from "./reduсers/usersReducer";
import messagesReducer from './reduсers/messagesReducer';
import authReducer from "./reduсers/authReducer";
import { reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
    app: appReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    messagesPage: messagesReducer,
    navbarPage: navbarReducer,
    auth: authReducer,
    form: formReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store