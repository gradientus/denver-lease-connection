import React from "react";
import "./style.css";

const Navbar = () => {
<<<<<<< HEAD
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-primary bg-dark">
        <a className="navbar-brand text-warning" href="/">
          Denver Lease Connection
        </a>
      </nav>
    </div>
  );
=======
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-primary bg-dark">
                <a className="navbar-brand text-warning" href="/">Denver Lease Connection</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active text-primary" href="/">Home <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link text-primary" href="#">Login</a>
                        <a className="nav-item nav-link text-primary" href="#">Sign-up</a>
                        <a className="nav-item nav-link text-primary" href="/landlordList">Listings</a>
                        <a className="nav-item nav-link text-primary" href="/applicants">Applicants</a>
                    </div>
                </div>
            </nav>
        </div>
    );
>>>>>>> e3fb8d19ed220888ee9042cc7298f893d8083f2f
};

export default Navbar;
