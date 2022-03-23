import { profileAPI } from './../../api/api';

const SET_PROFILE_INFO = 'SET_PROFILE_INFO'
const SEND_POST = 'SEND_POST'
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING'
const SET_STATUS = 'SET_STATUS'

const initialState = {
    profileInfo: null,
    status: null,
    isLoading: true,
    posts: [
        { id: 0, name: 'Сергей Ильясов', avatarLink: 'https://sun9-87.userapi.com/impf/c848632/v848632082/ad691/Bwea4WZhDOw.jpg?size=1504x1000&quality=96&sign=33bb05f520ade8f6d7ee10222d71d569&type=album', text: 'текст поста 1', likesCount: 10 },
        { id: 1, name: 'Иван Иванов', avatarLink: 'https://sun9-16.userapi.com/impg/-EDLrv40aP4HDBJtqDCyY-G9N_2iAzY5MTtZxw/WoY02m58x7M.jpg?size=1215x2160&quality=95&sign=dd056802bb04d11f3f494c5a6785c6a9&type=album', text: 'текст поста 2', likesCount: 8 },
        { id: 2, name: 'Анатолий Вассерман', avatarLink: 'https://sun9-63.userapi.com/impf/c845420/v845420935/4c78c/r3-y56vS2_M.jpg?size=1536x1920&quality=96&sign=65f9e9c43390a9a7eb39bf33d172a01c&type=album', text: 'текст поста 3', likesCount: 15 },
        { id: 3, name: 'Настя Мирная', avatarLink: 'https://sun9-63.userapi.com/impf/c845420/v845420935/4c78c/r3-y56vS2_M.jpg?size=1536x1920&quality=96&sign=65f9e9c43390a9a7eb39bf33d172a01c&type=album', text: 'текст поста 4', likesCount: 17 },
    ],
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE_INFO:
            return {
                ...state,
                profileInfo: action.info
            }

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }

        case SEND_POST:
            return {
                ...state,
                posts: [
                    {
                        id: state.posts.length,
                        name: 'Сергей Ильясов',
                        avatarLink: 'https://sun9-87.userapi.com/impf/c848632/v848632082/ad691/Bwea4WZhDOw.jpg?size=1504x1000&quality=96&sign=33bb05f520ade8f6d7ee10222d71d569&type=album',
                        text: action.newPost,
                        likesCount: 0,
                    },
                    ...state.posts,
                ],
            }

        default:
            return (state)
    }
}

const setProfileInfo = (info) => ({ type: SET_PROFILE_INFO, info })
const toggleIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading })
const setStatus = (status) => ({ type: SET_STATUS, status })
export const sendPost = (newPost) => ({ type: SEND_POST, newPost })

export const getProfile = (id) => {
    return (dispatch) => {
        dispatch(toggleIsLoading(true))
        profileAPI.getProfile(id).then(data => {
            dispatch(toggleIsLoading(false))
            dispatch(setProfileInfo(data))
        })
    }
}

export const getStatus = (id) => {
    return (dispatch) => {
        profileAPI.getStatus(id).then(status => {
            dispatch(setStatus(status))
        })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(resultCode => {
            if (resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
}

export default profileReducer