import React, { Component } from "react";

import LOGO from "../component/image/logo.jpg";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  NavigateScreen = () => {
    window.location.href = "/post";
  };
  render() {
    return (
      <React.Fragment>
        <div class="container">
          <br />
          <h1>Home Page</h1>
          <br />
          <main role="main">
            <div class="jumbotron">
              <div class="col-sm-8 mx-auto">
                <img
                  src={LOGO}
                  style={{
                    borderRadius: "50%",
                    width: 200,
                    height: 200,
                    marginLeft: 0
                  }}
                />
                <h1>Welcome</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p>
                  Go visit us at our{" "}
                  <a href="https://example.com/">dummy website</a> to check out
                  what we do as an organization. Have a good day!{" "}
                </p>
                <p>
                  <button
                    class="btn btn-primary"
                    type="button"
                    onClick={() => {
                      this.NavigateScreen();
                    }}
                  >
                    Go To Posts &raquo;
                  </button>
                </p>
              </div>
            </div>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default Post;
