import React, { Fragment } from 'react';

export const Sidebar = () => {
  return (
    <Fragment>
      <div className="card text-center bg-primary text-white mt-3">
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
      <div className="card text-center bg-success text-white mt-3">
        <div className="card-body">
          <h3>Negative</h3>
          <h4 className="display-4">
            <i className="fas fa-user-minus"></i> 4
          </h4>
          <a href="categories.html" className="btn btn-outline-light btn-sm">
            View
          </a>
        </div>
      </div>
      <div className="card text-center bg-warning text-white mt-3">
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
    </Fragment>
  );
};
