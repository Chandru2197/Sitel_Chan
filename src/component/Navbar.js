import React from "react";
import "./styles.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
// import { ReactComponent as Logo } from "./logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Navibar() {
  return (
    <React.Fragment>
      <div>
        <nav class="navbar navbar-dark bg-dark">
          <a class="navbar-brand" href="index.html">
            Dummy Blog
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample01"
            aria-controls="navbarsExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarsExample01">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/index">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/posts">
                  Posts
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="dropdown01"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Contact Us
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdown01">
                  <a class="dropdown-item" href="https://www.linkedin.com/">
                    Linkedin
                  </a>
                  <a class="dropdown-item" href="https://twitter.com/">
                    Twitter
                  </a>
                  <a class="dropdown-item" href="https://www.facebook.com/">
                    Facebook
                  </a>
                  <a class="dropdown-item" href="https://www.instagram.com/">
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
