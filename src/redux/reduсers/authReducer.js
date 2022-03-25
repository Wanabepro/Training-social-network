import { stopSubmit } from "redux-form"
import { authAPI } from "../../api/api"

const SET_AUTH_INFO = 'auth/SET_AUTH_INFO'
const SET_PHOTO = 'auth/SET_PHOTO'
const SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL'

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    photo: null,
    captchaURL: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_INFO:
            return {
                ...action.data,
            }

        case SET_PHOTO:
            return {
                ...state,
                photo: action.photo
            }

        case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaURL: action.url
            }

        default:
            return (state)
    }
}

const setAuthInfo = (id, email, login, isAuth) => ({ type: SET_AUTH_INFO, data: { id, email, login, isAuth } })
const setPhoto = photo => ({ type: SET_PHOTO, photo })
const setCaptchaURL = url => ({ type: SET_CAPTCHA_URL, url })

export const authorizeUser = () => async dispatch => {
    const response = await authAPI.getAuthData()
    if (response.data.resultCode === 0) {
        let { id, email, login } = { ...response.data.data }
        dispatch(setAuthInfo(id, email, login, true))
        dispatch(getPhoto(id))
    }
}


const getPhoto = (id) => async dispatch => {
    const photo = await authAPI.getUserPhoto(id)
    dispatch(setPhoto(photo))
}


export const login = (email, password, rememberMe, captcha) => async dispatch => {
    const response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) { dispatch(authorizeUser()) }
    else {
        if (response.data.resultCode === 10) { dispatch(getCaptchaURL()) }
        const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Unexpected error'
        dispatch(stopSubmit('login', { _error: message }))
    }
}


export const logout = () => async dispatch => {
    const resultCode = await authAPI.logout()
    if (resultCode === 0) { dispatch(setAuthInfo(null, null, null, false)) }
}


export const getCaptchaURL = () => async dispatch => {
    const url = await authAPI.getCaptchaURL()
    dispatch(setCaptchaURL(url))
}

export default authReducer