import React, { Component } from "react";

export default class CreateEventFrom extends Component {
  render() {
    return (
      <div>
        <h3>Add a Event</h3>
        <form onSubmit={this.props.onSubmit}>
          <input
            placeholder="Event name"
            type="text"
            value={this.props.values.eventName}
            onChange={this.props.onChange}
            name="eventName"
          ></input>
          <input
            placeholder="description"
            type="text"
            value={this.props.values.description}
            onChange={this.props.onChange}
            name="description"
          ></input>
          <input
            placeholder="Picture URL"
            type="text"
            value={this.props.values.pictureUrl}
            onChange={this.props.onChange}
            name="pictureUrl"
          ></input>
          <input
            placeholder="Starting date"
            type="date"
            value={this.props.values.startingDate}
            onChange={this.props.onChange}
            name="startingDate"
          ></input>
          <input
            placeholder="End date"
            type="date"
            value={this.props.values.endDate}
            onChange={this.props.onChange}
            name="endDate"
          ></input>

          <button type="submit">Add Event</button>
        </form>
      </div>
    );
  }
}
