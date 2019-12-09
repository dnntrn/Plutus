import React, { Component } from 'react';
import logo from './resources/logo.svg';
import './css/App.css';
import FormInput from './components/FormInput'
import NavBar from './components/NavBar'
class Recommendations extends Component {
  constructor(props) {
    super(props);
    this.state = {  apiResponse: "",
    currJobLevel:null,
    currKeywords:null,
    currMinSalary:null,
    NumCharts:null,
    };
  }


  render () {
    return (
      <div className="Recommendations">
        <NavBar activeKey={1}/>
        <h1>Put some searches in here</h1>

        <FormInput/>
      </div>
    );
  }

}

export default Recommendations;
