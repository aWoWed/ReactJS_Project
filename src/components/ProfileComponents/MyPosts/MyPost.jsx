import React from 'react'
import classes from './MyPost.module.css'
import Post from "./Post/Post"
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/state";

function MyPosts(props) {
    let postsItems = props.posts.map(post => <Post id={post.id} message={post.message} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        let action = updateNewPostTextCreator(text)
        props.dispatch(action)
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea placeholder={'Enter your Post'} onChange={onPostChange} ref={newPostElement}
                          value={props.newPostText}/>
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