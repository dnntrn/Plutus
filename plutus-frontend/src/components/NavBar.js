import React, { Component } from 'react';
import './styles/NavBar.styles.css';
import Button from "react-bootstrap/Button";
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'

class NavBar extends Component {
	constructor(props) {
		super(props);
	}

	handleSelect (eventKey) {
		//this is where you put modal stuffs
		alert(`selected ${eventKey}`);
	}

	render() {
		return (
			<div style={{borderBottom:"solid black .5px"}}>
				<Nav activeKey = {this.props.activeKey}>
					<Navbar.Brand>
						<img src={ "/god-of-wealth.png" } style={{height:70}} alt="logo" />
					</Navbar.Brand>
				  <Nav.Item eventKey="1" className="App-Name">
				    <h1 eventKey="disabled" disabled>Plutus</h1>
				  </Nav.Item>
				  <Nav.Item eventKey="2" className="App-Subtitle">
						<Nav.Link eventKey="disabled" disabled>
				   		how much will you make?
						</Nav.Link>
				  </Nav.Item>

					<NavDropdown title="Navigate" id="nav-dropdown">
		        <NavDropdown.Item eventKey="4.1" href="/">Home</NavDropdown.Item>
		        <NavDropdown.Item eventKey="4.2" href="/dashboard">Dashboard</NavDropdown.Item>
		        <NavDropdown.Item eventKey="4.3" href="/recommendations">Recommendations</NavDropdown.Item>
		        <NavDropdown.Divider />
		        <NavDropdown.Item eventKey="4.4" onSelect={this.handleSelect}>Add your salary info</NavDropdown.Item>
		      </NavDropdown>
				</Nav>
			</div>
	  );
	}
}

export default NavBar
