import React, { Component } from 'react';

//import '../Dropdown.css';


class Dropdown extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value : " "
			
		}

	}


	/*handleChange(event) {
		alert("You clicked " + event.target.value)
		this.state.currVal = event.target.value;


	}*/


	render() {
		return (
			<div>
			<select onChange={(e) => this.setState({ value: e.target.value})}>
			{this.props.opts.map((opt) => (
    				<option className={opt.value} value={opt.value}> {opt.value} </option>
    		))}
			</select>

			<p> Show me the {this.state.value} graph</p>
			</div>
			);
	}
}

export default Dropdown