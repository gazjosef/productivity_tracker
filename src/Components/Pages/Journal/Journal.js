import React, { Fragment } from 'react';

import Sidebar from '../../Layout/Sidebar';
import { Calendar } from '../../Layout/Calendar/Calendar';

export const Journal = () => {
  return (
    <Fragment>
      <header id="main-header" className="py-2 bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>
                <i className="fas fa-pencil-alt"></i> Journal
              </h1>
            </div>
          </div>
        </div>
      </header>
      <section id="track">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <Calendar className="mt-3" />
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
