import classes from './ProfileInfo.module.css';

function ProfileInfo(props) {
    return (
        <div className={classes.content}>
            <div>
                <img className={classes.content__img} src='https://wallpaperaccess.com/full/1198688.jpg'/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;