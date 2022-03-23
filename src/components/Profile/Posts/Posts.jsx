import React from "react";
import postsStyles from './Posts.module.css'
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { required } from './../../../Common/Validation/Validators';

const Form = (props) => {
    return (
        <div className={postsStyles.addPost}>
            <form onSubmit={props.handleSubmit}>
                <Field name={"newPost"} component={"textarea"} placeholder='New Post...' validate={[required]} />
                <div className={postsStyles.Button}>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

const PostsForm = reduxForm({ form: 'newPost' })(Form)

const Posts = props => {
    const addNewPost = (values) => {
        props.sendPost(values.newPost)
        props.reset('newPost')
    }

    let posts = props.posts.map(post =>
        <Post
            key={post.id}
            id={post.id}
            name={post.name}
            avatarLink={post.avatarLink}
            text={post.text}
            likesCount={post.likesCount}
        />)

    return (
        <div className={postsStyles.wrappaer}>
            <PostsForm onSubmit={addNewPost} />
            {posts}
        </div >
    )
}

export default Posts