let storage = {
    _state: {
        profilesPage: {
            posts: [
                {id: 1, message: 'It is my first post', likesCount: 0},
                {id: 2, message: 'How are you?', likesCount: 22},
            ],
            newPostText: 'text',
        },
        messagesPage:{
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

    get state() {
        return this._state
    },

    _callSubscriber() {
        console.log('State was changed')
    },

    addPost() {
        let newPost = {
            id: 3,
            message: this._state.profilesPage.newPostText,
            likesCount: 19,
        };

        this._state.profilesPage.posts.push(newPost);
        this._state.profilesPage.newPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText(newPostText) {
        this._state.profilesPage.newPostText = newPostText;
        this._callSubscriber(this._state);
    },

    addMessage(dialogMessage) {
        let newMessage = {
            id: 4,
            message: dialogMessage,
        };

        this._state.messagesPage.messages.push(newMessage);
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer
    }
}

export default storage;