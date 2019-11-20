import React from "react";
import "./style.css";

const index = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-primary bg-dark">
        <a className="navbar-brand text-warning" href="/renter">
          <img
            src="./logo.png"
            width="40"
            height="32"
            className="d-inline-block align-top"
            alt=""
          />
          Denver Lease Connection
        </a>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link text-white" href="/renter">
              See Properties
            </a>
            <a className="nav-item nav-link text-white" href="/renterapp">
              Renter Application
            </a>
            <a className="nav-item nav-link text-white" href="/auth/logout">
              Logout
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default index;

//TODO: add the correct routes for the properties
