import React from "react";
import postStyles from './Post.module.css'
import likeIcon from './../../../../Icons/thumb-up-outline.svg'

const Post = (props) => {
    return (
        <div className={postStyles.wrapper}>
            <div className={postStyles.avatar}>
                <img src={props.avatarLink} alt="avatar" />
            </div>
            <div className={postStyles.textWrapper}>
                <div className={postStyles.text}>
                    <h2>{props.name}</h2>
                    <p>{props.text}</p>
                </div>
                <div className={postStyles.likes}>
                    <p className={postStyles.likesCount}>{props.likesCount + ' '}</p>
                    <img src={likeIcon} alt="icon" />
                </div>
            </div>
        </div >
    )
}

export default Post