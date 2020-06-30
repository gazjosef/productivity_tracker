import React, { Component, Fragment } from 'react';
import Chart from './Chart';

class DailyPerformance extends Component {
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
