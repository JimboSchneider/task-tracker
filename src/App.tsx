import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <link href="/dist/output.css" rel="stylesheet" />
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-3xl font-bold">
          Edit
          <code>src/App.tsx</code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Brought to you by Jim Schneider</p>
        <a href="https://www.digitalocean.com/?refcode=8740a4a8f85e&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"><img src="https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%201.svg" alt="DigitalOcean Referral Badge" /></a>
      </header>
    </div>
  );
}

export default App;
