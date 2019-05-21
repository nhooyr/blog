import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = (props) => {
  return (
    <div className="App">
      <header css={{
        width: "100%",
        height: "1000px",
        backgroundColor: "green"
      }}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
