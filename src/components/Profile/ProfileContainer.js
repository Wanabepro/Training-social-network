import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios'
import Profile from './Profile';
import { setProfileInfo, toggleIsLoading } from './../../redux/reduсers/profileReducer';
import { withRouter } from 'react-router-dom';



class ProfileContainer extends React.Component {
    componentDidMount() {
        let id = this.props.match.params.id
        if (!id) { id = 2 }

        this.props.toggleIsLoading(true)

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`).then(response => {
            this.props.setProfileInfo(response.data)
        })

        this.props.toggleIsLoading(false)

    }

    render() {
        return <Profile {...this.props} profileInfo={this.props.profileInfo} />
    }
}

const mapStateToProps = state => ({
    profileInfo: state.profilePage.profileInfo,
    isLoading: state.profilePage.isLoading
})

export default connect(mapStateToProps, { setProfileInfo, toggleIsLoading })(withRouter(ProfileContainer))