import React from "react";
import { withAuthRedirect } from './../../HOC/withAuthRedirect';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const News = () => {
    // const dispatch = useDispatch()
    // const news = useSelector(state => state.newsPage.news)

    // let posts = props.posts.map(post =>
    //     <Post key={post.id} id={post.id} name={post.name} avatarLink={post.avatarLink} text={post.text} likesCount={post.likesCount} />
    // )
    return (
        <div>
            Here will be news
        </div>
    )
}

export default withAuthRedirect(News)