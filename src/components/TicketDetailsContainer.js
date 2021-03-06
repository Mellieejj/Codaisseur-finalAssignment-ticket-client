import React, { Component } from "react";
import { connect } from "react-redux";
import { loadTicket, getTickets } from "../actions/ticketActions";
import { loadEvent } from "../actions/eventActions";
import { getComments } from "../actions/commentActions";
import { getUsers } from "../actions/userActions";
import TicketDetails from "./TicketDetails";
import AddCommentsFormContainer from "./AddCommentsFormContainer";
import Comments from "./Comments";

class TicketDetailsContainer extends Component {
  componentDidMount() {
    this.props.loadEvent(this.props.match.params.eventId);
    this.props.loadTicket(this.props.match.params.ticketId);
    this.props.getTickets();
    this.props.getComments();
    this.props.getUsers();
  }

  render() {
    return (
      <div>
        <TicketDetails
          ticket={this.props.ticket}
          user={this.props.user}
          event={this.props.event}
          tickets={this.props.tickets}
          errors={this.props.errors}
          users={this.props.users}
        />
        <div className="comments">
          {this.props.user.jwt ? (
            <AddCommentsFormContainer ticket={this.props.ticket} />
          ) : null}

          <Comments
            ticket={this.props.ticket}
            comments={this.props.comments}
            user={this.props.user.name}
            users={this.props.users}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    users: state.users,
    event: state.event,
    ticket: state.ticket,
    comments: state.comments,
    tickets: state.tickets,
    errors: state.errors,
  };
}

const mapDispatchToProps = {
  loadTicket,
  loadEvent,
  getTickets,
  getComments,
  getUsers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketDetailsContainer);
