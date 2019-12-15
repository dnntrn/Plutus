import React, {Component} from 'react';

import {Line, Bar} from 'react-chartjs-2';

import jsonData from '../averagesTestData.json';


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
					      ticks: {min:0,max:500000}
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

	}

	render() {
		var levelLabels = ["entryLevel", "midLevel", "seniorLevel"];

		var entrySum = 0.0;
		var entryCount = 0;
		var midSum = 0.0;
		var midCount = 0;
		var seniorSum = 0.0;
		var seniorCount = 0;


		for (var i in jsonData) {
			var thisEntry = jsonData[i];
			if (thisEntry.companyName == this.props.company) {
				if (thisEntry.positionTitle == this.props.level) {
					if (thisEntry.positionLevel == "entryLevel") {
						entrySum += thisEntry.averageSalary;
						entryCount++;
					}
					else if (thisEntry.positionLevel == "midLevel") {
						midSum += thisEntry.averageSalary;
						midCount++;
					}
					else if (thisEntry.positionLevel == "seniorLevel") {
						seniorSum += thisEntry.averageSalary;
						seniorCount++;
					}
				}
			}
		}


		var aveEntry = entrySum / entryCount;
		var aveMid = midSum / midCount;
		var aveSenior = seniorSum / seniorCount;

		console.log(entrySum);
		console.log(entryCount);


		var aveData  = [aveEntry, aveMid, aveSenior];

		var working_set = {
			labels: levelLabels,
			datasets: [{
				label: "Salary",
				data: aveData
			}],
	
		};
		// <p> Company inside the chart: {this.props.company} </p>
		// <p> Level inside the chart: {this.props.level} </p>
		// <p> Test {this.state.temp} </p>
		return (
			<div className="chart">
				<Bar data={working_set} options={this.state.dummydata.options}/>
			</div>

		);

	}


}

export default Chart;
