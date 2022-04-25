import { connect } from 'react-redux';
import { reset } from 'redux-form';
import { sendPost } from './../../../redux/reduсers/profileReducer';
import Posts from './Posts';

let mapStateToProps = (state) => {
    return ({
        posts: state.profilePage.posts,
        name: state.profilePage.profileInfo.fullName,
        avatar: state.profilePage.profileInfo.photos.large
    })
}

const PostsContainer = connect(mapStateToProps, { sendPost, reset })(Posts)

export default PostsContainer