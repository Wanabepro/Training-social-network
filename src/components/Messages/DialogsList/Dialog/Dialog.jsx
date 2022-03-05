import React from "react";
import { NavLink } from "react-router-dom";
import dialogStyles from './Dialog.module.css';

const Dialog = (props) => {
    return (
        <NavLink to={props.id} className={dialogStyles.link}>
            <div className={dialogStyles.wrapper}>
                <div className={dialogStyles.avatar}>
                    <img src="https://sun9-87.userapi.com/impf/c848632/v848632082/ad691/Bwea4WZhDOw.jpg?size=1504x1000&quality=96&sign=33bb05f520ade8f6d7ee10222d71d569&type=album" alt="avatar" />
                </div>
                <div className={dialogStyles.info}>
                    <p>Имя отправителя</p>
                    <p>Предпоказ сообщения</p>
                </div>
            </div>
        </NavLink>
    )
}

export default Dialog