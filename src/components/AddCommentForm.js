import React, { Component } from "react";
import "./style/AddTicketForm.css";

export default class AddCommentForm extends Component {
  render() {
    console.log("user test", this.props.user);
    return (
      <div className="addTicket">
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
