import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I first installed Node.js and npm from their designated websites, then used the command "npx create-react-app 'cps530-lab10'" in the command line, allowing me to create a React application folder in my local directory. 
          I then edited the source file to design this webpage.
          Afterwards, I went on Github to create a repository to host the webpage I creatd. 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
