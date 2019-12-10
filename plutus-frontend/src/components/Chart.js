import React, {Component} from 'react';

import {Line, Bar} from 'react-chartjs-2';


class Chart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dummydata: {

				default: {
					labels: ['Mar 2019', 'Apr 2019', 'May 2019', 'Jun 2019', 'Jul 2019'],
					datasets: [
						{
							label: "Salary",
							data: [
								0,
								0,
								0,
								0,
								0
							]
						}					]
				},
				Microsoft: {
					labels: ['Mar 2019', 'Apr 2019', 'May 2019', 'Jun 2019', 'Jul 2019'],
					datasets: [
						{
							label: "Salary",
							data: [
								100000,
								90000,
								80000,
								95000,
								110000
							]
						}					]
				},
				Google: {
					labels: ['Mar 2019', 'Apr 2019', 'May 2019', 'Jun 2019', 'Jul 2019'],
					datasets: [
						{
							label: "Salary",
							data: [
								75000,
								90000,
								120000,
								85000,
								100000

							]
						}
					]
				},
				Facebook: {
					labels: ['Mar 2019', 'Apr 2019', 'May 2019', 'Jun 2019', 'Jul 2019'],
					datasets: [
						{
							label: "Salary",
							data: [
								100000,
								90000,
								98678,
								180000,
								100000

							]
						}
					]
				},
				Lyft: {
					labels: ['Mar 2019', 'Apr 2019', 'May 2019', 'Jun 2019', 'Jul 2019'],
					datasets: [
						{
							label: "Salary",
							data: [
								99999,
								98000,
								120000,
								100000,
								85000
								

							]
						}
					]
				},
				Amazon: {
					labels: ['Mar 2019', 'Apr 2019', 'May 2019', 'Jun 2019', 'Jul 2019'],
					datasets: [
						{
							label: "Salary",
							data: [
								27000,
								73482,
								111111,
								85000,
								90000

							]
						}
					]
				},
				options: {
					  scales: {
					    yAxes: [{
					      scaleLabel: {
					        display: true,
					        labelString: 'Average Salary'
					      },
					      ticks: {min:0,}
					    }],
					    xAxes: [{
					      scaleLabel: {
					        display: true,
					        labelString: 'Month'
					      }
					    }],
					  }     
					}
				
			}
		}

	}

	render() {
		let working_set = this.state.dummydata.default;

		if (this.props.company == "Microsoft") {
			working_set = this.state.dummydata.Microsoft
		}
		if (this.props.company == "Google") {
			working_set = this.state.dummydata.Google
		}
		if (this.props.company == "Facebook") {
			working_set = this.state.dummydata.Facebook
		}
		if (this.props.company == "Amazon") {
			working_set = this.state.dummydata.Amazon
		}
		if (this.props.company == "Lyft") {
			working_set = this.state.dummydata.Lyft
		}

		// <p> Company inside the chart: {this.props.company} </p>
		// <p> Level inside the chart: {this.props.level} </p>
		// <p> Test {this.state.temp} </p>
		return (
			<div className="chart">
				<Line data={working_set} options={this.state.dummydata.options}/>
			</div>

		);

	}


}

export default Chart;
