import classes from './ProfileComponent.module.css';
import MyPosts from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function ProfileComponent() {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
}

export default ProfileComponent;