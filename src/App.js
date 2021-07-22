import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileComponent from "./components/ProfileComponents/ProfileComponent";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from 'react-router-dom';

function App(props) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profileComponents' render={() => <ProfileComponent profilesPage={props.state.profilesPage}
                                                                                 addPost={props.addPost}
                                                                                 updateNewPostText={props.updateNewPostText}/>}/>
                <Route path='/dialogs'
                       render={() => <Dialogs state={props.state.messagesPage} addMessage={props.addMessage}/>}/>
                <Route path='/news' render={() => <News news={props.news}/>}/>
                <Route path='/music' render={() => <Music music={props.music}/>}/>
                <Route path='/settings' render={() => <Settings settings={props.settings}/>}/>
            </div>
        </div>
    );
}

export default App;