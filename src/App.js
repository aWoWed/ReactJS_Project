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
                                                                                 dispatch={props.dispatch}/>}/>
                <Route path='/dialogs'
                       render={() => <Dialogs state={props.state.messagesPage} dispatch={props.dispatch}/>}/>
                <Route path='/news' render={() => <News news={props.news} dispatch={props.dispatch}/>}/>
                <Route path='/music' render={() => <Music music={props.music} dispatch={props.dispatch}/>}/>
                <Route path='/settings' render={() => <Settings settings={props.settings} dispatch={props.dispatch}/>}/>
            </div>
        </div>
    );
}

export default App;