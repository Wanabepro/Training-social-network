import React from "react";
import messageStyles from './Message.module.css'

const Message = (props) => {
        return (
        <div className={messageStyles.container} >
            {props.message}
        </div>
    )
}

export default Message