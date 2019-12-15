import React, { Component } from 'react';

import './styles/Dropdown.css';

import jsonData from '../averagesTestData.json';

class Dropdown extends Component {
	constructor(props) {
		super(props);
		var blankItem = {
	      id:"-1",
	      value: ""
	    };

	    var uniqueCompanies = [];
	    
	    var uniquePositions =[];

	    for (var i in jsonData) {
	      var jsonEntry = jsonData[i];
	      if (!uniqueCompanies.includes(jsonEntry.companyName)) {
	        uniqueCompanies.push(jsonEntry.companyName);
	      }

	      if (!uniquePositions.includes(jsonEntry.positionTitle)) {
	        uniquePositions.push(jsonEntry.positionTitle);
	      }

	    }


	    var companyOpts = [];
	    companyOpts.push(blankItem);
	    var positionOpts = [];
	    positionOpts.push(blankItem);

	    for (var i in uniqueCompanies) {
	      var company = uniqueCompanies[i];
	      var item = {
	        id:i,
	        value:company
	      };
	      companyOpts.push(item);

	    }

	    for (var i in uniquePositions) {
	      var position = uniquePositions[i];
	      var item = {
	        id:i,
	        value:position
	      };
	      positionOpts.push(item);

	    }

	    this.state = {
	    	opts: []
	    };

	    if (this.props.type == "Company") {
	    	this.state = {
	    		opts: companyOpts
	    	};
	    }

	    if (this.props.type == "Position") {
	    	this.state = {
	    		opts: positionOpts
	    	};
	    }

	    if (this.props.type == "NumCharts") {
	    	this.state = {
	    		opts: [
				      {
				        id:1,
				        value: "1"
				      },
				      {
				        id:2,
				        value: "2"
				      },
				      {
				        id:3,
				        value: "3"
				      },
				      {
				        id:4,
				        value: "4"
				      },
				      ]
	    	};
	    }
	    
	    console.log(this.props);
	    console.log(this.state.opts);

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
			{this.state.opts.map((opt) => (
    				<option className={opt.value} value={opt.value}> {opt.value} </option>
    		))}
			</select>

			{/*<p> Show me the {this.state.value} graph</p>*/}

			</div>
			);
	}
}

export default Dropdown
