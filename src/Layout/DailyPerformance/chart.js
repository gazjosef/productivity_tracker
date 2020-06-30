import React, { Component } from 'react';
import { Bar, HorizontalBar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
  }
  render() {
    return (
      <div className="chart">
        <HorizontalBar data={this.state.chartData} options={{}} />
      </div>
    );
  }
}

export default Chart;
