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
                <Post message='It is my first post' />
                <Post message='How are you?' />
            </div>
        </div>
    );
}

export default MyPosts;