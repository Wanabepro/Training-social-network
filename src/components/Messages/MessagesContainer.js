import React from 'react'
import { sendMessageActionCreator, updateFormActionCreator } from './../../../redux/reduсers/messagesReducer';
import Messages from './Messages';

const PostsContainer = (props) => {
    let sendPost = () => {
        const action = sendMessageActionCreator();
        props.store.dispatch(action);
    }

    let onChangeTextarea = (text) => {
        const action = updateFormActionCreator(text);
        props.store.dispatch(action);
    }

    let Messages = props.store.getState().messagesPage.Messages;

    let newMessageText = props.store.getState().messagesPage.newMessageText;

    return (<Messages sendMessage={sendMessage}
        onChangeTextarea={onChangeTextarea}
        Messages={Messages}
        newMessageText={newMessageText} />)
}

export default PostsContainer