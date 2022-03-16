const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING'
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING'

const initialState = {
    users: [],
    count: 100,
    totalCount: 1,
    currentPage: 1,
    isLoading: true,
    isFollowing: false
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
            }

        default:
            return state
    }
}

export const follow = (id) => ({ type: FOLLOW, id })
export const unfollow = (id) => ({ type: UNFOLLOW, id })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount })
export const toggleLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading})
export const toggleFollowing = (isFollowing) => ({ type: TOGGLE_IS_FOLLOWING, isFollowing})

export default usersReducer