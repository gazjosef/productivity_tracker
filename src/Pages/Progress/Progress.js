import React, { Fragment } from "react";

const Progress = () => {
  return (
    <Fragment>
      <header id="main-header" class="py-2 bg-primary text-white">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1>
                <i class="fas fa-chart-bar"></i> Progress
              </h1>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="card">
              <div className="card-header">
                <h4>Latest Habits</h4>
              </div>
              <div className="card-body">
                <div className="progress mb-3" style={{ height: "50px" }}>
                  <div
                    className="progress-bar progress-bar-striped bg-success"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="progress mb-3" style={{ height: "50px" }}>
                  <div
                    className="progress-bar progress-bar-striped bg-info"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="progress mb-3" style={{ height: "50px" }}>
                  <div
                    className="progress-bar progress-bar-striped bg-warning"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="progress" style={{ height: "50px" }}>
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Progress;
