import classes from './ProfileComponent.module.css';
import MyPosts from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function ProfileComponent(props) {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts posts={ props.profilesPage.posts }
                     newPostText={ props.profilesPage.newPostText }
                     updateNewPostText={ props.updateNewPostText }
                     addPost={ props.addPost }/>
        </div>
    );
}

export default ProfileComponent;