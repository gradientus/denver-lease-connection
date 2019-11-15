import React from "react";

const index = () => {
  return (
    <div className="fixed-bottom">
      <footer className="footer text-light bg-dark">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-4 col-lg-4 text-center "></div>
            <div className="col-md-4 col-lg-4 text-center">
              <sup>
                {" "}
                <i className="far fa-copyright fa-xs"></i>
              </sup>
              Denver Lease Connection
            </div>

            <div className="col-md-4 col-lg-4 text-center ">
              <a
                className="li-ic"
                href="https://github.com/gradientus/denver-lease-connection"
                target="_blank"
              >
                <i className="fab fa-github fa-2x text-white"></i>
              </a>
            </div>
          </div>

          {/* <div className="col-md-6 col-lg-7 text-center text-md-right">
            <a
              className="li-ic"
              href="https://github.com/gradientus/denver-lease-connection"
              target="_blank"
            >
              <i className="fab fa-github white-text mr-4"></i>
            </a>
          </div> */}
        </div>
      </footer>
    </div>
  );
};

export default index;
