import React from 'react'
import classes from './Dialogs.module.css'
import Dialog from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import {
    addMessageCreator,
    updateNewMessageTextCreator,
} from "../../redux/dialogs-reducer";

function Dialogs(props) {
    let dialogsItems = props.state.dialogs.map(dialog => <Dialog id={dialog.id} name={dialog.name}/>)
    let messagesItems = props.state.messages.map(message => <Message id={message.id} message={message.message}/>)

    let newMessage = React.createRef()

    let addMessage = () => {
        props.dispatch(addMessageCreator())
    }

    let onMessageChange = () => {
        let text = newMessage.current.value
        let action = updateNewMessageTextCreator(text)
        props.dispatch(action)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsItems}
            </div>
            <div className={classes.messages}>
                {messagesItems}
                <div>
                    <textarea placeholder={'Enter your Message'} onChange={onMessageChange} ref={newMessage}/>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;