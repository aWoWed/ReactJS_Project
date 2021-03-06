const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
    dialogs: [
        {id: 1, name: 'Ilya'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Misha'},
        {id: 4, name: 'Max'},
        {id: 5, name: 'Lesya'},
        {id: 6, name: 'Julia'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Man'},
    ],
    newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 4, message: state.newMessageText}]
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.dialogMessage
            }
        default:
            return state
    }
}

export const addMessageCreator = () => ({
    type: ADD_MESSAGE
})

export const updateNewMessageTextCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    dialogMessage: text
})

export default dialogsReducer