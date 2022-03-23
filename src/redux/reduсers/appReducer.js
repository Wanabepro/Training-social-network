import { authorizeUser } from './authReducer';

const INITIALIZE = 'INITIALIZE'

const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE:
            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }
}

const onInitialize = () => ({ type: INITIALIZE })

export const initialize = () => dispatch => {
    dispatch(authorizeUser()).then(() => dispatch(onInitialize()))
}

export default appReducer