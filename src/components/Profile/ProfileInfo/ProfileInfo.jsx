import React from "react";
import profileInfoStyles from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div className={profileInfoStyles.container}>
            <div className={profileInfoStyles.wrapper}>
                <div className={profileInfoStyles.photo}>
                    <img src={props.profileInfo.photos.large} alt="avatar" />
                </div>
                <div className={profileInfoStyles.info}>
                    <h1>{props.profileInfo.fullName}</h1>
                    <ul>
                        <li>Ищу работу: {props.profileInfo.lookingForAJob ? 'да' : 'нет'}</li>
                        <li>{props.profileInfo.lookingForAJobDescription}</li>
                    </ul>
                </div>
            </div>
            <div className={profileInfoStyles.contacts}>
                <div>
                    <ul>
                        <li>GitHub: <a href={props.profileInfo.contacts.github}>{props.profileInfo.contacts.github}</a></li>
                        <li>VK: <a href={props.profileInfo.contacts.vk}>{props.profileInfo.contacts.vk}</a></li>
                        <li>FaceBook: <a href={props.profileInfo.contacts.facebook}>{props.profileInfo.contacts.facebook}</a></li>
                        <li>Inst: <a href={props.profileInfo.contacts.instagram}>{props.profileInfo.contacts.instagram}</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Twitter: <a href={props.profileInfo.contacts.twitter}>{props.profileInfo.contacts.twitter}</a></li>
                        <li>Landing: <a href={props.profileInfo.contacts.website}>{props.profileInfo.contacts.website}</a></li>
                        <li>YT: <a href={props.profileInfo.contacts.youtube}>{props.profileInfo.contacts.youtube}</a></li>
                        <li>Other: <a href={props.profileInfo.contacts.mainLink}>{props.profileInfo.contacts.mainLink}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo