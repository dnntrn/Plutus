import React, { Component } from 'react';
import Dropdown from './Dropdown.js';
import Chart from './Chart.js';
import {Row,Col} from 'react-bootstrap';

class FullChart extends Component {
    constructor(props){
        super(props)
        this.state = {
            players: this.props.initialPlayers
        }
    }

    callAPIDashboard() {
            fetch("http://localhost:9000/dashboard")
                .then(res => res.text())
                .then(res => this.setState({ apiResponse: res }));

        };


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
        this.setState({
            NumCharts: num,
        });

        }

   
    render() { 
        return ( 
            <div>
            <Row>
              <Col>
                <div id="filterBox">
                <Dropdown type="Company" callback={this.companyCallback} opts={this.props.ddopts} />
                <Dropdown type="Level" callback={this.levelCallback} opts={this.props.ddopts} />
                </div>
              </Col>
              <Col>
            <div id="chartBox">
              <Chart company={this.state.currCompany} level={this.state.currLevel} />
            </div>
            </Col>
            </Row>

            </div>
           
         );
    }
}
 
export default FullChart;