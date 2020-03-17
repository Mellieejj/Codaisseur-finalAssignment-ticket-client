import React, { Component } from "react";
import moment from "moment";
import AddTicketFormContainer from "./AddTicketFormContainer";

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
    console.log("user eventDetails", this.props.user);
    
    if (this.props.event) {
      if (this.props.event.tickets) {
        const tickets = this.props.event.tickets.map(ticket => {
          const image = ticket.pictureUrl ? (
            <img src={ticket.pictureUrl} alt="" />
          ) : null;
          return (
            <li key={ticket.id}>
              {image}
              <p>€{ticket.price.toFixed(2)}</p>
              <p>{ticket.description}</p>
            </li>
          );
        });
        return (
          <div>
            <h2>{this.props.event.name}</h2>
            <p>
              Date: {moment(this.props.event.startingDate).format("LL")}{" "}
              {this.props.event.endDate !== this.props.event.startingDate
                ? "- " + moment(this.props.event.endDate).format("LL")
                : null}
            </p>
            <p>{this.props.event.description}</p>
            
              {!this.props.user ? 
                 null : (
                 <button onClick={() => this.onClick()}>Add Ticket</button>
                 )}
               {this.state.add ? <AddTicketFormContainer /> : null }
            
            <ul>{tickets}</ul>
          </div>
        );
      } else {
        return <div>Loading</div>;
      }
    }
  }
}
