// import { dialogsAPI } from "../../api/api"

const SEND_MESSAGE = 'messages/SEND_MESSAGE'
const SET_LAST_MESSAGE = 'messages/SET_LAST_MESSAGE'
// const GET_DIALOGS = 'messages/GET_DIALOGS'

const initialState = {
    dialogs: [
        { id: 1, avatarLink: 'https://sun9-87.userapi.com/impf/c848632/v848632082/ad691/Bwea4WZhDOw.jpg?size=1504x1000&quality=96&sign=33bb05f520ade8f6d7ee10222d71d569&type=album', name: 'Сергей', lastMessage: 'последнее собщение 1' },
        { id: 2, avatarLink: 'https://sun9-16.userapi.com/impg/-EDLrv40aP4HDBJtqDCyY-G9N_2iAzY5MTtZxw/WoY02m58x7M.jpg?size=1215x2160&quality=95&sign=dd056802bb04d11f3f494c5a6785c6a9&type=album', name: 'Иван', lastMessage: 'последнее собщение 2' },
        { id: 3, avatarLink: 'https://sun9-63.userapi.com/impf/c845420/v845420935/4c78c/r3-y56vS2_M.jpg?size=1536x1920&quality=96&sign=65f9e9c43390a9a7eb39bf33d172a01c&type=album', name: 'Анатолий', lastMessage: 'последнее собщение 3' },
    ],
    messages: [
        { dialogId: 1, userId: 1, id: 0, message: 'Сообщение 1' },
        { dialogId: 1, userId: 1, id: 1, message: 'Сообщение 2' },
        { dialogId: 1, userId: 1, id: 2, message: 'Сообщение 3' },
        { dialogId: 2, userId: 2, id: 0, message: 'Сообщение 4' },
        { dialogId: 2, userId: 2, id: 1, message: 'Сообщение 5' },
        { dialogId: 2, userId: 2, id: 2, message: 'Сообщение 6' },
        { dialogId: 3, userId: 3, id: 0, message: 'Сообщение 7' },
        { dialogId: 3, userId: 3, id: 1, message: 'Сообщение 8' },
        { dialogId: 3, userId: 3, id: 2, message: 'Сообщение 9' },
    ],
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages,
                {
                    dialogId: action.dialogId,
                    userId: action.userId,
                    id: state.messages.filter(message => message.dialogId === action.dialogId).length,
                    message: action.newMessage,
                }
                ]
            }
        }

        case SET_LAST_MESSAGE: {
            return {
                ...state,
                dialogs: state.dialogs.map(dialog => {
                    if (dialog.id === action.id) return { ...dialog, lastMessage: action.lastMessage }
                    return dialog
                })
            }
        }

        default: return (state)
    }
}

export const sendMessage = (newMessage, userId, dialogId) => ({ type: SEND_MESSAGE, newMessage, userId, dialogId })
export const setLastMessage = (id, lastMessage) => ({ type: SET_LAST_MESSAGE, id, lastMessage })

export default messagesReducer