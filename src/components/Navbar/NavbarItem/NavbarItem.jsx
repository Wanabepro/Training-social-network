import React from "react"
import NavbarItemStyles from './NavbarItem.module.css'
import { NavLink } from 'react-router-dom';

let NavbarItem = (props) => {
    return (
        <NavLink to={props.link} className={NavbarItemStyles.link}>
            <div className={NavbarItemStyles.wrapper}>
                <img src={props.icon} alt="icon" />
                {props.name}
            </div>
        </NavLink >
    )
}

export default NavbarItem