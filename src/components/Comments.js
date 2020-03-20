import React, { Component } from "react";
import "./style/TicketDetails.css";

export default class Comments extends Component {
  render() {
    // console.log("comments", this.props.ticket.comments);
    const commentArray = this.props.ticket.comments;
    const ticketComments = this.props.comments
      ? this.props.comments.filter(
          comment => comment.ticketId === this.props.ticket.id
        )
      : null;
    const commentList = ticketComments.map(comment => {
      console.log(comment.userId);

      return <li key={comment.id}> {comment.text}</li>;
    });

    return (
      <div className="commentList">
        <h3>Comments</h3>
        {commentArray ? (
          commentArray.length > 0 ? (
            <ul>{commentList}</ul>
          ) : (
            "No Comments yet"
          )
        ) : (
          "Loading.."
        )}
      </div>
    );
  }
}
