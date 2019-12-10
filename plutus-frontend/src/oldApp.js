import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Dropdown from './components/Dropdown.js'


class App extends Component {
  constructor(props) {
    super(props);
    /* here we would read in the data from a json */
    this.state = { 
      apiResponse: "",
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
     };
  }

  callAPI() {
      fetch("http://localhost:9000/")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
      this.callAPI();
  }


  render () {
    return (
      <div className="App">
        <header className="App-header">
          <Dropdown className="companies" opts={this.state.companies}/>

          <Dropdown className="positions" opts={this.state.levels}/>

        </header>
        

      </div>
    );
  }

}

export default App;
