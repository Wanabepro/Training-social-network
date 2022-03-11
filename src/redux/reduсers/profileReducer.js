const initialState = {
    profileInfo: {
        name: 'Сергей',
        surname: 'Ильясов',
        citi: 'Санкт-Петербург',
        tel: '+79777622720',
        mail: 'ilyasov_sk@mail.ru',
    },
    posts: [
        { id: 0, name: 'Сергей Ильясов', avatarLink: 'https://sun9-87.userapi.com/impf/c848632/v848632082/ad691/Bwea4WZhDOw.jpg?size=1504x1000&quality=96&sign=33bb05f520ade8f6d7ee10222d71d569&type=album', text: 'текст поста 1', likesCount: 10 },
        { id: 1, name: 'Иван Иванов', avatarLink: 'https://sun9-16.userapi.com/impg/-EDLrv40aP4HDBJtqDCyY-G9N_2iAzY5MTtZxw/WoY02m58x7M.jpg?size=1215x2160&quality=95&sign=dd056802bb04d11f3f494c5a6785c6a9&type=album', text: 'текст поста 2', likesCount: 8 },
        { id: 2, name: 'Анатолий Вассерман', avatarLink: 'https://sun9-63.userapi.com/impf/c845420/v845420935/4c78c/r3-y56vS2_M.jpg?size=1536x1920&quality=96&sign=65f9e9c43390a9a7eb39bf33d172a01c&type=album', text: 'текст поста 3', likesCount: 15 },
        { id: 3, name: 'Настя Мирная', avatarLink: 'https://sun9-63.userapi.com/impf/c845420/v845420935/4c78c/r3-y56vS2_M.jpg?size=1536x1920&quality=96&sign=65f9e9c43390a9a7eb39bf33d172a01c&type=album', text: 'текст поста 4', likesCount: 17 },
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEND_POST':
            return {
                ...state,
                posts: [...state.posts, { id: state.posts.length, name: 'Сергей Ильясов', avatarLink: 'https://sun9-87.userapi.com/impf/c848632/v848632082/ad691/Bwea4WZhDOw.jpg?size=1504x1000&quality=96&sign=33bb05f520ade8f6d7ee10222d71d569&type=album', text: state.newPostText, likesCount: 0, }],
                newPostText: '',
            }

        case 'UPDATE_LETTER_IN_NEW_POST':
            return {
                ...state,
                newPostText: action.newPostText,
            }

        default: return (state)
    }
}

export const sendPostActionCreator = () => {
    return ({ type: 'SEND_POST' })
}
export const updateFormActionCreator = (newPostText) => {
    return ({ type: 'UPDATE_LETTER_IN_NEW_POST', newPostText })
}


export default profileReducer