import React, { Component } from 'react';

import Dropdown from './components/Dropdown.js';
import Chart from './components/Chart.js';

import './css/App.css';
import FormInput from './components/FormInput.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      apiResponse: "",
    
     };
  }


  callAPIHomepage() {
      fetch("http://localhost:9000/")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  };


  componentWillMount() {
      this.callAPIHomepage();
  }


  render() {
    return (
      <div className="App"> 
        <h1> Ummm this is Plutus </h1>

        <a href="/dashboard">Click Here, Lets Get Started</a>
        <br></br>
        <a href="/recommendations">Click Here for the searching</a>
        

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
