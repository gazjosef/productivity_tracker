import React, { Fragment } from "react";

const Actions = () => {
  return (
    <Fragment>
      <section id="actions" className="py-4 mb-4 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <a
                // eslint-disable-next-line
                href="/#"
                className="btn btn-success btn-block"
                data-toggle="modal"
                data-target="#addPostModal"
              >
                <i className="fas fa-plus"></i> Add Positive
              </a>
            </div>
            <div className="col-md-3">
              <a
                // eslint-disable-next-line
                href="/#"
                className="btn btn-danger btn-block"
                data-toggle="modal"
                data-target="#addCategoryModal"
              >
                <i className="fas fa-plus"></i> Add Negative
              </a>
            </div>
            <div className="col-md-3">
              <a
                // eslint-disable-next-line
                href="/#"
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
    </Fragment>
  );
};

export default Actions;
