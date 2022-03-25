import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getProfile, getStatus, updateStatus } from './../../redux/reduсers/profileReducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from './../../HOC/withAuthRedirect';

class ProfileContainer extends React.PureComponent {
    componentDidMount() {
        this.props.getProfile(this.props.match.params.id)
        this.props.getStatus(this.props.match.params.id)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.getProfile(this.props.match.params.id)
            this.props.getStatus(this.props.match.params.id)
        }
    }

    render() {
        const authorizedUserProfile = this.props.authorizedUserID === Number(this.props.match.params.id)

        return (
            <Profile profileInfo={this.props.profileInfo}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                isLoading={this.props.isLoading}
                authorizedUserProfile={authorizedUserProfile}
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