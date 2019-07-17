import React from 'react';
import './App.css';
import Images from './components/images';
function App() {
  return (
    <div className="App">
    <header>
      <nav className = "navbar navbar-expand-lg navbar-dark bg-dark ">
        <a href="#" className="navbar-brand">Search Up</a>
        <button className="navbar-toggler " type="button" data-toggle="collapse" data-target = "#menu-toggler" aria-controls = "#menu-toggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul id = "menu-toggler" className = " nav justify-content-end collapse navbar-collapse">
          <li className = "nav-item active"><a className="nav-link " href="#">Home</a></li>
          <li className = "nav-item"><a className="nav-link" href="#">Services</a></li>
          <li className = "nav-item"><a className="nav-link" href="#">Contact</a></li>
          <li className = "nav-item"><a className="nav-link" href="#">About</a></li>
        </ul>
      </nav>
    </header>
    <main>
          <h1 title = "Search Up">Sup</h1>
          <Images />
    </main>
    </div>
  );
}

export default App;
