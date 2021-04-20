import React, { Component } from "react";
import Routing from "./routing/routes";

class App extends Component {
  async componentWillMount() {
    // let ips = await CmsContent.getIP();
    // if (ips) {
    //   localStorage.setItem("IP", ips.data.ip);
    //   localStorage.setItem("IPTime", ips.data.time);
    // }
  }
  render() {
    return (
      <React.Fragment>
        <Routing />
      </React.Fragment>
    );
  }
}

export default App;
