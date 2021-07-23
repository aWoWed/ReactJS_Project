import React from 'react'
import classes from './MyPost.module.css'
import Post from "./Post/Post"
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

function MyPosts(props) {
    let postsItems = props.posts.map(post => <Post id={post.id} message={post.message} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add Post</button>
                <button>Post Remove</button>
            </div>
            <div className={classes.posts}>
                {postsItems}
            </div>
        </div>
    )
}

export default MyPosts;