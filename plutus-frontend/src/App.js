import React, { Component } from 'react';
import logo from './resources/logo.svg';
import './css/App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPIHomepage() {
      fetch("http://localhost:9000/")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }


  componentWillMount() {
      this.callAPIHomepage();
  }


  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi Bros, This is the Homepage
          </p>
          <p className="App-intro">If this shows, it means {this.state.apiResponse}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <Router>
            <Link to="/dashboard" className="App-link">Dashboard Page</Link>
          </Router>
        </header>
      </div>
    );
  }

}

export default App;
