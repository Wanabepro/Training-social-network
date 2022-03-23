import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getProfile, getStatus, updateStatus } from './../../redux/reduсers/profileReducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from './../../HOC/withAuthRedirect';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let id = this.props.match.params.id
        if (!id) { id = this.props.authorizedUserID }

        this.props.getProfile(id)
        this.props.getStatus(id)
    }

    render() {
        return (
            <Profile profileInfo={this.props.profileInfo}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />
        )
    }
}

const mapStateToProps = state => ({
    profileInfo: state.profilePage.profileInfo,
    isLoading: state.profilePage.isLoading,
    status: state.profilePage.status,
    authorizedUserID: state.auth.id
})

export default compose(
    connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)