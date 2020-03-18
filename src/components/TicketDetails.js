import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style/TicketDetails.css";
import UpdateTicketFormContainer from "./UpdateTicketFormContainer";

export default class TicketDetails extends Component {
  state = {
    update: false
  };

  onClick = () => {
    if (this.state.update) {
      this.setState({
        update: false
      });
    } else {
      this.setState({
        update: true
      });
    }
  };

  risk = () => {
    //more than 3 comment + 5% risk
    const commentlength = this.props.ticket.comments
      ? this.props.ticket.comments.length
      : false;
    const commentRisk = commentlength > 3 ? 5 : 0;

    //user only 1 ticket + 10% risk
    const userArray = this.props.tickets
      ? this.props.tickets.filter(
          ticket => ticket.userId === this.props.ticket.userId
        )
      : null;
    const userRisk = userArray.length === 1 ? 10 : 0;

    console.log("ticket post time", this.props.ticket.createdAt)
    //total risk
    const risk = commentRisk + userRisk + 5;
    return risk;
  };

  render() {
    // console.log(this.props.ticket.comments)
    return (
      <div>
        <div className="ticketDetails">
          <div>
            <p>{this.props.user ? null : <Link to={"/"}>Login </Link>}</p>{" "}
            <p>
              <Link to={`/events/${this.props.event.id}`}>Back to Event</Link>
            </p>
          </div>
          {/* ticket details */}
          <h3>Ticket for: {this.props.event.name}</h3>
          {this.props.ticket.pictureUrl ? (
            <img src={this.props.ticket.pictureUrl} alt="" />
          ) : null}
          <p>Fraud risk: {this.risk()}%</p>
          <p>
            Price: €{" "}
            {this.props.ticket.price
              ? this.props.ticket.price.toFixed(2)
              : null}
          </p>
          <p>Description Ticket: {this.props.ticket.description}</p>

          {/* update ticket */}
          {!this.props.user ? null : (
            <button onClick={() => this.onClick()}>Change Ticket</button>
          )}
          {!this.state.update ? null : <UpdateTicketFormContainer />}
        </div>
      </div>
    );
  }
}
