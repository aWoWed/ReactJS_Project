import classes from './MyPost.module.css';
import Post from "./Post/Post";

function MyPosts(props) {
    let postsItems = props.state.posts.map(post => <Post id={post.id} message={post.message} likesCount={post.likesCount} />);

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add Post</button>
                <button>Post Remove</button>
            </div>
            <div className={classes.posts}>
                { postsItems }
            </div>
        </div>
    );
}

export default MyPosts;