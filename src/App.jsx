import "./App.css"
import bulbasaur from './assets/bulbasaur.jpg'
import List from './List'

const App = () => {
  return (
    <body>
      <header>
        <h1>Ugly Pokemon Page</h1>
      </header>
      <div className="main-div">
        <div className="aside">
          <aside>
            <h3>Characters</h3>
            <List/>
          </aside>
        </div>
        <div className="bulbasaur">
          <h2>Bulbasaur's Showcase Component</h2>
          <img src={bulbasaur} alt="" />
          <h2>Bulbasaur's type is <span className="grass">Grass</span> and one of their moves is <span className="vine-whip">Vine Whip</span>.</h2>
        </div>
      </div>
      <footer >
        <h2>Footer</h2>
      </footer>
    </body>
  );
};

export default App;
