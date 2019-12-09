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
								60000,
								60000,
								60000,
								60000,
								60000
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

		// <p> Company inside the chart: {this.props.company} </p>
		// <p> Level inside the chart: {this.props.level} </p>
		// <p> Test {this.state.temp} </p>
		return (
			<div className="chart">
				<Line data={working_set}/>
			</div>

		);

	}


}

export default Chart;
