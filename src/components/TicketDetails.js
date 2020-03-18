import React, { Component } from "react";
import "./style/TicketDetails.css"

export default class TicketDetails extends Component {
  render() {
    console.log("ticket Details", this.props.user);
    return (
   <div>
   <div className="ticketDetails">
      <h3>Ticket for: {this.props.event.name}</h3>
 {this.props.ticket.pictureUrl ? <img src={this.props.ticket.pictureUrl} alt="" /> : null}
      <p>Price: € {this.props.ticket.price}</p>
      <p>Description Ticket: {this.props.ticket.description}</p>
      </div>
     
      </div>
    )}
}
