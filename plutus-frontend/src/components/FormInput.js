import React, { Component } from 'react';

class FormInput extends Component {
    constructor(props) {
      super(props);
      this.state = {JobLevel: '',
                    MinSalary:'',
                    Keywords:''}      
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
          const FormData = {
            JobLevel: this.state.JobLevel,
            MinSalary:this.state.MinSalary,
            Keywords: this.state.Keywords
          }
          console.log(FormData)
      
            {/* -----------you would send data to API to get results, I used database for ease, this also clears the form on submit----------------*/}
            fetch('/api/form-submit-url', {
              method: 'POST',
              body: FormData,
            });

      }

  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.JobLevel + this.state.MinSalary +this.state.Keywords);
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
      return (
        <form onSubmit={this.onSubmit}>
          <label>
            Job Level:
            <input type="text" name="JobLevel" onChange={this.handleChange} />
          </label>
          <label>
            Minimum Salary:
            <input type="text" name="MinSalary" onChange={this.handleChange} />
          </label>
          <label>
            Comma Separated Keyword Search:
            <input type="text" name="Keywords" onChange={this.handleChange} />
          </label>
          <button onClick={(e) => this.onSubmit(e)}>Send</button>         
        </form>
      );
    }
  }

export default FormInput