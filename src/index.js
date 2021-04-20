import { StrictMode } from "react";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Index from "./screen/home";
import Navibar from "./component/Navbar";
import Routes from "./routing/routes";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Switch>
        <Switch>
          {/* <Routes /> */}
          <Redirect to="/home" />
          <Redirect from="/" to="/home" />
        </Switch>
      </Switch>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import Routes from "./routing/routes";
// // import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// // import '../node_modules/bootstrap/dist/js/bootstrap';
// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   rootElement
// );
