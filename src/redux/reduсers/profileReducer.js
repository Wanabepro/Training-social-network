import { profileAPI } from './../../api/api';
import { stopSubmit } from 'redux-form';
import avatar from './../../Icons/User-avatar.png'

const SET_PROFILE_INFO = 'profile/SET_PROFILE_INFO'
const SEND_POST = 'profile/SEND_POST'
const TOGGLE_IS_LOADING = 'profile/TOGGLE_IS_LOADING'
const SET_STATUS = 'profile/SET_STATUS'
const GET_POSTS = 'profile/GET_POSTS'

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
                        id: state.posts.length + 1,
                        name: action.name,
                        avatarLink: action.avatar ? action.avatar : avatar,
                        text: action.newPost,
                        likesCount: 0,
                    },
                    ...state.posts,
                ],
            }

        case GET_POSTS:
            return {
                ...state,
                posts: action.posts
            }

        default:
            return (state)
    }
}

const setProfileInfo = (info) => ({ type: SET_PROFILE_INFO, info })
const toggleIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading })
const setStatus = (status) => ({ type: SET_STATUS, status })
const setPosts = (posts) => ({ type: GET_POSTS, posts })
export const sendPost = (newPost, name, avatar) => ({ type: SEND_POST, newPost, name, avatar })

const getPosts = (userId, photo, name) => async dispatch => {
    console.log()
    const id = String(userId).split('')[String(userId).length - 1] === '0'
        ? '1'
        : String(userId).split('')[String(userId).length - 1]
    const posts = await profileAPI.getPosts(id, photo, name)
    dispatch(setPosts(posts))
}

export const getProfile = id => async dispatch => {
    dispatch(toggleIsLoading(true))
    const data = await profileAPI.getProfile(id)
    await dispatch(getPosts(id, data.photos.large, data.fullName))
    dispatch(toggleIsLoading(false))
    dispatch(setProfileInfo(data))
}

export const getStatus = id => async dispatch => {
    const status = await profileAPI.getStatus(id)
    dispatch(setStatus(status))
}

export const updateStatus = status => async dispatch => {
    const resultCode = await profileAPI.updateStatus(status)
    if (resultCode === 0) { dispatch(setStatus(status)) }
}

export const updateProfile = (userId, data) => async dispatch => {
    dispatch(toggleIsLoading(true))
    const requestData = {
        userId,
        ...data,
        contacts: { ...data.contacts }
    }
    const response = await profileAPI.updateProfile(requestData)
    if (response.resultCode !== 0) {
        const message = response.messages.length > 0 ? response.messages[0] : 'Unexpected error'
        dispatch(stopSubmit('personalDataForm', { _error: message }))
    }
    dispatch(toggleIsLoading(false))
}

export default profileReducer