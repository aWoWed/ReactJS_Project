import classes from './ProfileComponent.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

function ProfileComponent(props) {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}

export default ProfileComponent