import React, { Component } from 'react';
import logo from './resources/logo.svg';
import './css/Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPIDashboard() {
      fetch("http://localhost:9000/dashboard")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
      this.callAPIDashboard();
  }


  render () {
    return (
      <div className="Dashboard">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <p className="intro">If this shows, it means {this.state.apiResponse}</p>
        </header>
      </div>
    );
  }

}

export default Dashboard;