import React from "react";
import "./styles.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
// import { ReactComponent as Logo } from "./logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Navibar() {
  return (
    <React.Fragment>
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="index.html">
            Dummy Blog
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample01"
            aria-controls="navbarsExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarsExample01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/home">
                  Home <span className="sr-only">(current)</span>
                </Link>
                {/* <a class="nav-link" href="/home">
                </a> */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/post">
                  Post
                </Link>
                {/* <a class="nav-link" href="/post">
                  Posts
                </a> */}
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdown01"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Contact Us
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdown01">
                  <a className="dropdown-item" href="https://www.linkedin.com/">
                    Linkedin
                  </a>
                  <a className="dropdown-item" href="https://twitter.com/">
                    Twitter
                  </a>
                  <a className="dropdown-item" href="https://www.facebook.com/">
                    Facebook
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.instagram.com/"
                  >
                    Instagram
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}
