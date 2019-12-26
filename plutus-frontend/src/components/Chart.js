import React, { Component } from 'react';

import { Line, Bar } from 'react-chartjs-2';


class Chart extends Component {
	constructor(props) {
		super(props);
		this.state = {
				options: {
					  scales: {
					    yAxes: [{
					      scaleLabel: {
					        display: true,
					        labelString: 'Average Salary'
					      },
					      ticks: { min:0, max:500000 }
					    }],
					    xAxes: [{
					      scaleLabel: {
					        display: true,
					        labelString: 'Position'
					      }
					    }],
					  }
					}
			}
	}

	render() {
		let levelLabels = ["entryLevel", "midLevel", "seniorLevel"]

		let entryAvg = 0.0
		let midAvg = 0.0
		let seniorAvg = 0.0

		const jsonData = this.props.data

		for (let i = 0; i< jsonData.length; i++) {
			if (jsonData[i].key == "entrylevel") {
				entryAvg = jsonData[i].average_salary.value;
			}

			if (jsonData[i].key == "midlevel") {
				midAvg = jsonData[i].average_salary.value;
			}

			if (jsonData[i].key == "seniorlevel") {
				seniorAvg = jsonData[i].average_salary.value;
			}
		}


		const aveData  = [entryAvg, midAvg, seniorAvg];
		let working_set = {
			labels: levelLabels,
			datasets: [{
				label: "Salary",
				data: aveData,
				backgroundColor: 'rgba(155,13,35,.8)',
			}],

		};
		return (
			<div className="chart">
				<Bar data={working_set} options={this.state.options}/>
			</div>

		);

	}


}

export default Chart;
