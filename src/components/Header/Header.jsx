import React from "react";
import Authorized from "./Authorized/Authorized";
import HeaderStyles from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header>
            <div className={HeaderStyles.logo}></div>
            <div className={HeaderStyles.p}>Training Social Network</div>
            {props.isAuth ? <Authorized login={props.login} email={props.email}/> : <div className={HeaderStyles.login}><NavLink to='/login' className={HeaderStyles.link}>Login</NavLink></div>} 
        </header>)
}

export default Header