import React, { Fragment } from "react";

import Sidebar from "../../Layout/Sidebar/Sidebar";
import Calendar from "../../Layout/Calendar/Calendar";

const Journal = () => {
  return (
    <Fragment>
      <header id="main-header" class="py-2 bg-primary text-white">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1>
                <i class="fas fa-pencil-alt"></i> Journal
              </h1>
            </div>
          </div>
        </div>
      </header>
      <section id="track">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <Calendar />
            </div>
            <div className="col-md-3">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Journal;
