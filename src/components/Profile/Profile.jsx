import React from "react";
import Posts from "./Posts/Posts";
import ProfileInfo from './ProfileInfo/ProfileInfo'
import profileStyles from './Profile.module.css'

const Profile = () => {
    let userinfo = {
        name: 'Сергей',
        surname: 'Ильясов',
        citi: 'Санкт-Петербург',
        tel: '+79777622720',
        mail: 'ilyasov_sk@mail.ru',
    }

    return (
        <div className={profileStyles.wrapper}>
            <ProfileInfo {...userinfo}/>
            <Posts />
        </div>
    )
}

export default Profile