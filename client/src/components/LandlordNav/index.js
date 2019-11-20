import React from "react";
import "./style.css";

const index = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-primary bg-dark">
        <a className="navbar-brand text-warning" href="/landlordList">
          <img
            src="./logo.png"
            width="40"
            height="32"
            className="d-inline-block align-top"
            alt=""
          />
          Denver Lease Connection
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {/* <a className="nav-item nav-link active text-primary" href="/">Home <span className="sr-only">(current)</span></a> */}
            <a className="nav-item nav-link text-white" href="/landlordList">
              Listings
            </a>
            <a className="nav-item nav-link text-white" href="/applicants">
              Applicants
            </a>
            <a className="nav-item nav-link text-white" href="/Chat">
              Chat
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
