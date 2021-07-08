import './App.css';

function App() {
  return (
      <div className='app-wrapper'>
        <header className='header'>
            <img src='https://st4.depositphotos.com/9449108/25247/i/600/depositphotos_252470670-stock-photo-illustration-of-a-japanese-warrior.jpg'/>
        </header>
        <nav className='nav'>
            <div>
               <a>Profile</a>
            </div>
            <div>
               <a>Messages</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </nav>
        <div className='content'>
            <img src='https://wallpaperaccess.com/full/1198688.jpg'/>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
      </div>
  );
}

export default App;