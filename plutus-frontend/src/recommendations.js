import React, { Component } from 'react';
import './css/Recommendations.css';
import NavBar from './components/NavBar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Footer from './components/Footer';

import SearchReviewBox from './components/SearchReviewBox'
import SearchRecommendationBox from './components/SearchRecommendationBox'


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
      companyReviewMatches: [],
      companyRecommendationMatches: [],
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
          if (data.hits.hits.length > 0) {
            this.setState({companyReviewMatches: data.hits.hits})
            this.setState({companyRecommendationMatches: data.aggregations.group_by_company.buckets})
          } else {
            this.setState({companyReviewMatches: []})
            this.setState({companyRecommendationMatches: []})
          }
        })
        .catch(function(err){
          console.log(err)
        })
    }




  render () {
    const { companyReviewMatches, companyRecommendationMatches } = this.state
    console.log(companyReviewMatches);
    console.log(companyRecommendationMatches)
    return (
      <div className="Recommendations">
        <NavBar activeKey={3}/>
        <div>
        <div id="allContent">

          <h1>What Companies Would be a Fit for You?</h1>

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
                  Please enter a keyword or a phrase.
                </Form.Text>
              </Form.Group>

              <Button style = {{backgroundColor:"#EC9220",borderColor:"#EC9220", color: "#990E23", fontStyle: "italic"}} className ="actionButton" variant="primary" type="submit" onClick={(e) => this.onSubmit(e)}>
                Search
              </Button>
            </Form>

          </div>

          <div id= "recommendationsContent">
            <h2>Here are your company matches:</h2>
            <Row>
            {companyRecommendationMatches.map(listItem =>
               <SearchRecommendationBox style={{marginRight: "5%", marginBottom:"15px"}} companyName= {listItem.key} match= {listItem.avg_score.value} avgSalary= {listItem.average_salary.value}/>
            )}
            </Row>

          </div>

          <div id= "reviewContent">
            <h2>Here are all the reviews:</h2>
            <Row>
            {companyReviewMatches.map(listItem =>
               <SearchReviewBox style={{marginRight: "5%", marginBottom:"15px"}}
                companyName= {listItem._source.CompanyName}
                position = {listItem._source.Position}
                city={listItem._source.city}
                state={listItem._source.state}
                salary= {listItem._source.salary}
                jobLevel={listItem._source.JobLevel}
                review={listItem._source.CompanyDescription}
                />
            )}
            </Row>

          </div>
        </div>

        <Footer style = {{ position: "absolute",
        bottom: "0"}}/>
        </div>
      </div>

    );
  }

}

export default Recommendations;
