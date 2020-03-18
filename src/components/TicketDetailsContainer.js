import React, { Component } from "react";
import { connect } from "react-redux";
import { loadTicket } from "../actions/ticketActions";
import { loadEvent } from "../actions/eventActions";
import TicketDetails from "./TicketDetails";
import AddCommentsFormContainer from "./AddCommentsFormContainer";

class TicketDetailsContainer extends Component {
  componentDidMount() {
    // console.log(
    //   "params",
    //   this.props.match.params.eventId,
    //   this.props.match.params.ticketId
    // );
    this.props.loadEvent(this.props.match.params.eventId);
    this.props.loadTicket(this.props.match.params.ticketId);
  }

  render() {
    return (
      <div>
        <TicketDetails
          ticket={this.props.ticket}
          user={this.props.user}
          event={this.props.event}
        />
         <div className="comments">
        <AddCommentsFormContainer user={this.props.user} ticket={this.props.ticket}/>
      </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("state ticket", state.user);
  return {
    user: state.user.jwt,
    event: state.event,
    ticket: state.ticket
  };
}

export default connect(mapStateToProps, { loadTicket , loadEvent })(TicketDetailsContainer);
