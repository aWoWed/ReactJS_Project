import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileComponent from "./components/ProfileComponents/ProfileComponent";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profileComponents' render={() => <ProfileComponent />}/>
                <Route path='/dialogs'
                       render={() => <DialogsContainer store={props.store}/>}/>
                <Route path='/news' render={() => <News news={props.news} dispatch={props.dispatch}/>}/>
                <Route path='/music' render={() => <Music music={props.music} dispatch={props.dispatch}/>}/>
                <Route path='/settings' render={() => <Settings settings={props.settings} dispatch={props.dispatch}/>}/>
            </div>
        </div>
    );
}

export default App;