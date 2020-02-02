import React, { Fragment } from "react";

// LAYOUT
import ProgressBar from "../../Layout/ProgressBar/ProgressBar";

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
            <ProgressBar />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Progress;
