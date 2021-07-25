import React from 'react'
import {addPostCreator, updateNewPostTextCreator} from '../../../redux/profile-reducer'
import MyPosts from './MyPost'

function MyPostsContainer(props) {
    let state = props.store.getState().profilesPage

    let onAddPost = () => {
        props.store.dispatch(addPostCreator())
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextCreator(text)
        props.store.dispatch(action)
    }

    return (
        <MyPosts addPost={onAddPost} updateNewPostText={onPostChange} posts={state.posts}
                 newPostText={state.newPostText}/>
    )
}

export default MyPostsContainer