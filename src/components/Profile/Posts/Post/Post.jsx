import React from "react";
import postStyles from './Post.module.css'

const Post = () => {
    return (
        <div className={postStyles.wrapper}>
            <div className={postStyles.avatar}>
                <img src="https://sun9-87.userapi.com/impf/c848632/v848632082/ad691/Bwea4WZhDOw.jpg?size=1504x1000&quality=96&sign=33bb05f520ade8f6d7ee10222d71d569&type=album" alt="avatar" />
            </div>
            <div className={postStyles.text}>
                <h2>Имя автора</h2>
                <p>Текст поста</p>
                <div className={postStyles.likes}>
                    <img src="/thumb-up-outline.svg" alt="icon" />
                </div>
            </div>
        </div >
    )
}

export default Post