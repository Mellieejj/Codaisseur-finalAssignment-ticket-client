import React, { Component } from "react";
import "./style/AddTicketForm.css";

export default class AddTicketForm extends Component {
  render() {
    return (
      <div className="addTicket">
        <form onSubmit={this.props.onSubmit}>
          <h3>{this.props.buttonName} a Ticket</h3>
          <input
            placeholder="price"
            type="number"
            value={this.props.values.price}
            onChange={this.props.onChange}
            name="price"
          ></input>
          <input
            placeholder="description"
            type="text"
            value={this.props.values.description}
            onChange={this.props.onChange}
            name="description"
          ></input>
          <input
            placeholder="Picture of ticket URL"
            type="text"
            value={this.props.values.pictureUrl}
            onChange={this.props.onChange}
            name="pictureUrl"
          ></input>

          <button type="submit">{this.props.buttonName} Ticket for {this.props.event.name}</button>
        </form>
      </div>
    );
  }
}
