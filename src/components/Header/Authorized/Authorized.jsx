import React from "react";
import authorizedStyles from './Authorized.module.css'

const Authorized = (props) => {
    return (
        <div className={authorizedStyles.auth}>
            <div className={authorizedStyles.avatar}>
                <img src="#s" alt="avatar" />
            </div>
            <div>
                <p>{props.login}</p>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Authorized