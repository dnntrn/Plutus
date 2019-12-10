import React, { Component } from 'react';
import NavBar from './components/NavBar.js';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

import Footer from './components/Footer'
import './css/App.css';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Jumbotron style = {{ backgroundColor:"#FFC762",borderBottom:"1px solid brown"}}>
        <h1 style={{fontSize:"6em"}}>Plutus</h1 >
        <p style = {{fontSize:"2em"}}>
          Find out What Smarter and Better CS People are getting Paid
          <br></br>
          <Button variant="primary" size="lg" style = {{backgroundColor:"crimson",borderColor:"brown"}}>
            <a href = "/recommendations" style ={{textDecoration:"none", color:"inherit"}}>Let's Goooooooo</a>
          </Button>
          <br></br>
        </p>
      </Jumbotron>
      <div id="about" class="container-fluid" style = {{borderBottom:"1px solid brown", height:"100%"}}>
        <div class="row" style= {{height:"400px"}}>
            <div class="col-md-8" style ={{textAlign:"left"}}>
              <h3>About Plutus</h3><br></br>
              <p>In the philosophized mythology of the later Classical period, Plutus is envisaged by Aristophanes as blinded by Zeus, so that he would be able to dispense his gifts without prejudice; he is also lame, as he takes his time arriving, and winged, so he leaves faster than he came.[3] When the god's sight is restored, in Aristophanes' comedy, he is then able to determine who is deserving of wealth, creating havoc.</p>
            </div>
            <div class="col-md-4">
               <img src= {"/up-and-down.png"} style = {{height:"50%"}}></img>
            </div>
          </div>
      </div>
      <div id="about" class="container-fluid" style = {{borderBottom:"1px solid brown"}}>
        <div class="row">
            <div class="col-sm-4">
                  <img src = {'/fish.png'} style = {{height:"50%"}}></img>
            </div>
            
          <div class="col-sm-8" style ={{textAlign:"left"}}>
                <h3>Transparency is Key</h3><br></br>
                <p>
               Son of Daedalus who dared to fly too near the sun on wings of feathers and wax. Daedalus had been imprisoned by King Minos of Crete within the walls of his own invention, the Labyrinth. But the great craftsman's genius would not suffer captivity. He made two pairs of wings by adhering feathers to a wooden frame with wax. Giving one pair to his son, he cautioned him that flying too near the sun would cause the wax to melt. But Icarus became ecstatic with the ability to fly and forgot his father's warning. The feathers came loose and Icarus plunged to his death in the sea.</p>
               <p>In the philosophized mythology of the later Classical period, Plutus is envisaged by Aristophanes as blinded by Zeus, so that he would be able to dispense his gifts without prejudice; he is also lame, as he takes his time arriving, and winged, so he leaves faster than he came.[3] When the god's sight is restored, in Aristophanes' comedy, he is then able to determine who is deserving of wealth, creating havoc.</p>
              </div>

           
          </div>
      </div>
        <div class="container-fluid bg-grey">
          <div class="row">

            <div class="col-sm-8">
              <h2>Our Values</h2><br></br>
              <h4><strong>MISSION:</strong> Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br></br>
              <p><strong>VISION:</strong> Our vision Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Embracing the crisis with technology feels good; it means growing our economy, advancing, having more, not giving up anything. This blind spot remains our deep, unspoken problem. We want to solve the ecological crisis and the humanitarian crisis with economic growth and “technology,” without changing anything. We want it all.</p>            </div>
            <div class="col-sm-4">
              <img src= {"/businessman-with-doubts.png"}style= {{height:"50%"}}></img>
            </div>
          </div>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
