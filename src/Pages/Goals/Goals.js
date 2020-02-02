import React, { Fragment } from "react";

// LAYOUT
import Actions from "../../Layout/Actions/Actions";

const Goals = () => {
  return (
    <Fragment>
      <header id="main-header" class="py-2 bg-primary text-white">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1>
                <i class="fas fa-tasks"></i> Goals
              </h1>
            </div>
          </div>
        </div>
      </header>
      <Actions />
    </Fragment>
  );
};

export default Goals;
