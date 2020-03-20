import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
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

    //time of adding ticket 9-17u -10% 17-9u +10%
    const time = this.props.ticket.createdAt
      ? new Date(this.props.ticket.createdAt)
      : null;
    const hours = moment(time).format("Hmm");
    const timeRisk = hours > 900 && hours < 1700 ? -10 : 10;

    //price risk
    const averageprice = this.props.event.tickets
      ? this.props.event.tickets.reduce((acc, curr) => {
          return acc + parseFloat(curr.price);
        }, 0) / this.props.event.tickets.length
      : null;

    const percentageRisk =
      ((averageprice - parseFloat(this.props.ticket.price)) / averageprice) *
      100;
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

    return <p style={{ color: color }}>We calculated that the risk of this ticket being a fraud is {risk.toFixed(1)}%</p>;
  };

  render() {
    const ticketAuthor = this.props.users
      ? this.props.users.find(user => user.id === this.props.ticket.userId)
      : null;

    return (
      <div>
        <div className="ticketDetails">
          <div>
            <p>{this.props.user.jwt ? null : <Link to={"/"}>Login </Link>}</p>{" "}
            <p>
              <Link to={`/events/${this.props.event.id}`}>Back to Event</Link>
            </p>
          </div>
          {/* ticket details */}
          <h3>Ticket for: {this.props.event.name}</h3>
          {this.props.ticket.pictureUrl ? (
            <img src={this.props.ticket.pictureUrl} alt="" />
          ) : null}
          {this.risk()}
          <p>
            Author:{" "}
            {ticketAuthor
              ? ticketAuthor.name[0].toUpperCase() + ticketAuthor.name.substr(1)
              : null}
          </p>
          <p>
            Price: €{" "}
            {this.props.ticket.price
              ? parseFloat(this.props.ticket.price).toFixed(2)
              : null}
          </p>
          <p>Description Ticket: {this.props.ticket.description}</p>

          {/* update ticket */}
          {this.props.user.jwt ? this.props.user.name === ticketAuthor.name ? 
          (
            <button onClick={() => this.onClick()}>Change Ticket</button>
          )
           : null : null }
          {!this.state.update ? null : <UpdateTicketFormContainer />}
          <p
            style={{
              color: "#FF3232",
              backgroundColor: "#FFFFFF",
              fontSize: "large"
            }}
          >
            {this.props.errors ? this.props.errors : null}
          </p>
        </div>
      </div>
    );
  }
}
