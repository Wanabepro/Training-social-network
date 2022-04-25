import React, { useState, useEffect } from "react";
import styles from './PersonalData.module.css'
import { Field, reduxForm } from 'redux-form'
import { Input } from './../../../Common/Validation/FormControls';
import createFieldForPersonalDataSettings from './FieldCreator/FieldCreator'
import { connect } from 'react-redux';
import { getProfile } from "../../../redux/reduсers/profileReducer";
import { updateProfile } from './../../../redux/reduсers/profileReducer';
import { required } from './../../../Common/Validation/Validators';
import Preloader from './../../../Common/Preloader/Preloader';


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
                {createFieldForPersonalDataSettings('Enter your name or nickname', 'fullName', Input, { validate: [required] })}
                {createFieldForPersonalDataSettings('About you', 'aboutMe', Input, { validate: [required] })}
                <div className={styles.Bold}>Your links to other social networks:</div>
                {createFieldForPersonalDataSettings('GitHub:', 'contacts.github', Input)}
                {createFieldForPersonalDataSettings('VK:', 'contacts.vk', Input)}
                {createFieldForPersonalDataSettings('FaceBook:', 'contacts.facebook', Input)}
                {createFieldForPersonalDataSettings('Instagram:', 'contacts.instagram', Input)}
                {createFieldForPersonalDataSettings('Twitter:', 'contacts.twitter', Input)}
                {createFieldForPersonalDataSettings('YouTube:', 'contacts.youtube', Input)}
                {createFieldForPersonalDataSettings('Landing:', 'contacts.website', Input)}
                {createFieldForPersonalDataSettings('Best way to contact you?', 'contacts.mainLink', Input)}
                {props.error
                    ? <div className={styles.summaryError}> {props.error} </div>
                    : undefined
                }
                <div className={styles.Button}>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

const PersonalDataForm = reduxForm({ form: 'personalDataForm', enableReinitialize: true })(Form)

const PersonalData = props => {
    const onSubmit = async formData => {
        await props.updateProfile(props.authorizedUserId, formData)
        props.getProfile(props.authorizedUserId)
    }

    const [userData, setUserData] = useState()

    useEffect(() => {
        if (props.profileInfo !== null && props.profileInfo.userId === props.authorizedUserId) return setUserData(props.profileInfo)
        const getProfile = async () => {
            await props.getProfile(props.authorizedUserId)
        }
        getProfile()
    })

    if (props.isLoading) return <Preloader />

    return (
        <div className={styles.container}>
            <PersonalDataForm initialValues={userData} onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = state => ({
    authorizedUserId: state.auth.id,
    profileInfo: state.profilePage.profileInfo,
    isLoading: state.profilePage.isLoading
})

export default connect(mapStateToProps, { getProfile, updateProfile })(PersonalData)