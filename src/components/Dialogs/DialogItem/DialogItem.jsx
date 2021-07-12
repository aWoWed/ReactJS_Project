import classes from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

function Dialog(props){
    let path = '/dialogs/' + props.id;

    return (
        <div className={classes.dialog}>
            <NavLink to={path} activeClassname={classes.active}>{props.name}</NavLink>
        </div>
    );
}

export default Dialog;