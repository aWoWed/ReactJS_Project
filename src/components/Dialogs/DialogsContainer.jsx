import React from 'react'

import {
    addMessageCreator,
    updateNewMessageTextCreator,
} from '../../redux/dialogs-reducer'
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

function DialogsContainer() {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    let state = store.getState().messagesPage

                    let onAddMessage = () => {
                        store.dispatch(addMessageCreator())
                    }

                    let onMessageChange = (text) => {
                        let action = updateNewMessageTextCreator(text)
                        store.dispatch(action)
                    }

                    return (
                        <Dialogs addMessage={onAddMessage} updateNewMessageText={onMessageChange} messagesPage={state}
                                 newMessageText={state.newMessageText}/>)
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;