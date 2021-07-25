import React from 'react'
import {addPostCreator, updateNewPostTextCreator} from '../../../redux/profile-reducer'
import MyPosts from './MyPost'
import StoreContext from "../../../StoreContext";

function MyPostsContainer() {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    let state = store.getState().profilesPage

                    let onAddPost = () => {
                        store.dispatch(addPostCreator())
                    }

                    let onPostChange = (text) => {
                        let action = updateNewPostTextCreator(text)
                        store.dispatch(action)
                    }

                    return (<MyPosts addPost={onAddPost} updateNewPostText={onPostChange}
                                     posts={state.posts}
                                     newPostText={state.newPostText}/>)
                }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer