import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center bg-dark text-light">
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
            <p className="mb-3 mb-md-0">Made with ❤️ by {" "}
              <a  href="https://github.com/akulwritess" className="text-decoration-underline text-light fs-5" target="_blank" rel="noreferrer">Akul Agarwal</a>
            </p>
            <a className="text-light fs-4" href="https://github.com/akulwritess" target="_blank" rel="noreferrer">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
