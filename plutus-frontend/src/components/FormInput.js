import React, { Component } from 'react';

class FormInput extends Component {
    constructor(props) {
      super(props);
      this.state = {
        jobLevel: '',
        minSalary:'',
        keywords:'',
        companyMatches: [],
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    };



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


    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.jobLevel + this.state.minSalary +this.state.keywords);
      event.preventDefault();
      const data = new FormData(event.target);
      const fetchAndLog = async () => {
        const response = await fetch('https://facebook.github.io/react-native/movies.json',{
          method: 'POST',
          body: data,

        });
        const json = await response.json();
        // just log ‘json’
      fetchAndLog();
      }
    }


    render() {
      const { companyMatches } = this.state

      return (
        <div>
          <form onSubmit={this.onSubmit}>
            <label>
              Job Level:
              <input type="text" name="jobLevel" onChange={this.handleChange} />
            </label>
            <label>
              Minimum Salary:
              <input type="text" name="minSalary" onChange={this.handleChange} />
            </label>
            <label>
              Comma Separated Keyword Search:
              <input type="text" name="keywords" onChange={this.handleChange} />
            </label>
            <button onClick={(e) => this.onSubmit(e)}>Send</button>
          </form>

          <ul>
            {companyMatches.map( (listItem) => {
              return <li>{listItem._source.CompanyName}</li>
            }
            )}
          </ul>
        </div>
      );
    }
  }

export default FormInput
