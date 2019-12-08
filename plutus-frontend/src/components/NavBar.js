import React, { Component } from 'react';

class NavBar extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div style={{display:"flex", }}>
        <img src={ "/god-of-wealth.png" } className="App-logo" alt="logo" />
        <h1 className="App-Name">Plutus</h1>
        <p className="App-Subtitle">how much will you make?</p>
			</div>
	  );
	}
}

export default NavBar
