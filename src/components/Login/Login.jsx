import React from "react";
import loginStyles from './Login.module.css'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { login } from './../../redux/reduсers/authReducer';
import { Redirect } from 'react-router-dom';
import { required, emailValidator } from './../../Common/Validation/Validators';
import { Input, createField } from './../../Common/Validation/FormControls';

const Form = (props) => {
    return (
        <div className={loginStyles.container}>
            <form onSubmit={props.handleSubmit}>
                {createField('email', Input, { placeholder: 'E-mail', validate: [required, emailValidator] })}
                {createField('password', Input, { placeholder: 'Password', validate: [required], type: 'password' })}
                <div className={loginStyles.checkboxWrapper}>
                    <Field className={loginStyles.checkbox} name={"rememberMe"} component={"input"} type='checkbox' />
                    <div> Remember me </div>
                </div>

                {props.error
                    ? <div className={loginStyles.summaryError}> {props.error} </div>
                    : undefined
                }

                {props.captchaURL
                    ? <div className={loginStyles.captcha}>
                        <img src={props.captchaURL} alt="captcha" />
                        {createField('captcha', Input, { className: loginStyles.captchaInput, validate: [required] })}
                    </div>
                    : undefined
                }

                <div className={loginStyles.Button}>
                    <button>Log In</button>
                </div>
            </form>
        </div>
    )
}

const LoginForm = reduxForm({ form: 'login' })(Form)


const Login = props => {
    const onSubmit = formData => { props.login(formData.email, formData.password, formData.rememberMe, formData.captcha) }

    return props.isAuth
        ? <Redirect to={`/profile/${props.authorizedUserID}`} />
        : <LoginForm onSubmit={onSubmit} login={props.login} captchaURL={props.captchaURL} />
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    authorizedUserID: state.auth.id,
    captchaURL: state.auth.captchaURL,
})

export default connect(mapStateToProps, { login })(Login)