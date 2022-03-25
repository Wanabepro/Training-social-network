const SEND_MESSAGE = 'messages/SEND_MESSAGE'

const initialState = {
    dialogs: [
        { id: 1, avatarLink: 'https://sun9-87.userapi.com/impf/c848632/v848632082/ad691/Bwea4WZhDOw.jpg?size=1504x1000&quality=96&sign=33bb05f520ade8f6d7ee10222d71d569&type=album', name: 'Сергей', lastMessage: 'последнее собщение 1' },
        { id: 2, avatarLink: 'https://sun9-16.userapi.com/impg/-EDLrv40aP4HDBJtqDCyY-G9N_2iAzY5MTtZxw/WoY02m58x7M.jpg?size=1215x2160&quality=95&sign=dd056802bb04d11f3f494c5a6785c6a9&type=album', name: 'Иван', lastMessage: 'последнее собщение 2' },
        { id: 3, avatarLink: 'https://sun9-63.userapi.com/impf/c845420/v845420935/4c78c/r3-y56vS2_M.jpg?size=1536x1920&quality=96&sign=65f9e9c43390a9a7eb39bf33d172a01c&type=album', name: 'Анатолий', lastMessage: 'последнее собщение 3' },
    ],
    messages: [
        { id: 0, message: 'Сообщение 1' },
        { id: 1, message: 'Сообщение 2' },
        { id: 2, message: 'Сообщение 3' },
    ],
}

const messagesReducer = (state = initialState, action) => {
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

        default: return (state)
    }
}

export const sendMessage = (newMessage) => ({ type: SEND_MESSAGE, newMessage })

export default messagesReducer