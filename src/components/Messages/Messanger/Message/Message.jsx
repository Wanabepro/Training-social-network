import React from "react";
import messageStyles from './Message.module.css'

const Message = (props) => {
    return (
        <div className={props.userId === props.authId ? messageStyles.container + ' ' + messageStyles.active : messageStyles.container} >
            {props.message}
        </div>
    )
}

export default Message