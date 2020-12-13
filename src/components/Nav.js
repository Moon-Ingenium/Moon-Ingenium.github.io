import React from "react";
import { Link } from "react-router-dom";
import "./components.css";


function Nav (props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link className="navbar-brand" to="/" id="name">
            Michelle Moon
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className={
                    window.location.pathname === "/" || window.location.pathname === "/about"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Welcome
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/portfolio"
                  className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    }
    

export default Nav;