import React, { Component } from "react";

export default class AddCommentForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <h3>Add a Comment</h3>
          <textarea
            placeholder="Comment"
            type="text"
            value={this.props.values.text}
            onChange={this.props.onChange}
            name="text"
          />
          <br />
          <button type="submit">Add Comment</button>
        </form>
      </div>
    );
  }
}
