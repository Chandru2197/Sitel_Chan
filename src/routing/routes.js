import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../component/Navbar";

// Screen
import Home from "../screen/home";
import Post from "../screen/post";

export default class AdminRoutes extends Component {
  render() {
    return (
      <Router>
        <Route
          exact
          path={"/"}
          render={(props) => (
            <React.Fragment>
              <Header />
              <Home {...props} />
            </React.Fragment>
          )}
        />
        <Route
          exact
          path={"/home"}
          render={(props) => (
            <React.Fragment>
              <Header />
              <Home {...props} />
            </React.Fragment>
          )}
        />
        <Route
          exact
          path={"/post"}
          render={(props) => (
            <React.Fragment>
              <Header />
              <Post {...props} />
            </React.Fragment>
          )}
        />
      </Router>
    );
  }
}
