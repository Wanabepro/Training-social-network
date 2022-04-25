import React, { useState } from "react";
import Authorized from "./Authorized/Authorized";
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom';
import Navbar from './../Navbar/Navbar';

const Header = (props) => {
    let [burgerIsActive, toggleBurger] = useState(false)
    const toggleIsActive = () => {
        if (burgerIsActive) return toggleBurger(false)
        return toggleBurger(true)
    }
    const activeStyleSetter = isActive => isActive ? ` ${styles.active}` : ''
    const activeMenuStyleSetter = isActive => isActive ? ` ${styles.activeMenu}` : ''

    return (
        <header className={styles.mainHeader}>
            <div className={styles.burger + activeStyleSetter(burgerIsActive)} onClick={toggleIsActive}>
                <span></span>
            </div>
            <div className={styles.menu + activeMenuStyleSetter(burgerIsActive)} onClick={toggleIsActive}>
                <Navbar />
            </div>
            <div className={styles.logo}></div>
            <div className={styles.p}>Training Social Network</div>
            {props.isAuth
                ? <Authorized login={props.login} email={props.email} photo={props.photo} logout={props.logout} />
                : <div className={styles.login}><NavLink to='/login' className={styles.link}>Login</NavLink></div>}
        </header>)
}

export default Header