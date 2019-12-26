import React, { Component } from 'react';
import './styles/NavBar.styles.css';
import Button from "react-bootstrap/Button";
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			companyName: '',
			positionTitle: 'softwareEngineer',
			positionLevel: 'entryLevel',
			hireYear: '',
			experience: '',
			positionLocation: '',
			gradYear: '',
			salary: 0,
			degreeLevel: 'bachelors',
		}

		this.toggleModal = this.toggleModal.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

	onSubmit = (e) => {
      e.preventDefault();
      const submitData = {
				companyName: this.state.companyName,
				positionTitle: this.state.positionTitle,
				positionLevel: this.state.positionLevel,
				hireYear: this.state.hireYear,
				experience: this.state.experience,
				positionLocation: this.state.positionLocation,
				gradYear: this.state.gradYear,
				salary: this.state.salary,
				degreeLevel: this.state.degreeLevel,
      }

      console.log(submitData)

			fetch('/addASalary', {
					headers: {
			      'Accept': 'application/json',
			      'Content-Type': 'application/json'
			    },
          method: 'POST',
					body: JSON.stringify(submitData),
      })

			this.toggleModal()
	}


	toggleModal () {
		//this is where you put modal stuffs
		this.setState(prevState => ({
		  showModal: !prevState.showModal
		}))
	}


	render() {

		return (
			<div style={{ backgroundColor:"#FFC762"}}>
				<Navbar bg="#FFC762" >
					<Navbar.Brand href="/">
						<img src={ "/god-of-wealth.png" } style={{height:70}}  alt=""></img>
					</Navbar.Brand>
					<Navbar.Brand href="/" id="nav-brand">
						Plutus
					</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/dashboard">Dashboard</Nav.Link>
						<Nav.Link href="/Recommendations">Recommendations</Nav.Link>
						<Nav.Link href="#" onClick={this.toggleModal}>Add a Salary</Nav.Link>
					</Navbar.Collapse>
				</Navbar>
		<Modal show={this.state.showModal} onHide={this.toggleModal} size="lg" id="salaryModal" aria-labelledby="contained-modal-title-vcenter" centered>
		  <Modal.Header closeButton>
			<Modal.Title>Add Your Salary Info</Modal.Title>
		  </Modal.Header>
		  <Modal.Body>
					  <Form>

						  <Form.Row>
							  <Col>
								  <Form.Group controlId="">
									  <Form.Label>Company Name</Form.Label>
									  <Form.Control type="text" name="companyName" onChange={this.handleChange} />
								  </Form.Group>
								  <Form.Group controlId="">
									  <Form.Label>Position Title</Form.Label>
									  <Form.Control as="select" name="positionTitle" onChange={this.handleChange}>
										  <option value="softwareEngineer">Software Engineer</option>
										  <option value="productDesigner">Product Designer</option>
										  <option value="engineeringManager">Engineering Manager</option>
										  <option value="productManager">Product Manager</option>
										  <option value="dataScientist">Data Scientist</option>
									  </Form.Control>
								  </Form.Group>
								  <Form.Group controlId="">
									  <Form.Label>Position Level</Form.Label>
									  <Form.Control as="select" name="positionLevel" onChange={this.handleChange}>
										  <option value="entryLevel">Entry level (0-3 yrs experience)</option>
										  <option value="midLevel">Mid level (3-6 yrs experience)</option>
										  <option value="seniorLevel">Senior level (6+ yrs experience)</option>
										  <option value="management">Management</option>
										  <option value="upperManagement">Upper management</option>
									  </Form.Control>
								  </Form.Group>
								  <Form.Group controlId="">
									  <Form.Label>Year of Hire</Form.Label>
									  <Form.Control type="number" name="hireYear" onChange={this.handleChange} />
								  </Form.Group>
								  <Form.Group controlId="">
								  <Form.Label>Describe your experience</Form.Label>
								  <Form.Control as="textarea" name="experience" rows="3" onChange={this.handleChange} />
								</Form.Group>
							  </Col>
							  <Col>
								  <Form.Group controlId="">
									  <Form.Label>Position Location</Form.Label>
									  <Form.Control type="text" name="positionLocation" onChange={this.handleChange} />
								  </Form.Group>

								  <Form.Group controlId="">
									  <Form.Label>Salary</Form.Label>
									  <Form.Control type="number" name="salary" onChange={this.handleChange} />
								  </Form.Group>

								  <Form.Group controlId="">
									  <Form.Label>NYU Graduation Year</Form.Label>
									  <Form.Control type="number" name="gradYear" onChange={this.handleChange} />
								  </Form.Group>
								  <Form.Group controlId="">
									  <Form.Label>NYU Graduation GPA</Form.Label>
									  <Form.Control type="number" name="gpa" onChange={this.handleChange} />
								  </Form.Group>
								  <Form.Group controlId="">
									  <Form.Label>Level of Degree Achieved</Form.Label>
									  <Form.Check name="degreeLevel" onChange={this.handleChange} value="bachelors" type="radio" label="bachelors" />
									  <Form.Check name="degreeLevel" onChange={this.handleChange} value="masters" type="radio" label="masters" />
									  <Form.Check name="degreeLevel" onChange={this.handleChange} value="phd" type="radio" label="Ph.D" />
								  </Form.Group>
							  </Col>
						  </Form.Row>

						  <Modal.Footer>
							  <Button style = {{backgroundColor:"crimson", borderColor:"crimson"}} variant="secondary" type="submit" onClick={(e) => this.onSubmit(e)}>
								  Submit
							  </Button>
						  </Modal.Footer>
					  </Form>
				  </Modal.Body>
		</Modal>

			</div>

	  );
	}
}

export default NavBar
