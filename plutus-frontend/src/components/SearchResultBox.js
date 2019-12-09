import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card'

class SearchResultBox extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { companyName, style } = this.props

		return (
			<Card bg="light" style={{ width: '18rem' }, this.props.style}>
			  <Card.Body>
			    <Card.Title>{companyName}</Card.Title>
			    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
			    <Card.Text>
			      EXAMPLE: 72% match with your keywords
			    </Card.Text>
			    <Card.Link href="#">Careers</Card.Link>
			  </Card.Body>
			</Card>
	  );
	}
}

export default SearchResultBox
