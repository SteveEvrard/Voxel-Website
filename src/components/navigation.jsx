import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a href="#page-top">
            <img style={{width: '150px'}} src="img/image1.png" className="img-responsive" alt="" />
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            {/* <li>
              <a href="#features" className="page-scroll">
                Features
              </a>
            </li> */}
            <li>
              <a href="#page-top" className="page-scroll">
                Overview
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                Platform
              </a>
            </li>
            {/* <li>
              <a href="#portfolio" className="page-scroll">
                Portfolio
              </a>
            </li> */}
            {/* <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li> */}
            <li>
              <a href="#contact" className="page-scroll">
                Get a Demo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
