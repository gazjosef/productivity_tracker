import React, { Component, Fragment } from 'react';
import Chart from './Chart';

class DailyPerformance extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {},
    };
  }

  getChartData() {
    // AJAX Calls Here
    this.setState({
      chartData: {
        labels: [
          'Sydney',
          'Melbourne',
          'Brisbane',
          'Perth',
          'Adelaide',
          'Gold Coast',
        ],
        datasets: [
          {
            label: 'Population',
            data: [4627345, 4246375, 2189878, 1896548, 1225235, 591473],
            // backgroundColor: 'green',
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)',
            ],
          },
        ],
      },
    });
  }
  render() {
    return (
      <Fragment>
        <div className="card mt-3">
          <div className="card-header">
            <h4>Daily Performance</h4>
          </div>
          <div className="card-body">
            <Chart legendPosition="bottom" />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default DailyPerformance;
