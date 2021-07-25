import React from 'react'

import {
    addMessageCreator,
    updateNewMessageTextCreator,
} from '../../redux/dialogs-reducer'
import Dialogs from "./Dialogs";

function DialogsContainer(props) {
    let state = props.store.getState().messagesPage

    let onAddMessage = () => {
        props.store.dispatch(addMessageCreator())
    }

    let onMessageChange = (text) => {
        let action = updateNewMessageTextCreator(text)
        props.store.dispatch(action)
    }

    return (
        <Dialogs addMessage={onAddMessage} updateNewMessageText={onMessageChange} messagesPage={state}
                 newMessageText={state.newMessageText}/>
    )
}

export default DialogsContainer;