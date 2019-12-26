import React, { Component } from 'react';
import NavBar from './components/NavBar.js';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Footer from './components/Footer'
import './css/App.css';



class App extends Component {
  componentDidMount () {
    const script = document.createElement("script");

    script.src = "scripts/homepage.js";
    script.async = true;
    console.log(document.getElementById("nav"));
    document.body.appendChild(script);
  }

  render () {
    return (
      <div className="App">
        <NavBar/>

        <Jumbotron id= "header" bsPrefix={"Jumbo"}>
          <div id= "jumboText">
            <h2 className="subtitleH2">Find Out What Smarter and Better CS People Are Getting Paid</h2>
            <h3 className="subtitleH3">Figure out if you should negotiate, keep interviewing, or accept that offer!</h3>
          </div>
          <Button variant="primary" size="lg" style = {{backgroundColor:"crimson",borderColor:"brown"}}>
            <a href = "/recommendations" style ={{textDecoration:"none", color:"inherit"}}>Start Searching</a>
          </Button>
        </Jumbotron>

        <main>
          <h2>How it Works:</h2>
          <Container>
            <Row id="about" style={{borderBottom: "1px solid brown"}}>
              <Col>
                  <h3 className="rowTitle">Use our dashboards to filter salary information</h3>
                  <p className="howInfo">
                    Compare up to 4 companies side-by-side
                  </p>
              </Col>
              <Col md={8}>
                <img src= {"/dashboard.png"} className= "icons"></img>
              </Col>
            </Row>
            <Row id="transparency" style={{borderBottom: "1px solid brown"}}>
              <Col md={6}>
                <img src = {'/companyLogos.png'} className= "icons"></img>
              </Col>
              <Col>
                <h3 className="rowTitle">Search for company recommendations using reviews left by real people who have worked there.</h3>
                <p className="howInfo">
                 Narrow down your application submissions using this service.
                </p>
              </Col>
            </Row>

            <Row id="ourValues">
              <Col>
                <h3 className="rowTitle" id="addSalaryTitle">Add your own salary <br></br> once you get hired!</h3>
                <p className="howInfo">
                  Contribute back to Plutus!
                </p>
              </Col>
              <Col md={5}>
                <img src= {"/moneyGrad.png"} className= "icons"></img>
              </Col>
            </Row>

          </Container>
        </main>

        <Footer/>
      </div>
    )

  }

}

export default App;
