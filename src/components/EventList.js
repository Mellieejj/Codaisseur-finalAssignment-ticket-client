import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

export default class EventList extends Component {
  render() {
    const today = new Date();

    const currentList = this.props.events.filter(event => {
      const startDate = new Date(event.startingDate);
      return startDate >= today;
      // return moment(event.startingDate).format("ll") >= moment(today).format("ll");
    });

    const list = currentList.map(event => {
      return (
        <div key={event.id}>
          <Link to={`/events/${event.id}`}>
            <img src={event.pictureUrl} alt="" />
            <h3>{event.name}</h3>
          </Link>
          <p>
            Date: {moment(event.startingDate).format("LL")}{" "}
            {event.endDate !== event.startingDate
              ? "- " + moment(event.endDate).format("LL")
              : null}
          </p>
          <p>{event.description}</p>
        </div>
      );
    });
    return <div>{list}</div>;
  }
}
