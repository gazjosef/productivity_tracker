import React, { Component, Fragment } from 'react';

export default class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData,
    };
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
              <ProgressBar />
              <ThisWeek />
              <CompletionRate />
              <CheckInTime />
              <DailyPerformance />
              <YearlyPerformance />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
