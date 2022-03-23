import { connect } from 'react-redux';
import { sendPost } from './../../../redux/reduсers/profileReducer';
import Posts from './Posts';

let mapStateToProps = (state) => {
    return ({
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
    )
}

const PostsContainer = connect(mapStateToProps, { sendPost })(Posts)

export default PostsContainer