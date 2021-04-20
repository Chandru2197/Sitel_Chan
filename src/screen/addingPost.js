import React, { Component } from "react";

import LOGO from "../component/image/logo.jpg";

class AddingPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      title: "",
      author: "",
      content: ""
    };
  }
  NavigateScreen = () => {
    // window.location.href = "/post";
  };
  handleChange = async (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div class="container">
        <br />
        <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-4">
              <h1>New Post</h1>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-6">
            <h2>Create New Blog Post:</h2>
          </div>
        </div>
        <label for="title">Title:</label>
        <input
          class="form-control"
          required="required"
          type="text"
          name="title"
          id="title"
          placeholder="Enter Title"
          aria-label="Enter Title"
          onChange={(e) => {
            this.handleChange(e);
          }}
          value={this.state.title}
        />
        <br />
        <label for="title">Author:</label>
        <input
          class="form-control"
          required="required"
          type="text"
          name="author"
          id="author"
          placeholder="Enter Author"
          aria-label="Enter Author"
          onChange={(e) => {
            this.handleChange(e);
          }}
          value={this.state.author}
        />
        <br />
        <label for="title">Post:</label>
        <textarea
          class="form-control"
          required="required"
          name="content"
          id="content"
          placeholder="Enter Content"
          aria-label="Enter Content"
          rows="3"
          onChange={(e) => {
            this.handleChange(e);
          }}
          value={this.state.content}
        ></textarea>
        <br />
        <button type="button" className="btn btn-success">
          Post
        </button>
        <hr />
      </div>
    );
  }
}

export default AddingPost;
