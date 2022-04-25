import { dialogsAPI } from "../../api/api"

const SEND_MESSAGE = 'messages/SEND_MESSAGE'
const GET_DIALOGS = 'messages/GET_DIALOGS'

const initialState = {
    news: [],
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages,
                {
                    id: state.messages.length,
                    message: action.newMessage,
                }
                ]
            }
        }

        case GET_DIALOGS: {
            return {
                ...state,
                dialogs: [...action.dialogs]
            }
        }

        default: return (state)
    }
}

export const sendMessage = (newMessage) => ({ type: SEND_MESSAGE, newMessage })
const setDialogsToState = dialogs => ({ type: GET_DIALOGS, dialogs })

export const getDialogs = () => async dispatch => {
    const data = await dialogsAPI.getDialogs()
    console.log(data)
    dispatch(setDialogsToState(data))
}

export default newsReducer