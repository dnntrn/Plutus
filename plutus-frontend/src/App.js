import React, { Component } from 'react';

import NavBar from './components/NavBar.js';
import { Link } from 'react-router-dom';
import './css/App.css';





function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>This is Homepage</h1>
      <Link to= "/dashboard">
        Go to Dashboard
      </Link>
      <br></br>
      <Link to= "/recommendations">
        Go to Recommendations
      </Link>
    </div>
  );
}

export default App;
