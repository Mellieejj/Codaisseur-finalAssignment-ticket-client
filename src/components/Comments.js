import React, { Component } from "react";
import "./style/TicketDetails.css";

export default class Comments extends Component {
  render() {
    const ticketComments = this.props.comments
      ? this.props.comments.filter(
          comment => comment.ticketId === this.props.ticket.id
        )
      : null;

    const commentList = ticketComments.map(comment => {
      const commentUser = this.props.users
        ? this.props.users.find(user => {
            return comment.userId === user.id;
          })
        : null;

      return (
        <li key={comment.id}>
          {" "}
          {commentUser
            ? commentUser.name[0].toUpperCase() + commentUser.name.substr(1)
            : null}{" "}
          says: {comment.text}
        </li>
      );
    });

    return (
      <div className="commentList">
        <h3>Comments</h3>
        <ul>{commentList}</ul>
      </div>
    );
  }
}
