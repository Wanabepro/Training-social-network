import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getProfile } from './../../redux/reduсers/profileReducer';
import { withRouter } from 'react-router-dom';



class ProfileContainer extends React.Component {
    componentDidMount() {
        let id = this.props.match.params.id
        if (!id) { id = 2 }
        
        this.props.getProfile(id)
    }

    render() {
        return <Profile {...this.props} profileInfo={this.props.profileInfo} />
    }
}

const mapStateToProps = state => ({
    profileInfo: state.profilePage.profileInfo,
    isLoading: state.profilePage.isLoading
})

export default connect(mapStateToProps, { getProfile })(withRouter(ProfileContainer))