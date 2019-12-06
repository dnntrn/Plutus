import React, { Component } from 'react';

import Dropdown from './components/Dropdown.js';
import Chart from './components/Chart.js';

import './App.css';


class App extends Component {
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

<<<<<<< HEAD
  companyCallback = (companyData) => {

    this.setState({currCompany: companyData});

  }

  levelCallback = (levelData) => {

    this.setState({currLevel: levelData});

=======
  callAPIHomepage() {
      fetch("http://localhost:9000/")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }


  componentWillMount() {
      this.callAPIHomepage();
>>>>>>> b71c74b1626179ff34f59d1b5444a1c0e8cb6164
  }


  render() {
    return (
<<<<<<< HEAD
      <div className="App"> 
        <h1> App </h1>
        <Dropdown type="Company" callback={this.companyCallback} opts={this.state.companies} />
        <Dropdown type="Level" callback={this.levelCallback} opts={this.state.levels} />
        <Chart company={this.state.currCompany} level={this.state.currLevel}/>
=======
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi Bros, This is the Homepage
          </p>
          <p className="App-intro">If this shows, it means {this.state.apiResponse}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <Router>
            <Link to="/dashboard" className="App-link">Dashboard Page</Link>
          </Router>
        </header>
>>>>>>> b71c74b1626179ff34f59d1b5444a1c0e8cb6164
      </div>


      )
  }
}



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
