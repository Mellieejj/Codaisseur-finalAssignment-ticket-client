import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import AddTicketFormContainer from "./AddTicketFormContainer";
import "./style/EventDetails.css";

export default class EventDetails extends Component {
  state = {
    add: false,
  };

  onClick = () => {
    if (this.state.add) {
      this.setState({
        add: false,
      });
    } else {
      this.setState({
        add: true,
      });
    }
  };

  render() {
    if (this.props.event) {
      if (this.props.event.tickets) {
        const tickets = this.props.tickets.filter(
          (ticket) => ticket.eventId === this.props.event.id
        );
        const eventTickets = tickets.map((ticket) => {
          const image = ticket.pictureUrl ? (
            <img src={ticket.pictureUrl} alt="" />
          ) : null;

          const riskmethod = () => {
            //more than 3 comment + 5% risk
            const commentlength = ticket.comments
              ? ticket.comments.length
              : false;
            const commentRisk = commentlength > 3 ? 5 : 0;

            //user only 1 ticket + 10% risk
            const userArray = this.props.tickets
              ? this.props.tickets.filter(
                  (tick) => tick.userId === ticket.userId
                )
              : null;
            const userRisk = userArray.length === 1 ? 10 : 0;

            //time of adding ticket 9-17u -10% 17-9u +10%
            const time = ticket.createdAt ? new Date(ticket.createdAt) : null;
            const hours = moment(time).format("Hmm");
            const timeRisk = hours > 900 && hours < 1700 ? -10 : 10;

            //price risk
            const averageprice = this.props.event.tickets
              ? this.props.event.tickets.reduce((acc, curr) => {
                  return acc + parseFloat(curr.price);
                }, 0) / this.props.event.tickets.length
              : null;

            const percentageRisk =
              ((averageprice - parseFloat(ticket.price)) / averageprice) * 100;
            const priceRisk = percentageRisk < -10 ? -10 : percentageRisk;

            //total risk
            const totalRisk = commentRisk + userRisk + timeRisk + priceRisk;
            const risk = totalRisk < 5 ? 5 : totalRisk > 95 ? 95 : totalRisk;

            let color = "black";
            if (risk < 30) {
              color = "#97BA28";
            } else if (risk >= 30 && risk <= 55) {
              color = "#FFA500";
            } else {
              color = "#FF3232";
            }

            return (
              <p style={{ color: color }}>
                €{parseFloat(ticket.price).toFixed(2)}
              </p>
            );
          };

          const risk = riskmethod();

          return (
            <Link
              key={ticket.id}
              to={`/events/${this.props.event.id}/tickets/${ticket.id}`}
            >
              <li key={ticket.id}>
                {image}
                {risk}
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
              <ul>{eventTickets}</ul>
            </div>
          </div>
        );
      } else {
        return <div>Loading</div>;
      }
    }
  }
}
