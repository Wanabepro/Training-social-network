import React from "react";
import ProfileStyles from './Profile.module.css'

const Profile = () => {
    return (
        <div className={ProfileStyles.wrapper}>
            <div className={ProfileStyles.topBlock}>
                <div className={ProfileStyles.photo}>
                    <img src="https://sun9-87.userapi.com/impf/c848632/v848632082/ad691/Bwea4WZhDOw.jpg?size=1504x1000&quality=96&sign=33bb05f520ade8f6d7ee10222d71d569&type=album" alt="chel"/>
                </div>
                <div className={ProfileStyles.info}>
                    <ul>
                        <li>Имя</li>
                        <li>Фамилия</li>
                        <li>Город</li>
                        <li>Номер телефона</li>
                        <li>Почта</li>
                    </ul>
                </div>
            </div>
            <div className={ProfileStyles.addPost}>
                <textarea></textarea>
                <button>Submit</button>
            </div>
            <div className={ProfileStyles.posts}>
                Here will be posts
            </div>
        </div>
    )
}

export default Profile