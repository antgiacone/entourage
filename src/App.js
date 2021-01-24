import logo from './promo.png';
import guy from './g1.jpg';
import './App.css';
import Parallax from './features/parallax';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Parallax />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Queens <code>Boulevard</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Coming 2021
        </a>
      </header>
    </div>
  );
}

export default App;
