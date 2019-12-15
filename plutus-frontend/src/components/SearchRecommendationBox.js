import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card'

class SearchRecommendationBox extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { companyName, style, avgSalary, match } = this.props
		return (
			<Card bg="light" style={{ width: '18rem', padding:'10px' }, this.props.style}>
			  <Card.Body>
			    <Card.Title>{companyName}</Card.Title>
			    <Card.Subtitle className="mb-2 text-muted">Match: {match}</Card.Subtitle>
			    <Card.Text>
			      The average salary for this company is: {avgSalary}
			    </Card.Text>
			  </Card.Body>
			</Card>
	  );
	}
}

export default SearchRecommendationBox
