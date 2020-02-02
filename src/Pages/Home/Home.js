import React, { Fragment } from "react";

// Layout
import Calendar from "../../Layout/Calendar/Calendar";
import Sidebar from "../../Layout/Sidebar/Sidebar";

const Home = () => {
  return (
    <Fragment>
      <header id="main-header" className="py-2 bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>
                <i className="fas fa-pencil-alt"></i> Home
              </h1>
            </div>
          </div>
        </div>
      </header>
      <section id="actions" className="py-4 mb-4 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <a
                href="#"
                className="btn btn-success btn-block"
                data-toggle="modal"
                data-target="#addPostModal"
              >
                <i className="fas fa-plus"></i> Add Positive
              </a>
            </div>
            <div className="col-md-3">
              <a
                href="#"
                className="btn btn-danger btn-block"
                data-toggle="modal"
                data-target="#addCategoryModal"
              >
                <i className="fas fa-plus"></i> Add Negative
              </a>
            </div>
            <div className="col-md-3">
              <a
                href="#"
                className="btn btn-warning btn-block"
                data-toggle="modal"
                data-target="#addUserModal"
              >
                <i className="fas fa-plus"></i> Add Neutral
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="track">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              {/* <!-- CALENDAR --> */}
              <Calendar />
              {/* <!-- TRACKER --> */}
              <div className="card">
                <div className="card-header">
                  <h4>Latest Habits</h4>
                </div>
                <div className="card-body">
                  <div className="progress mb-3" style={{ height: "50px;" }}>
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
            <div className="col-md-3">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
