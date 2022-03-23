import React from "react";
import messagesStyles from './Messages.module.css'
import DialogsList from './DialogsList/DialogsList';
import Messanger from './Messanger/Messanger';

const Messages = props => {
    return (
        <div className={messagesStyles.container}>
            <DialogsList dialogs={props.dialogs} />
            <Messanger
                messages={props.messages}
                sendMessage={props.sendMessage}
                reset={props.reset}
            />
        </div>
    )
}

export default Messages