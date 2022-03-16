import React from "react"
import ProfileInfo from './ProfileInfo/ProfileInfo'
import PostsContainer from "./Posts/PostsContainer"
import profileStyles from './Profile.module.css'
import Preloader from "../../Common/Preloader/Preloader"

const Profile = (props) => {
    if (!props.profileInfo || props.isLoading === true) {
        return <Preloader />
    }
    else return (
        <div className={profileStyles.wrapper}>
            <ProfileInfo profileInfo={props.profileInfo} />
            <PostsContainer />
        </div>
    )
}

export default Profile