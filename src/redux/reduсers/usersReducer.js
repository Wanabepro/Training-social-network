const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'

const initialState = {
    users: [],
    count: 100,
    totalCount: 1,
    currentPage: 1
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

        default:
            return state
    }
}

export const followAC = (id) => ({ type: FOLLOW, id })
export const unfollowAC = (id) => ({ type: UNFOLLOW, id })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalCountAC = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount })

export default usersReducer