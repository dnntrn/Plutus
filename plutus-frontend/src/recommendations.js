import React, { Component } from 'react';
import logo from './resources/logo.svg';
import './css/Recommendations.css';
import NavBar from './components/NavBar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import SearchResultBox from './components/SearchResultBox'


class Recommendations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiResponse: '',
      jobRole:'softwareEngineer',
      jobLevel:'entryLevel',
      location:'',
      minSalary:0,
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
        jobRole: this.state.jobRole,
        jobLevel: this.state.jobLevel,
        location: this.state.location,
        minSalary:this.state.minSalary,
        keywords: this.state.keywords
      }

      console.log(formData)

      const jobRole = formData.jobRole

      let city
      let state
      if (formData.location.length > 0) {
        const locationArr = formData.location.split(", ");
        city = locationArr[0]
        state = locationArr[1]
      } else {
        city = formData.location
        state = formData.location
      }


      let queryString = "/recommendations/?jobLevel=" + formData.jobLevel + "&minSalary=" + formData.minSalary  + "&jobRole=" + jobRole

      if (city.length > 0) {
        queryString = queryString + "&city=" + city
      }

      if (state.length > 0) {
        queryString = queryString + "&state=" + state
      }

      if (formData.keywords.length > 0) {
        queryString = queryString + "&keywords=" + formData.keywords
      }

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
            <h3>Search here:</h3>
            <Form>
              <Form.Group controlId="">
                <Form.Label>Position:</Form.Label>
                <Form.Control as="select" name="jobRole" onChange={this.handleChange}>
                  <option value= "softwareEngineer">Software Engineer</option>
                  <option value= "productDesigner">Product Designer</option>
                  <option value= "engineeringManager">Engineering Manager</option>
                  <option value= "productManager">Product Manager</option>
                  <option value= "dataScientist">Data Scientist</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Job Level:</Form.Label>
                <Form.Control as="select" name="jobLevel" onChange={this.handleChange}>
                  <option value= "entryLevel">entry level (0-3 yrs experience)</option>
                  <option value= "midLevel">mid level (3-6 yrs experience)</option>
                  <option value= "seniorLevel">senior level (6+ yrs experience)</option>
                  <option value= "management">management</option>
                  <option value= "upperManagement">upper management</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Preferred Position Location</Form.Label>
                <Form.Control type="text" name="location" onChange={this.handleChange} />
                <Form.Text className="inputInfo">
                  Format: City, State
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Minimum Desired Salary</Form.Label>
                <Form.Control type="text" name="minSalary" onChange={this.handleChange} />
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Company Keyword Search</Form.Label>
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
            <Row>
            {companyMatches.map(listItem => 
               <SearchResultBox style={{marginRight: "5%", marginBottom:"15px"}} companyName= {listItem._source.CompanyName} position = {listItem._source.Position}/>
            )}
            </Row>

          </div>
        </div>
      </div>
    );
  }

}

export default Recommendations;
