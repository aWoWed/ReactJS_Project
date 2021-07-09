import classes from './Post.module.css';

function Post(props) {
    return (
        <div className={classes.item}>
            <img className={classes.img} src='https://64.media.tumblr.com/3b20d472b813651fd1632d9ed49016cc/bb6d8195030791e9-8d/s400x600/2da9045bc98fb9b2211b814003f8ee7cc9a9fc80.png'/>
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    );
}

export default Post;