import React, { Component } from 'react';
import Dropdown from './Dropdown.js';
import Chart from './Chart.js';
import {Row,Col,Card} from 'react-bootstrap';

class FullChart extends Component {
    constructor(props){
        super(props)
        this.state = {
            players: this.props.initialPlayers,
            currCompany: "",
            position: "",
            data: [],
        }
    }

    companyCallback = (companyData) => {
      console.log("company")
      const {position, currCompany} = this.state
      this.setState({currCompany: companyData}, () => {
        let queryString = "/dashboard/?"

        if (this.state.position.length > 0) {
          queryString = queryString +  "positionTitle=" + position
          queryString = queryString +  "&companyName=" + companyData
        } else {
          queryString = queryString +  "companyName=" + companyData
        }

        console.log(queryString)
        fetch(queryString, {
            method: 'GET',
          })
          .then(searchResponse => searchResponse.json())
          .then(data => {
            console.log(data);
            this.setState({data: data})
          })
          .catch(function(err){
            console.log(err)
          })

      });


    }

    positionCallback = (positionData) => {
      const {position, currCompany} = this.state
      this.setState({position: positionData}, ()=> {
        console.log(positionData)
        let queryString = "/dashboard/?"

        if (this.state.currCompany.length > 0) {
          queryString = queryString +  "positionTitle=" + positionData
          queryString = queryString +  "&companyName=" + currCompany
        } else {
          queryString = queryString +  "positionTitle=" + positionData
        }
        console.log(queryString)

        fetch(queryString, {
            method: 'GET',
          })
          .then(searchResponse => searchResponse.json())
          .then(data => {
            console.log(data);
            this.setState({data: data})
          })
          .catch(function(err){
            console.log(err)
          })
      });


    }


    render() {
        return (
            <div>

              <Col>
                <Dropdown type="Company" callback={this.companyCallback} opts={this.props.ddopts} />
                <Dropdown type="Position" callback={this.positionCallback} opts={this.props.levelsopts} />
              </Col>
              <Col>
              <Chart company={this.state.currCompany} level={this.state.position} data={this.state.data} />
              </Col>


            </div>

         );
    }
}

export default FullChart;
