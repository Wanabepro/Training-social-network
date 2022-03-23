import React from "react";
import { connect } from 'react-redux';
import { logout } from "./../../redux/reduсers/authReducer";

import Header from './Header';

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    login: state.auth.login,
    email: state.auth.email,
    isAuth: state.auth.isAuth,
    photo: state.auth.photo
})

export default connect(mapStateToProps, { logout })(HeaderContainer)