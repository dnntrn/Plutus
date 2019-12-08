import React, { Component } from 'react';
import logo from './resources/logo.svg';
import './css/Dashboard.css';
import Dropdown from './components/Dropdown.js';
import Chart from './components/Chart.js';

class Dashboard extends Component {
  callAPIDashboard() {
      fetch("http://localhost:9000/")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  };


  componentWillMount() {
      this.callAPIDashboard();
  }

  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
      currCompany: null,
      currLevel: null,
      companies: [
        {
          id:1,
          value: "Microsoft"
        },
        {
          id:2,
          value: "Google"
        },
        {
          id:3,
          value: "Facebook"
        },
        {
          id:4,
          value: "Lyft"
        },
        {
          id:5,
          value: "Amazon"
        },
      ],
      levels: [
        {
          id:1,
          value: "Entry"
        },
        {
          id:2,
          value: "Senior"
        },
        {
          id:3,
          value: "New Grad"
        },
        {
          id:4,
          value: "Partner"
        },

      ],
     };
  }

  companyCallback = (companyData) => {

    this.setState({currCompany: companyData});

  }

  levelCallback = (levelData) => {

    this.setState({currLevel: levelData});
  }



  render() {
    return (
      <div className="App">
        <h1> App </h1>
        <Dropdown type="Company" callback={this.companyCallback} opts={this.state.companies} />
        <Dropdown type="Level" callback={this.levelCallback} opts={this.state.levels} />
        <Chart company={this.state.currCompany} level={this.state.currLevel}/>
      </div>


      )
  }

}

export default Dashboard;
