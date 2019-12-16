import React, { Component } from 'react';
import './css/Dashboard.css';
import Dropdown from './components/Dropdown.js';
import NavBar from './components/NavBar.js';
import Chart from './components/Chart.js';
import {Row,Col, Container,Card,CardGroup} from 'react-bootstrap';
import FullChart from './components/FullChart'
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {  apiResponse: "",
    currCompany: null,
    currLevel: null,
    currJobLevel:null,
    currKeywords:null,
    currMinSalary:null,
    NumCharts:1,
    companies: [
      {
        id:0,
        value: ""
      },
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
        id:0,
        value: ""
      },
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


  // callAPIDashboard() {
  //     fetch("http://localhost:9000/dashboard")
  //         .then(res => res.text())
  //         .then(res => this.setState({ apiResponse: res }));
  //
  // };
  //
  //
  // componentWillMount() {
  //     this.callAPIDashboard();
  // }
  companyCallback = (companyData) => {
    this.setState({currCompany: companyData});
  }

  levelCallback = (levelData) => {
    this.setState({currLevel: levelData});
  }

  NumChartsCallback = (num) => {
    this.setState({
      NumCharts: num,
  });

  }

  render () {
    let newArray = Array.from({ length: this.state.NumCharts }, (v, i) => i)
    return (
      <div className="Dashboard">
        <NavBar />
        <h1 style={{marginTop: "3%"}}> Dashboard </h1>
        <div id="allContentDash">
          <Container>
          <Row>
            <Col><Dropdown type ="NumCharts" callback ={this.NumChartsCallback} opts= {this.state.chartOptions}/></Col>
          </Row>

          <Row>
            {newArray.map(num =>
              <> <Col  xs="6">
                  <FullChart ddopts = {this.state.companies} levelsopts = {this.state.levels}/>
                </Col>
            </>)}
          </Row>


          </Container>


        </div>
      </div>
      )
  }


}

export default Dashboard;
