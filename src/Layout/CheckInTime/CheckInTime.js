import React, { Fragment } from "react";

const CheckInTime = () => {
  return (
    <Fragment>
      <div className="card">
        <div className="card-header">
          <h4>Check-In Time</h4>
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
    </Fragment>
  );
};

export default CheckInTime;
