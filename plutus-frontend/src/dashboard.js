import React, { Component } from 'react';
import './css/Dashboard.css';
import Dropdown from './components/Dropdown.js';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer';
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
    let chartsArray = Array.from({ length: this.state.NumCharts }, (v, i) => i)
    let mapsRender = []

    if (chartsArray.length == 1) {
      mapsRender.push(
        <Col>
          <FullChart className ="chart" style={{padding:"3%"}} ddopts = {this.state.companies} levelsopts = {this.state.levels}/>
        </Col>
      )
    } else {
      chartsArray.map((map) => {
        mapsRender.push(
          <Col xs="6">
            <FullChart className ="chart" style={{padding:"3%", margin:"2%"}} ddopts = {this.state.companies} levelsopts = {this.state.levels}/>
          </Col>
        )
      })
    }

    return (
      <div className="Dashboards">
        <NavBar />
        <h1 style={{marginTop: "3%"}}> Dashboards </h1>
        <div id="allContentDash">

          <Container>
            <Row>
              <div id="filterBox">
                  <p>Compare</p>
                  <Dropdown name ="Number of Charts" type ="NumCharts" callback ={this.NumChartsCallback} opts= {this.state.chartOptions}/>
                  <p> </p>
                  <p>companies.</p>
              </div>
            </Row>
            <Row id="chartsSection">
              {mapsRender}
            </Row>
          </Container>

        </div>
        <Footer/>
      </div>
    )
  }


}

export default Dashboard;
