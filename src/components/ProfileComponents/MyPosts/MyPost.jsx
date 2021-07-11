import classes from './MyPost.module.css';
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div>
            My posts
            <textarea></textarea>
            <button>Add Post</button>
            <button>Post Remove</button>
            <div className={classes.posts}>
                <Post message='It is my first post' likesCount='0' />
                <Post message='How are you?' likesCount='22' />
            </div>
        </div>
    );
}

export default MyPosts;