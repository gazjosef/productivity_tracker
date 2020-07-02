import React, { Fragment } from "react";

const Header = () => {
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
    </Fragment>
  );
};

export default Header;
