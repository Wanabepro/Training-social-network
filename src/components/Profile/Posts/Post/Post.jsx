import React from "react";
import styles from './Post.module.css'
import likeIcon from './../../../../Icons/thumb-up-outline.svg'

const Post = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.avatar}>
                    <img src={props.avatarLink} alt="avatar" />
                </div>
                <div className={styles.textWrapper}>
                    <div className={styles.text}>
                        <h2>{props.name}</h2>
                        <p>{props.text}</p>
                    </div>
                </div>
            </div>
            <div className={styles.likes}>
                <p className={styles.likesCount}>{props.likesCount + ' '}</p>
                <img src={likeIcon} alt="icon" />
            </div>
        </div >
    )
}

export default Post