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
    // window.location.href = "/post";
  };
  render() {
    return (
      <div class="container">
        <br />
        <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-4">
              <h1>All Posts</h1>
            </div>
            <div className="col-sm-6"></div>
            <div className="col-sm-2">
              <button type="button" className="btn btn-success float-right">
                + New Post
              </button>
            </div>
          </div>
        </div>
        <hr />
        <main role="main">
          <h2>Amazon Kendra</h2>
          <small> Written by Guru Kannan on 2021-02-02 23:18:18.254554</small>
          <br />
          <br />
          <p style="white-space:pre-wrap">
            Amazon Kendra is an intelligent search service powered by machine
            learning. Kendra reimagines enterprise search for your websites and
            applications so your employees and customers can easily find the
            content they are looking for, even when it’s scattered across
            multiple locations and content repositories within your
            organization.
          </p>
        </main>
      </div>
    );
  }
}

export default Post;
