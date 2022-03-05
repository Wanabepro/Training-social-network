import React from "react";
import postsStyles from './Posts.module.css'
import Post from './Post/Post';

const Posts = () => {
    return (
        <div className={postsStyles.wrappaer}>
            <div className={postsStyles.addPost}>
                <form>
                    <textarea></textarea>
                    <div className={postsStyles.Button}>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
            <Post />
        </div >
    )
}

export default Posts