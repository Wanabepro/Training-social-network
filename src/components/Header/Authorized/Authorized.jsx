import React from "react";
import authorizedStyles from './Authorized.module.css'
import avatar from './../../../Icons/User-avatar.png'

const Authorized = (props) => {
    return (
        <div className={authorizedStyles.auth}>
            <div className={authorizedStyles.avatar}>
                <img src={props.photo ? props.photo : avatar} alt="avatar" />
            </div>
            <div>
                <p>{props.login}</p>
                <p>{props.email}</p>
            </div>
            <div>
                <button onClick={props.logout}>Log Out</button>
            </div>
        </div>
    )
}

export default Authorized