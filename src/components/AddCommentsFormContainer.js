import React, { Component } from "react";
import { connect } from "react-redux";
import { createComment } from "../actions/commentActions";
import AddCommentForm from "./AddCommentForm";

class AddCommentsFormContainer extends Component {
  state = {
    text: "",
    ticketId: "",
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      ticketId: this.props.ticket.id,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.createComment(this.state);
    this.setState({
      text: "",
      ticketId: "",
    });
  };

  render() {
    return (
      <div>
        <AddCommentForm
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          values={this.state}
          user={this.props.user}
          ticket={this.props.ticket}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.jwt,
    event: state.event,
    ticket: state.ticket,
  };
}

export default connect(mapStateToProps, { createComment })(
  AddCommentsFormContainer
);
