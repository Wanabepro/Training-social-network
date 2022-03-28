import React, { useState, useEffect } from "react";
import styles from './PersonalData.module.css'
import { Field, reduxForm } from 'redux-form'
import { Input } from './../../../Common/Validation/FormControls';
import createFieldForPersonalDataSettings from './FieldCreator/FieldCreator'
import { connect } from 'react-redux';
import { getProfile } from "../../../redux/reduсers/profileReducer";
import { updateProfile } from './../../../redux/reduсers/profileReducer';

const Form = props => {
    return (
        <div className={styles.Container}>
            <form className={styles.Form} onSubmit={props.handleSubmit}>
                <div className={styles.checkboxWrapper}>
                    <div> Are you loking for a job? </div>
                    <div>
                        <Field className={styles.checkbox} name={"lookingForAJob"} component={"input"} type='checkbox' />
                    </div>
                </div>
                {createFieldForPersonalDataSettings('Describe your skills shortly', 'lookingForAJobDescription', Input)}
                {createFieldForPersonalDataSettings('Enter your name or nickname', 'fullName', Input)}
                {createFieldForPersonalDataSettings('About you', 'aboutMe', Input)}
                <div className={styles.Bold}>Your links to other social networks:</div>
                {createFieldForPersonalDataSettings('GitHub:', 'contacts.github', Input)}
                {createFieldForPersonalDataSettings('VK:', 'contacts.vk', Input)}
                {createFieldForPersonalDataSettings('FaceBook:', 'contacts.facebook', Input)}
                {createFieldForPersonalDataSettings('Instagram:', 'contacts.instagram', Input)}
                {createFieldForPersonalDataSettings('Twitter:', 'contacts.twitter', Input)}
                {createFieldForPersonalDataSettings('YouTube:', 'contacts.youtube', Input)}
                {createFieldForPersonalDataSettings('Landing:', 'contacts.website', Input)}
                {createFieldForPersonalDataSettings('Best way to contact you?', 'contacts.mainLink', Input)}
                <div className={styles.Button}>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

const PersonalDataForm = reduxForm({ form: 'personalDataForm' })(Form)

const PersonalData = props => {
    const onSubmit = formData => {
        props.updateProfile(props.authorizedUserId, formData)
    }

    const [userData, setUserData] = useState()

    useEffect(() => {
        if (props.profileInfo !== null) return setUserData(props.profileInfo)
        props.getProfile(props.authorizedUserId)
    }, [props.profileInfo])

    return (
        <div className={styles.container}>
            <PersonalDataForm initialValues={userData} onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = state => ({
    authorizedUserId: state.auth.id,
    profileInfo: state.profilePage.profileInfo
})

export default connect(mapStateToProps, { getProfile, updateProfile })(PersonalData)