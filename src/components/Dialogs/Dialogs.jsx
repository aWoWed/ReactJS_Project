import React from 'react'
import classes from './Dialogs.module.css'
import Dialog from './DialogItem/DialogItem'
import Message from './Message/Message'

function Dialogs(props) {
    let state = props.messagesPage

    let dialogsItems = state.dialogs.map(dialog => <Dialog id={dialog.id} name={dialog.name}/>)
    let messagesItems = state.messages.map(message => <Message id={message.id} message={message.message}/>)

    let newMessage = React.createRef()

    let addMessage = () => {
        props.addMessage()
    }

    let onMessageChange = () => {
        let text = newMessage.current.value
        props.updateNewMessageText(text)
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