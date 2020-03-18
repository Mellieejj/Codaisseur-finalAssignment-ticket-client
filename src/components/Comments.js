import React, { Component } from "react";
import "./style/TicketDetails.css";

export default class Comments extends Component {
  render() {
    if (this.props.ticket.comments) {
      const commentList = this.props.ticket.comments.map(comment => {
        return <li key={comment.id}>{comment.text}</li>;
      });
      return (
        <div className="commentList">
          <h3>Comments</h3>
          <ul>{commentList}</ul>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}
