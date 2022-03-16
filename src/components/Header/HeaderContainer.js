import React from "react";
import { connect } from 'react-redux';
import { authorizeUser } from "./../../redux/reduсers/authReducer";

import Header from './Header';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authorizeUser()
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    login: state.auth.login,
    email: state.auth.email,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { authorizeUser })(HeaderContainer)