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

	    var uniquePositions =[];
		var uniquePositionsDisplayNames = [];

		for (var i in jsonData) {
			var jsonEntry = jsonData[i];
			if (!uniqueCompanies.includes(jsonEntry.companyName)) {
			  var companyNameSplit = jsonEntry.companyName.split(/(?=[A-Z])/);
			  companyNameSplit[0] = companyNameSplit[0].charAt(0).toUpperCase() + companyNameSplit[0].substring(1);


			  uniqueCompanies.push(jsonEntry.companyName);

		}
		if (!uniquePositions.includes(jsonEntry.positionTitle)) {
			var positionNameSplit = jsonEntry.positionTitle.split(/(?=[A-Z])/);
			positionNameSplit[0] = positionNameSplit[0].charAt(0).toUpperCase() + positionNameSplit[0].substring(1);


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
			  value:company,
			};
			companyOpts.push(item);

		  }

		  for (var i in uniquePositions) {
			var position = uniquePositions[i];
			var item = {
			  id:i,
			  value:position,
			};
			positionOpts.push(item);

		  }
	    this.state = {
	    	opts: []
	    };

	    if (this.props.type == "Company") {
	    	this.state = {
				opts: companyOpts,
				name:"Company"
	    	};
	    }

	    if (this.props.type == "Position") {
	    	this.state = {
				opts: positionOpts,
				name:"Position"
	    	};
	    }

	    if (this.props.type == "NumCharts") {
	    	this.state = {
	    		opts: [
				      {
				        id:1,
						value: "1",
						displayName:"1"
				      },
				      {
				        id:2,
						value: "2",
						displayName:"2"

				      },
				      {
				        id:3,
						value: "3",
						displayName:"3"

				      },
				      {
				        id:4,
						value: "4",
						displayName:"4"

				      },
				      ]
	    	};
	    }

	    console.log(this.props);
	    console.log(this.state.opts);

	}
}


	doCallback(a){
	   this.props.callback(this.state.value);
    }

    handleChange(e) {
    	this.setState({value: e.target.value}, this.props.callback(e.target.value))
	}



	render() {
		return (
			<div>
			<p><b> {this.state.name} </b></p>
			<select onChange={(e) => this.handleChange(e)}>
			{this.state.opts.map((opt) => (
    				<option className={opt.value} value={opt.value}> {opt.displayName} </option>
    		))}
			</select>

			</div>
			);
	}
}

export default Dropdown
