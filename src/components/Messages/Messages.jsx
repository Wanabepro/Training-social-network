import React from "react";
import messagesStyles from './Messages.module.css'
import DialogsList from './DialogsList/DialogsList';
import Messanger from './Messanger/Messanger';

const Messages = (props) => {
    let state = props.store.getState()
    let dialogs = state.messagesPage.dialogs
    let messages = state.messagesPage.messages
    return(
        <div className={messagesStyles.container}>
            <DialogsList dialogs={dialogs}/>
            <Messanger messages={messages}/>
        </div>
    )
}

export default Messages