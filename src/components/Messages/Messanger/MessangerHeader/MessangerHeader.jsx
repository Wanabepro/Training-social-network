import React from "react";
import styles from './MessangerHeader.module.css'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const MessangerHeader = props => {
    const dialog = useSelector(state => state.messagesPage.dialogs).filter(dialog => dialog.id === props.dialogId)[0]

    return (
        <header className={styles.messangerHeader}>
            <NavLink to='dialogs' className={styles.link}>
                <div className={styles.backButton}></div>
            </NavLink>
            <figure className={styles.avatar}>
                <img src={dialog.avatarLink} alt="avatar" />
            </figure>
            <h3 className={styles.name}>{dialog.name}</h3>
        </header>
    )
}

export default MessangerHeader