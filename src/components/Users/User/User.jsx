import React from "react";
import { NavLink } from 'react-router-dom';
import userStyles from './User.module.css'
import { usersAPI } from './../../../api/api';

const User = (props) => {
    debugger
    return (
        <div className={userStyles.container}>
            <div className={userStyles.left}>
                <NavLink to={`/profile/${props.user.id}`}>
                    <div className={userStyles.avatar}>
                        <img src={props.user.photos.small != null ? props.user.photos.small : '/User-avatar.png'} alt="avatar" />
                    </div>
                </NavLink>
                <div className={userStyles.Button}>
                    {props.user.followed ?
                        <button disabled={props.isFollowing} onClick={() => {
                            props.toggleFollowing(true)
                            usersAPI.unfollow(props.user.id)
                                .then(resultCode => {
                                    if (resultCode === 0) {
                                        props.unfollow(props.user.id)
                                    }
                                })
                            props.toggleFollowing(false)
                        }}>Unfollow</button>
                        : <button disabled={props.isFollowing} onClick={() => {
                            props.toggleFollowing(true)
                            usersAPI.follow(props.user.id)
                                .then(resultCode => {
                                    if (resultCode === 0) {
                                        props.follow(props.user.id)
                                    }
                                })
                            props.toggleFollowing(false)
                        }}>Follow</button>}
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
