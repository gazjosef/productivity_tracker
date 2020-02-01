import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-0">
        <div className="container">
          <a href="index.html" className="navbar-brand">
            Habit Tracker
          </a>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="navbarCollapse" className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item nav-link px-2">
                <Link to="/journal" style={{ textDecoration: "none" }}>
                  Journal
                </Link>
              </li>
              <li className="nav-item nav-link px-2">
                <Link to="/goals" style={{ textDecoration: "none" }}>
                  Goals
                </Link>
              </li>
              <li className="nav-item nav-link px-2">
                <Link to="/progress" style={{ textDecoration: "none" }}>
                  Progress
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown mr-3">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  <i className="fas fa-user"></i>
                  Welcome Gareth
                </a>
                <div className="dropdown-menu">
                  <a href="profile.html" className="dropdown-item">
                    <i className="fas fa-user-circle"></i> Profile
                  </a>
                  <a href="settings.html" className="dropdown-item">
                    <i className="fas fa-cog"></i> Settings
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a href="login.html" className="nav-link">
                  <i className="fas fa-user-times"></i> Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
