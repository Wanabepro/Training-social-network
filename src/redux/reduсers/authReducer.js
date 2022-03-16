import { authAPI } from "../../api/api"

const SET_AUTH_INFO = 'SET_AUTH_INFO'

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_INFO:
            return {
                ...action.data,
                isAuth: true
            }

        default:
            return (state)
    }
}

export const setAuthInfo = (id, email, login) => ({ type: SET_AUTH_INFO, data: { id, email, login } })

export const authorizeUser = () => {
    return (dispatch) => {
        authAPI.getAuthData().then(response => {
            if (response.data.resultCode === 0) {
                let { id, email, login } = { ...response.data.data }
                dispatch(setAuthInfo(id, email, login))
            }
        })
    }
}

export default authReducer