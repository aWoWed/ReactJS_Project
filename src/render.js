import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {addPost, updateNewPostText} from "./redux/state";
import {addMessage} from "./redux/state";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={ state } addPost={ addPost } updateNewPostText={ updateNewPostText } addMessage={ addMessage } />
        </BrowserRouter>, document.getElementById('root')
    );
}