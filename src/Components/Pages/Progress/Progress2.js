import React, { useState } from 'react';

// LAYOUT
import CheckInTimeChart from '../../Layout/CheckInTimeChart';
import CompletionRateChart from '../../Layout/CompletionRateChart';
import DailyPerformanceChart from '../../Layout/DailyPerformanceChart';

export const Progress2 = () => {
  const [chartData, setChartData] = useState('chart data');

  console.log(chartData);
  return (
    <>
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
                  // chartData={this.state.chartData}
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
                  // chartData={this.state.chartData}
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
                  // chartData={this.state.chartData}
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
    </>
  );
};
