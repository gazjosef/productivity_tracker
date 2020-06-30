import React, { Component, Fragment } from 'react';
import Chart from './Chart';

class DailyPerformance extends Component {
  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');
    console.log(ctx);
  }
  render() {
    return (
      <Fragment>
        <div className="card mt-3">
          <div className="card-header">
            <h4>Daily Performance</h4>
          </div>
          <div className="card-body">
            <canvas ref="canvas" width={640} height={425}></canvas>
            <Chart />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default DailyPerformance;
