import React, { Component } from "react";
import "./style.css";

class index extends Component {
  state = {
    userId: "",
    otherUserId: ""
  };

  async componentDidMount() {
    const results = await axios.get("/api/current_user");
    const userId = results.data.googleId;

    console.log(userId);
    this.setState({ userId: userId });
  }

  render() {
    return (
      <div>
        <button type="button" class="btn btn-primary">
          <i class="fas fa-comment-dots fa-lg"></i>Select
        </button>
      </div>
    );
  }
}

export default index;
