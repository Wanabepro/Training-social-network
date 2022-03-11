import { connect } from 'react-redux';
import { sendPostActionCreator, updateFormActionCreator } from './../../../redux/reduсers/profileReducer';
import Posts from './Posts';

// const PostsContainer = (props) => {
//     let sendPost = () => {
//         const action = sendPostActionCreator();
//         props.store.dispatch(action);
//     }

//     let onChangeTextarea = (text) => {
//         const action = updateFormActionCreator(text);
//         props.store.dispatch(action);
//     }

//     let posts = props.store.getState().profilePage.posts;

//     let newPostText = props.store.getState().profilePage.newPostText;

//     return (<Posts sendPost={sendPost}
//         onChangeTextarea={onChangeTextarea}
//         posts={posts}
//         newPostText={newPostText} />)
// }

let mapStateToProps = (state) => {
    return ({
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
    )
}

let mapDispatchToProps = (dispatch) => {
    return ({
        sendPost: () => { dispatch(sendPostActionCreator()) },
        onChangeTextarea: (text) => { dispatch(updateFormActionCreator(text)) },
    })
}
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer