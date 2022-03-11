import React from "react";
import postsStyles from './Posts.module.css'
import Post from './Post/Post';

const Posts = (props) => {
    let NewPostElement = React.createRef()

    let onChangeTextarea = () => {
        let text = NewPostElement.current.value;
        props.onChangeTextarea(text);
    }

    let posts = props.posts.map(post => <Post key={post.id} id={post.id} name={post.name} avatarLink={post.avatarLink} text={post.text} likesCount={post.likesCount} />)

    return (
        <div className={postsStyles.wrappaer}>
            <div className={postsStyles.addPost}>
                <textarea ref={NewPostElement}
                    placeholder='New post...'
                    onChange={onChangeTextarea}
                    value={props.newPostText}
                />
                <div className={postsStyles.Button}>
                    <button onClick={props.sendPost}>Submit</button>
                </div>
            </div>
            {posts}
        </div >
    )
}

export default Posts