import React from "react";
import messangerStyles from './Messanger.module.css';
import Message from "./Message/Message";

const Messanger = (props) => {
    let messages = props.messages.map(message => <Message id={message.id} message={message.message} />)

    return (
        <div className={messangerStyles.container}>
            <div className={messangerStyles.messages}>
                {messages}
            </div>
            <div className={messangerStyles.addMessage}>
                <form>
                    <textarea></textarea>
                    <div className={messangerStyles.Button}>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Messanger