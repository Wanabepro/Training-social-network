import React from "react";
import profileInfoStyles from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    console.log(props)
    return (
        <div className={profileInfoStyles.wrapper}>
            <div className={profileInfoStyles.photo}>
                <img src="https://sun9-87.userapi.com/impf/c848632/v848632082/ad691/Bwea4WZhDOw.jpg?size=1504x1000&quality=96&sign=33bb05f520ade8f6d7ee10222d71d569&type=album" alt="chel" />
            </div>
            <div className={profileInfoStyles.info}>
                <h1>{props.name} {props.surname}</h1>
                <ul>
                    <li>Город: {props.citi}</li>
                    <li>Номер телефона: <a href={`tel:${props.tel}`}>{props.tel}</a></li>
                    <li>Почта: <a href={`tel:${props.mail}`}>{props.mail}</a></li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileInfo