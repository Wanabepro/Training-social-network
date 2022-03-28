import React from "react"
import ProfileInfo from './ProfileInfo/ProfileInfo'
import PostsContainer from "./Posts/PostsContainer"
import profileStyles from './Profile.module.css'
import Preloader from "../../Common/Preloader/Preloader"

const Profile = React.memo(
    props => {
        if (!props.profileInfo || props.isLoading) {
            return <Preloader />
        }
        else return (
            <div className={profileStyles.wrapper}>
                <ProfileInfo profileInfo={props.profileInfo} status={props.status}
                    updateStatus={props.updateStatus} authorizedUserProfile={props.authorizedUserProfile}
                />
                <PostsContainer />
            </div>
        )
    }
)

export default Profile