import React from "react";
import messangerStyles from './Messanger.module.css';
import Message from "./Message/Message";
import { Field, reduxForm } from 'redux-form';
import { required } from './../../../Common/Validation/Validators';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import MessangerHeader from './MessangerHeader/MessangerHeader';

const Form = props => {
    return (
        <div className={messangerStyles.addMessage}>
            <form onSubmit={props.handleSubmit}>
                <Field name={"message"} component={"textarea"} placeholder='New message...' validate={[required]} />
                <div className={messangerStyles.Button}>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

const MessangerForm = reduxForm({ form: 'messanger' })(Form)

const Messanger = (props) => {
    let { id } = useParams()

    id = Number(id)

    const addNewMessage = (values) => {
        props.sendMessage(values.message, props.authId, id)
        props.setLastMessage(id, values.message)
        props.reset('messanger')
    }

    let messages = props.messages.filter(message => message.dialogId === id).map(message => {
        return <Message key={String(message.id)} userId={message.userId} authId={props.authId} message={message.message} />
    })

    return (
        <div className={messangerStyles.container}>
            <MessangerHeader dialogId={id}/>
            <div className={messangerStyles.messages}>
                {messages}
            </div>
            <MessangerForm onSubmit={addNewMessage} />
        </div>
    )
}

const mapStateToProps = state => ({
    messages: state.messagesPage.messages,
    authId: state.auth.id
})

export default connect(mapStateToProps, {})(Messanger)