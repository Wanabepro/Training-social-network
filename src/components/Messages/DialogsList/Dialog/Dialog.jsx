import React from "react";
import { NavLink } from "react-router-dom";
import dialogStyles from './Dialog.module.css';

const Dialog = (props) => {
    return (
        <NavLink to={'/messages/' + props.id} className={dialogStyles.link}>
            <div className={dialogStyles.wrapper}>
                <div className={dialogStyles.avatar}>
                    <img src={props.avatarLink} alt="avatar" />
                </div>
                <div className={dialogStyles.info}>
                    <div>{props.name}</div>
                    <div>{props.lastMessage}</div>
                </div>
            </div>
        </NavLink>
    )
}

export default Dialog