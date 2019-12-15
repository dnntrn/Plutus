import React, { Component } from 'react';
import Dropdown from './Dropdown.js';
import Chart from './Chart.js';
import {Row,Col,Card} from 'react-bootstrap';

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
           
              <Col>
                <Dropdown type="Company" callback={this.companyCallback} opts={this.props.ddopts} />
                <Dropdown type="Position" callback={this.levelCallback} opts={this.props.levelsopts} />
              </Col>
              <Col>
              <Chart company={this.state.currCompany} level={this.state.currLevel} />
              </Col>
    

            </div>
           
         );
    }
}
 
export default FullChart;