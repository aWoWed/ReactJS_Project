import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

function Dialog(props){
    let path = '/dialogs/' + props.id;

    return(
        <div className={classes.dialog}>
            <NavLink to={path} activeClassname={classes.active}>{props.name}</NavLink>
        </div>
    );
}

function Message(props) {
    return(
        <div className={classes.messages}>{props.message}</div>
    );
}

let dialogsData = [
    {id: 1, name: 'Ilya'},
    {id: 2, name: 'Dima'},
    {id: 3, name: 'Misha'},
    {id: 4, name: 'Max'},
    {id: 5, name: 'Lesya'},
    {id: 6, name: 'Julia'},
];

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Hello'},
    {id: 3, message: 'Man'},
];

function Dialogs() {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <Dialog id={dialogsData[0].id} name={dialogsData[0].name}/>
                <Dialog id={dialogsData[1].id} name={dialogsData[1].name}/>
                <Dialog id={dialogsData[2].id} name={dialogsData[2].name}/>
                <Dialog id={dialogsData[3].id} name={dialogsData[3].name}/>
                <Dialog id={dialogsData[4].id} name={dialogsData[4].name}/>
                <Dialog id={dialogsData[5].id} name={dialogsData[5].name}/>
            </div>
            <div className={classes.messages}>
                <Message id={messagesData[0].id} message={messagesData[0].message}/>
                <Message id={messagesData[1].id} message={messagesData[1].message}/>
                <Message id={messagesData[2].id} message={messagesData[2].message}/>
            </div>
        </div>
    );
}

export default Dialogs;