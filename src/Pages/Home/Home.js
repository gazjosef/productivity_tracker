import React, { Fragment } from "react";

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
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th colspan="7">
                      <span className="btn-group">
                        <a className="btn">
                          <i className="fas fa-chevron-left"></i>
                        </a>
                        <a className="btn active">February 2012</a>
                        <a className="btn">
                          <i className="fas fa-chevron-right"></i>
                        </a>
                      </span>
                    </th>
                  </tr>
                  <tr>
                    <th>Sun</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="muted">29</td>
                    <td className="muted">30</td>
                    <td className="muted">31</td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                    <td>11</td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>13</td>
                    <td>14</td>
                    <td>15</td>
                    <td>16</td>
                    <td>17</td>
                    <td>18</td>
                  </tr>
                  <tr>
                    <td>19</td>
                    <td className="btn-primary">
                      <strong>20</strong>
                    </td>
                    <td>21</td>
                    <td>22</td>
                    <td>23</td>
                    <td>24</td>
                    <td>25</td>
                  </tr>
                  <tr>
                    <td>26</td>
                    <td>27</td>
                    <td>28</td>
                    <td>29</td>
                    <td className="muted">1</td>
                    <td className="muted">2</td>
                    <td className="muted">3</td>
                  </tr>
                </tbody>
              </table>
              {/* <!-- TRACKER --> */}
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
            <div className="col-md-3">
              <div className="card text-center bg-primary text-white mb-3">
                <div className="card-body">
                  <h3>Positive</h3>
                  <h4 className="display-4">
                    <i className="fas fa-user-plus"></i> 6
                  </h4>
                  <a href="posts.html" className="btn btn-outline-light btn-sm">
                    View
                  </a>
                </div>
              </div>
              <div className="card text-center bg-success text-white mb-3">
                <div className="card-body">
                  <h3>Negative</h3>
                  <h4 className="display-4">
                    <i className="fas fa-user-minus"></i> 4
                  </h4>
                  <a
                    href="categories.html"
                    className="btn btn-outline-light btn-sm"
                  >
                    View
                  </a>
                </div>
              </div>
              <div className="card text-center bg-warning text-white mb-3">
                <div className="card-body">
                  <h3>Neutral</h3>
                  <h4 className="display-4">
                    <i className="fas fa-users"></i> 4
                  </h4>
                  <a href="users.html" className="btn btn-outline-light btn-sm">
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
