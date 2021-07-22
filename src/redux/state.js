let rerenderEntireTree = () => {
    console.log('State was changed')
}

let state = {
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
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 3,
        message: state.profilesPage.newPostText,
        likesCount: 19,
    };

    state.profilesPage.posts.push(newPost);
    state.profilesPage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newPostText) => {
    state.profilesPage.newPostText = newPostText;
    rerenderEntireTree(state);
}

export const addMessage = (dialogMessage) => {
    let newMessage = {
      id: 4,
      message: dialogMessage,
    };

    state.messagesPage.messages.push(newMessage);
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}

export default state;