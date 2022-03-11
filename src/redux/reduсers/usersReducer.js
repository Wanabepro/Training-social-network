const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

const initialState = {
    users: [
        { id: 1, name: 'asasxz', status: 'Djasbmnzxcblkadjxz asbzxcnla', photos: { small: '#s', large: '#s' }, followed: true },
        { id: 2, name: 'asaxzczsxz', status: 'cxzZDjasbaasmnzxcblkadjxz asbzeqwexcnla', photos: { small: '#s', large: '#s' }, followed: false }
    ]
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
                users: [...state.users, ...action.users]
            }

        default:
            return state
    }
}

export const followAC = (id) => ({ type: FOLLOW, id})
export const unfollowAC = (id) => ({ type: UNFOLLOW, id})
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer