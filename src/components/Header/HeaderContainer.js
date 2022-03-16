import React from "react";
import Header from './Header';
import { connect } from 'react-redux';
import axios from "axios";
import { setAuthInfo } from './../../redux/reduсers/authReducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', { withCredentials: true }).then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = {...response.data.data}
                this.props.setAuthInfo(id, email, login)
            }
        })
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    login: state.auth.login,
    email: state.auth.email,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { setAuthInfo })(HeaderContainer)