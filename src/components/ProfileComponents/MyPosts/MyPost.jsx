import classes from './MyPost.module.css';
import Post from "./Post/Post";

let postsData = [
    {id: 1, message: 'It is my first post', likesCount: '0'},
    {id: 2, message: 'How are you?', likesCount: '22'},
];

function MyPosts() {
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
                <Post id={postsData[0].id} message={postsData[0].message} likesCount={postsData[0].likesCount} />
                <Post id={postsData[1].id} message={postsData[1].message} likesCount={postsData[1].likesCount} />
            </div>
        </div>
    );
}

export default MyPosts;