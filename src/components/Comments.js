import React, { Component } from "react";
import "./style/TicketDetails.css";

export default class Comments extends Component {
  render() {
    console.log("comments", this.props.comments);
    
    
      const ticketComments = this.props.comments ? this.props.comments.filter(comment => comment.ticketId === this.props.ticket.id) : null
      const commentList =ticketComments.map(comment => {
        return <li key={comment.id}>{" "}{comment.text}</li>;
      })

      return (
        <div className="commentList">
          <h3>Comments</h3>
          <ul>{commentList}</ul>
        </div>
      );
    
  }
}
