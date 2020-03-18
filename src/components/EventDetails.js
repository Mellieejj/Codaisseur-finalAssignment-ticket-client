import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import AddTicketFormContainer from "./AddTicketFormContainer";
import "./style/EventDetails.css";

export default class EventDetails extends Component {
  state = {
    add: false
  };

  onClick = () => {
    if (this.state.add) {
      this.setState({
        add: false
      });
    } else {
      this.setState({
        add: true
      });
    }
  };

  render() {
    if (this.props.event) {
      if (this.props.event.tickets) {
        const tickets = this.props.event.tickets.map(ticket => {
          const image = ticket.pictureUrl ? (
            <img src={ticket.pictureUrl} alt="" />
          ) : null;
          return (
            <Link
              key={ticket.id}
              to={`/events/${this.props.event.id}/${ticket.id}`}
            >
              <li key={ticket.id}>
                {image}
                <p>€{ticket.price.toFixed(2)}</p>
                <p>{ticket.description}</p>
              </li>
            </Link>
          );
        });
        return (
          <div className="eventDetails">
            <div>
              <p>{this.props.user ? null : <Link to={"/"}>Login </Link>}</p>{" "}
              <p>
                <Link to={"/"}>Back to all Events</Link>
              </p>
            </div>
            <h2>{this.props.event.name}</h2>
            <p>
              Date: {moment(this.props.event.startingDate).format("LL")}{" "}
              {this.props.event.endDate !== this.props.event.startingDate
                ? "- " + moment(this.props.event.endDate).format("LL")
                : null}
            </p>
            <p>{this.props.event.description}</p>
            {!this.props.user ? null : (
              <button onClick={() => this.onClick()}>Add Ticket</button>
            )}
            {this.state.add ? <AddTicketFormContainer /> : null}
            <div className="tickets">
              <ul>{tickets}</ul>
            </div>
          </div>
        );
      } else {
        return <div>Loading</div>;
      }
    }
  }
}
