import classes from './ProfileComponent.module.css';
import MyPosts from "./MyPosts/MyPost";

function ProfileComponent() {
    return (
        <div className={classes.content}>
            <div>
            <img className={classes.content__img} src='https://wallpaperaccess.com/full/1198688.jpg'/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
}

export default ProfileComponent;