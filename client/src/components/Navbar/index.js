import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-primary bg-dark">
        <a className="navbar-brand text-warning" href="/">
          <img
            src="./logo.png"
            width="40"
            height="32"
            className="d-inline-block align-top"
            alt=""
          />
          Denver Lease Connection
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
