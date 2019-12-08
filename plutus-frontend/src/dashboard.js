import React, { Component } from 'react';
import logo from './resources/logo.svg';
import './css/Dashboard.css';
import Dropdown from './components/Dropdown.js';
import Chart from './components/Chart.js';
import FormInput from './components/FormInput';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {  apiResponse: "",
    currCompany: null,
    currLevel: null,
    currJobLevel:null,
    currKeywords:null,
    currMinSalary:null,
    NumCharts:null,
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
    chartOptions:[
      {
        id:1,
        value: "1"
      },
      {
        id:2,
        value: "2"
      },
      {
        id:3,
        value: "3"
      },
      {
        id:4,
        value: "4"
      },
      

    ]};
  }

  callAPIDashboard() {
      fetch("http://localhost:9000/dashboard")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
      this.callAPIDashboard();
  }
  companyCallback = (companyData) => {

    this.setState({currCompany: companyData});

  }

  levelCallback = (levelData) => {

    this.setState({currLevel: levelData});
  }
  NumChartsCallback = (num) => {

    this.setState({NumCharts: num});
  }
  componentDidUpdate(){
    let x = this.state.NumCharts;
  }
  render () {
    return (
      <div className="Dashboard">
        <h1>ummmm its dashboardtime bitches</h1>
        <FormInput/>
        <div className="App"> 
        <h1> App </h1>
        <Dropdown type ="NumCharts" callback ={this.NumChartsCallback} opts= {this.state.chartOptions}/>
        <Dropdown type="Company" callback={this.companyCallback} opts={this.state.companies} />
        <Dropdown type="Level" callback={this.levelCallback} opts={this.state.levels} />
        <Chart company={this.state.currCompany} level={this.state.currLevel}/>
      </div>

      </div>
    );
  }

}

export default Dashboard;
