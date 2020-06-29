import React, { Component, Fragment } from 'react';

class DailyPerformance extends React.Component {
  componentDidMount() {
    let myChart = document.getElementById('myChart').getContext('2d');
    console.log(myChart);
  }
  render() {
    return (
      <Fragment>
        <div className="card mt-3">
          <div className="card-header">
            <h4>Daily Performance</h4>
          </div>
          <div className="card-body">
            <canvas id="myChart"></canvas>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default DailyPerformance;
