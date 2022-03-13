import React from "react";
import userStyles from './User.module.css'

const User = (props) => {
    return (
        <div className={userStyles.container} key={props.user.id}>
            <div className={userStyles.left}>
                <div className={userStyles.avatar}>
                    <img src={props.user.photos.small != null ? props.user.photos.small : '/User-avatar.png'} alt="avatar" />
                </div>
                <div className={userStyles.Button}>
                    {props.user.followed ? <button onClick={() => { props.unfollow(props.user.id) }}>Unfollow</button>
                        : <button onClick={() => { props.follow(props.user.id) }}>Follow</button>}
                </div>
            </div>
            <div className={userStyles.info}>
                <h2>{props.user.name}</h2>
                <p>{props.user.status}</p>
            </div>
            <div className={userStyles.location}>
                <p>Страна,<br />Город</p>
            </div>
        </div>
    )
}

export default User