import React from "react";
import { NavLink } from 'react-router-dom';
import userStyles from './User.module.css'
import avatar from './../../../Icons/User-avatar.png'

const User = (props) => {
    return (
        <div className={userStyles.container}>
            <div className={userStyles.left}>
                <NavLink to={`/profile/${props.user.id}`}>
                    <div className={userStyles.avatar}>
                        <img src={props.user.photos.small != null ? props.user.photos.small : avatar} alt="avatar" />
                    </div>
                </NavLink>
                <div className={userStyles.Button}>
                    {props.user.followed ?
                        <button disabled={props.isFollowing.some(id => id === props.user.id)} onClick={() => {
                            props.unfollowUser(props.user.id)
                        }}>Unfollow</button>
                        : <button disabled={props.isFollowing.some(id => id === props.user.id)} onClick={() => {
                            props.followUser(props.user.id)
                        }}>Follow</button>}
                </div>
            </div>
            <div className={userStyles.info}>
            <NavLink to={`/profile/${props.user.id}`} className={userStyles.rightLink}>
                <h2>{props.user.name}</h2>
                <p>{props.user.status}</p>
            </NavLink>
            </div>
        </div>
    )
}

export default User
