// import { StrictMode } from "react";
// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// import Index from "./screen/home";
// import Navibar from "./component/Navbar";

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <StrictMode>
//     <BrowserRouter>
//       <Switch>
//         <Switch>
//           <Route
//             path="/index"
//             render={(props) => (
//               <div>
//                 <Navibar />
//                 <Index {...props} />
//               </div>
//             )}
//           />
//           <Redirect to="/index" />
//           <Redirect from="/" to="/index" />
//         </Switch>
//       </Switch>
//     </BrowserRouter>
//   </StrictMode>,
//   rootElement
// );

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap';
ReactDOM.render(<App />, document.getElementById("root"));
