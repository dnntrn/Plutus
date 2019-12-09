import React, { Component } from 'react';
import logo from './resources/logo.svg';
import './css/Recommendations.css';
import NavBar from './components/NavBar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Recommendations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiResponse: '',
      jobLevel: '',
      minSalary:'',
      keywords:'',
      companyMatches: [],
      currJobLevel:null,
      currKeywords:null,
      currMinSalary:null,
      NumCharts:null,
    }
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
      e.preventDefault();
      const formData = {
        jobLevel: this.state.jobLevel,
        minSalary:this.state.minSalary,
        keywords: this.state.keywords
      }

      console.log(formData)

      const queryString = "/recommendations/?jobLevel=" + formData.jobLevel + "&minSalary=" + formData.minSalary + "&keywords=" + formData.keywords

      console.log(queryString)

      fetch(queryString, {
          method: 'GET',
        })
        .then(searchResponse => searchResponse.json())
        .then(data => {
          console.log(data);
          if (data.length > 0) {
            this.setState({companyMatches: data})
            console.log(data[0]._source.CompanyName)
          } else {
            this.setState({companyMatches: []})
          }
        })
        .catch(function(err){
          console.log(err)
        })
    }




  render () {
    const { companyMatches } = this.state

    return (
      <div className="Recommendations">
        <NavBar activeKey={3}/>

        <div id="allContent">
          <div id= "header">
            <h1>What companies Would be a fit for you?</h1>
          </div>

          <div id= "searchBox">
            <Form>
              <Form.Group controlId="">
                <Form.Label>Position:</Form.Label>
                <Form.Control as="select" name="jobRole" onChange={this.handleChange}>
                  <option>Software Engineer</option>
                  <option>Product Designer</option>
                  <option>Engineering Manager</option>
                  <option>Product Manager</option>
                  <option>Data Scientist</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Job Level:</Form.Label>
                <Form.Control as="select" name="jobLevel" onChange={this.handleChange}>
                  <option>entry level (0-3 yrs experience)</option>
                  <option>mid level (3-6 yrs experience)</option>
                  <option>senior level (6+ yrs experience)</option>
                  <option>management</option>
                  <option>upper management</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Minimum Salary</Form.Label>
                <Form.Control type="text" name="minSalary" onChange={this.handleChange} />
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Keyword Search</Form.Label>
                <Form.Control type="text" name="keywords" onChange={this.handleChange} />
                <Form.Text className="inputInfo">
                  Please enter your keywords seperated by commas.
                </Form.Text>
              </Form.Group>

              <Button variant="primary" type="submit" onClick={(e) => this.onSubmit(e)}>
                Search
              </Button>
            </Form>

          </div>

          <div id= "resultContent">
            <ul>
              {companyMatches.map( (listItem) => {
                return <li>{listItem._source.CompanyName}</li>
              }
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }

}

export default Recommendations;
