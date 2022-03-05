import React from "react";
import HeaderStyles from './Header.module.css'

const Header = () => {
    return (
        <header>
            <div className={HeaderStyles.logo}></div>
            <div className={HeaderStyles.p}>Training Social Network</div>
        </header>)
}

export default Header