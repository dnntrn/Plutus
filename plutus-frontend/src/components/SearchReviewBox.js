import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card'

class SearchReviewBox extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { companyName, style, position, review, city, state, jobLevel, salary} = this.props
		return (
			<Card bg="light" style={{ width: '18rem', padding:'10px' }, this.props.style}>
			  <Card.Body>
			    <Card.Title>{companyName}</Card.Title>
			    <Card.Subtitle className="mb-2 text-muted">Position: {position} </Card.Subtitle>
					<Card.Subtitle className="mb-2 text-muted">City: {city}</Card.Subtitle>
					<Card.Subtitle className="mb-2 text-muted">State: {state}</Card.Subtitle>
					<Card.Subtitle className="mb-2 text-muted">Job Level: {jobLevel} </Card.Subtitle>
					<Card.Subtitle className="mb-2 text-muted">Salary: {salary} </Card.Subtitle>
			    <Card.Text>
						{review}
			    </Card.Text>
			  </Card.Body>
			</Card>
	  );
	}
}

export default SearchReviewBox
