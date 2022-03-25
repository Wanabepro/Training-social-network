import { usersAPI } from './../../api/api';

const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_USERS = 'users/SET_USERS'
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'users/SET_TOTAL_COUNT'
const TOGGLE_IS_LOADING = 'users/TOGGLE_IS_LOADING'
const TOGGLE_IS_FOLLOWING = 'users/TOGGLE_IS_FOLLOWING'

const initialState = {
    users: [],
    count: 100,
    totalCount: 1,
    currentPage: 1,
    isLoading: true,
    isFollowing: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.id) {
                        return { ...user, followed: true }
                    }
                    return user
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.id) {
                        return { ...user, followed: false }
                    }
                    return user
                })
            }

        case SET_USERS:
            return {
                ...state,
                users: action.users
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }

        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            }

        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }

        case TOGGLE_IS_FOLLOWING:
            return {
                ...state,
                isFollowing: action.isFollowing
                    ? [...state.isFollowing, action.id]
                    : state.isFollowing.filter(id => id !== action.id)
            }

        default:
            return state
    }
}

const follow = (id) => ({ type: FOLLOW, id })
const unfollow = (id) => ({ type: UNFOLLOW, id })
const setUsers = (users) => ({ type: SET_USERS, users })
const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount })
const toggleLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading })
const toggleFollowing = (isFollowing, id) => ({ type: TOGGLE_IS_FOLLOWING, isFollowing, id })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })

export const getUsers = (currentPage, count) => async dispatch => {
    dispatch(toggleLoading(true))
    const data = await usersAPI.getUsers(currentPage, count)
    dispatch(toggleLoading(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalCount(data.totalCount))
}


export const followUser = (id) => async dispatch => {
    dispatch(toggleFollowing(true, id))
    const resultCode = await usersAPI.follow(id)
    dispatch(toggleFollowing(false, id))
    if (resultCode === 0) { dispatch(follow(id)) }
}


export const unfollowUser = (id) => async dispatch => {
    dispatch(toggleFollowing(true, id))
    const resultCode = await usersAPI.unfollow(id)
    dispatch(toggleFollowing(false, id))
    if (resultCode === 0) { dispatch(unfollow(id)) }
}


export default usersReducer