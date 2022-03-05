import React from "react";
import Dialog from './Dialog/Dialog'
import dialogsListStyles from './DialogsList.module.css';


const DialogsList = () => {
    return(
        <div className={dialogsListStyles.container}>
            <Dialog id='1'/>
        </div>
    )
}

export default DialogsList