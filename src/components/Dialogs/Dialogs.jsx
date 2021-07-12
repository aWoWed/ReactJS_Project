import classes from './Dialogs.module.css';
import Dialog from "./DialogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs(props) {
    let dialogsItems = props.state.dialogs.map(dialog => <Dialog id={dialog.id} name={dialog.name}/>);
    let messagesItems = props.state.messages.map(message => <Message id={message.id} message={message.message}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                { dialogsItems }
            </div>
            <div className={classes.messages}>
                { messagesItems }
            </div>
        </div>
    );
}

export default Dialogs;