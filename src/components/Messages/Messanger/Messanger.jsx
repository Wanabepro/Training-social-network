import React from "react";
import messangerStyles from './Messanger.module.css';
import Message from "./Message/Message";
import { Field, reduxForm } from 'redux-form';
import { required } from './../../../Common/Validation/Validators';

const Form = (props) => {
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
    const addNewMessage = (values) => {
        props.sendMessage(values.message)
    }

    let messages = props.messages.map(message => <Message key={message.id} id={message.id} message={message.message} />)

    return (
        <div className={messangerStyles.container}>
            <div className={messangerStyles.messages}>
                {messages}
            </div>
            <MessangerForm onSubmit={addNewMessage} />
        </div>
    )
}

export default Messanger