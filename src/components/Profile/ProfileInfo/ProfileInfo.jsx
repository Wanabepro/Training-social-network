import React from "react";
import profileInfoStyles from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus/ProfileStatus';
import avatar from './../../../Icons/User-avatar.png'
import Contact from './Contact/Contact';

const ProfileInfo = props => {
    return (
        <div className={profileInfoStyles.container}>
            <div className={profileInfoStyles.photo}>
                <img
                    src={props.profileInfo.photos.large
                        ? props.profileInfo.photos.large
                        : avatar}
                    alt="avatar"
                    className={props.profileInfo.photos.large
                        ? ''
                        : profileInfoStyles.noPhoto}
                />
            </div>
            <div className={profileInfoStyles.info}>
                <h1>{props.profileInfo.fullName}</h1>
                <ul>
                    <li><ProfileStatus status={props.status} updateStatus={props.updateStatus} authorizedUserProfile={props.authorizedUserProfile} /></li>
                    <li>Ищу работу: {props.profileInfo.lookingForAJob ? 'да' : 'нет'}</li>
                    <li>{props.profileInfo.lookingForAJobDescription}</li>
                </ul>
                <div className={profileInfoStyles.contacts}>
                    {Object.keys(props.profileInfo.contacts).map(key => {
                        if (props.profileInfo.contacts[key] === null) return
                        return <Contact key={key} socialNetworkName={key} link={props.profileInfo.contacts[key]} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo