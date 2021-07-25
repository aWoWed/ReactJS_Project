import React from 'react'
import {addMessageCreator, updateNewMessageTextCreator} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            let action = updateNewMessageTextCreator(text)
            dispatch(action)
        },
        addMessage: () => {
            dispatch(addMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;