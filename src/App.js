import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileComponent from "./components/ProfileComponents/ProfileComponent";

function App() {
  return (
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <ProfileComponent/>
      </div>
  );
}

export default App;