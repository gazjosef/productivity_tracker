import React, { Component, Fragment } from 'react';

// LAYOUT
import CheckInTimeChart from '../../Layout/CheckInTimeChart';
import CompletionRateChart from '../../Layout/CompletionRateChart';
import DailyPerformanceChart from '../../Layout/DailyPerformanceChart';

class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData,
    };
  }

  componentWillMount() {
    this.getChartData();
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
        <header id="main-header" className="py-2 bg-primary text-white">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>
                  <i className="fas fa-chart-bar"></i> Progress
                </h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="card mt-3">
                <div className="card-header">
                  <h4>Latest Habits</h4>
                </div>
                <div className="card-body"></div>
              </div>
              <div className="card mt-3">
                <div className="card-header">
                  <h4>This Week</h4>
                </div>
                <div className="card-body"></div>
              </div>
              <div className="card mt-3">
                <div className="card-header">
                  <h4>Completion Rates</h4>
                </div>
                <div className="card-body">
                  <CompletionRateChart
                    chartData={this.state.chartData}
                    location="Australia"
                    legendPosition="bottom"
                  />
                </div>
              </div>
              <div className="card mt-3">
                <div className="card-header">
                  <h4>Check-In Time</h4>
                </div>
                <div className="card-body">
                  <CheckInTimeChart
                    chartData={this.state.chartData}
                    location="Australia"
                    legendPosition="bottom"
                  />
                </div>
              </div>
              <div className="card mt-3">
                <div className="card-header">
                  <h4>Daily Performance</h4>
                </div>
                <div className="card-body">
                  <DailyPerformanceChart
                    chartData={this.state.chartData}
                    location="Australia"
                    legendPosition="bottom"
                  />
                </div>
              </div>
              <div className="card mt-3">
                <div className="card-header">
                  <h4>Yearly Performance</h4>
                </div>
                <div className="card-body"></div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Progress;
