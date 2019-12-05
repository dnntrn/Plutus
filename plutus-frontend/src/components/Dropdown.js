import React, { Component } from 'react';

//import '../Dropdown.css';


class Dropdown extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value : " "
		}

	}

	doCallback(a) {
       this.props.callback(this.state.value);
    }

    handleChange(e) {
    	this.setState({value: e.target.value});
    	this.props.callback(e.target.value);
    	
    }
	


	render() {
		return (
			<div>
			<p><b> {this.props.type} </b></p>
			<select onChange={(e) => this.handleChange(e)}>
			{this.props.opts.map((opt) => (
    				<option className={opt.value} value={opt.value}> {opt.value} </option>
    		))}
			</select>

			{/*<p> Show me the {this.state.value} graph</p>*/}
			
			</div>
			);
	}
}

export default Dropdown