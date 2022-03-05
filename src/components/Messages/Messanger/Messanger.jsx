import React from "react";
import messangerStyles from './Messanger.module.css';
import Message from "./Message/Message";

const Messanger = () => {
    return (
        <div className={messangerStyles.container}>
            <div className={messangerStyles.messages}>
                <Message />
                <Message identity='me'/>                
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