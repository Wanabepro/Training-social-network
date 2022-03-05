import React from "react";
import messagesStyles from './Messages.module.css'
import DialogsList from './DialogsList/DialogsList';
import Messanger from './Messanger/Messanger';

const Messages = () => {
    return(
        <div className={messagesStyles.container}>
            <DialogsList />
            <Messanger />
        </div>
    )
}

export default Messages