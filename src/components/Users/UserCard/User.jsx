import React from "react";
import userStyles from "./User.module.css"

const User = (user) => {
    return (
        <div className={userStyles.container}>
            <div className={userStyles.left}>
                <div className={userStyles.avatar}>
                    <img src="#s" alt="avatar" />
                </div>
                <div className={userStyles.Button}>
                    {user.followed ? <button onClick={() => {user.unfollow(user.id)}}>Unfollow</button> 
                    : <button onClick={() => {user.follow(user.id)}}>Follow</button>}
                </div>
            </div>
            <div className={userStyles.info}>
                <h2>{user.name}</h2>
                <p>{user.status}</p>
            </div>
            <div className={userStyles.citi}>
                <p>Страна,<br />Город</p>
            </div>
        </div>
    )
}

export default User