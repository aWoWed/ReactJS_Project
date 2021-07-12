import classes from './ProfileComponent.module.css';
import MyPosts from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function ProfileComponent(props) {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts state={props.state}/>
        </div>
    );
}

export default ProfileComponent;