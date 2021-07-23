import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let storage = {
    _state: {
        profilesPage: {
            posts: [
                {id: 1, message: 'It is my first post', likesCount: 0},
                {id: 2, message: 'How are you?', likesCount: 22},
            ],
            newPostText: '',
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
            newMessageText: '',
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
        profileReducer(this._state.profilesPage, action)
        dialogsReducer(this._state.messagesPage, action)
        sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    },
}

export default storage;