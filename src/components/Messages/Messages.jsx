import React from "react";
import messagesStyles from './Messages.module.css'
import DialogsList from './DialogsList/DialogsList';
import { useParams } from 'react-router-dom';
import Messanger from './Messanger/Messanger';

const Messages = props => {
    const { id } = useParams()

    if (id === 'dialogs') return <DialogsList dialogs={props.dialogs} />
    return (
        <div className={messagesStyles.container}>
            <Messanger setLastMessage={props.setLastMessage} sendMessage={props.sendMessage} reset={props.reset} />
        </div>
    )
}

export default Messages