import React from "react"
import ProfileInfo from './ProfileInfo/ProfileInfo'
import PostsContainer from "./Posts/PostsContainer"
import profileStyles from './Profile.module.css'


const Profile = (props) => {
    return (
        <div className={profileStyles.wrapper}>
            <ProfileInfo profileInfo={props.state.profileInfo} />
            <PostsContainer />
        </div>
    )
}

export default Profile