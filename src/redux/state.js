const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

let storage = {
    _state: {
        profilesPage: {
            posts: [
                {id: 1, message: 'It is my first post', likesCount: 0},
                {id: 2, message: 'How are you?', likesCount: 22},
            ],
            newPostText: 'text',
        },
        messagesPage: {
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
        },
        sidebar: {
            friends: [
                {id: 1, message: 'Andrew'},
                {id: 2, message: 'Max'},
                {id: 3, message: 'Ilya'},
            ],
        },
        /*newsPage: {[{}],},
        musicPage: {[{}],},
        settingsPage: {[{}],},*/
    },

    _callSubscriber() {
        console.log('State was changed')
    },

    get state() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                message: this._state.profilesPage.newPostText,
                likesCount: 19,
            }
            this._state.profilesPage.posts.push(newPost)
            this._state.profilesPage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilesPage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 4,
                message: action.dialogMessage,
            }

            this._state.messagesPage.messages.push(newMessage)
            this._callSubscriber(this._state)
        }
    },
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const addMessageActionCreator = (text) => {
    return {
        type: ADD_MESSAGE,
        newText: text
    }
}

export default storage;