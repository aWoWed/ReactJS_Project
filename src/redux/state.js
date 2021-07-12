let state = {
    profilesPage: {
        posts: [
            {id: 1, message: 'It is my first post', likesCount: 0},
            {id: 2, message: 'How are you?', likesCount: 22},
        ],
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
        message: postMessage,
        likesCount: 19,
    };

    state.profilesPage.posts.push(newPost);
}

export let addMessage = (dialogMessage) => {
    let newMessage = {
      id: 4,
      message: dialogMessage,
    };
}

export default state;