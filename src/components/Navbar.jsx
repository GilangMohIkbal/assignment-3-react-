import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/hacktiv8.png";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <a href="#">
          <img style={{ marginRight: "0.75rem", width: "90px" }} src={logo} />
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#targetModal-item"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="modal-item modal fade"
          id="targetModal-item"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="targetModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content bg-white border-0">
              <div
                className="modal-header border-0"
                style={{ padding: "2rem", paddingBottom: 0 }}
              >
                <a className="modal-title" id="targetModalLabel">
                  <img
                    style={{ marginTop: "0.5rem" }}
                    src="http://api.elements.buildwithangga.com/storage/files/2/assets/Header/Header2/Header-2-5.png"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div
                className="modal-body"
                style={{ padding: "2rem", paddingTop: 0, paddingBottom: 0 }}
              >
                <ul className="navbar-nav responsive me-auto mt-2 mt-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/experience">
                      Experience
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/skills">
                      Skills
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/interest">
                      Interest
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/awards">
                      Awards
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/experience">
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/interest">
                Interest
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/awards">
                Awards
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
