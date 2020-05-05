import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { Button, InputGroup, FormControl } from "react-bootstrap";

import "./style/EventList.css";

export default class EventList extends Component {
  state = {
    currentPage: 1,
    eventsPerPage: 9,
  };

  changePage = (event) => {
    this.setState({
      [event.target.name]: parseInt(event.target.value),
    });
  };

  firstPage = () => {
    if (this.state.currentPage > 1) {
      this.setState({
        ...this.state,
        currentPage: 1,
      });
    }
  };

  prevPage = () => {
    if (this.state.currentPage > 1) {
      this.setState({
        ...this.state,
        currentPage: this.state.currentPage - 1,
      });
    }
  };

  lastPage = () => {
    const today = new Date();
    const futureEvents = this.props.events
      ? this.props.events.filter((event) => {
          const startDate = new Date(event.startingDate);
          return startDate >= today;
        })
      : null;

    if (
      this.state.currentPage <
      Math.ceil(futureEvents.length / this.state.eventsPerPage)
    ) {
      this.setState({
        ...this.state,
        currentPage: Math.ceil(futureEvents.length / this.state.eventsPerPage),
      });
    }
  };

  nextPage = () => {
    const today = new Date();
    const futureEvents = this.props.events
      ? this.props.events.filter((event) => {
          const startDate = new Date(event.startingDate);
          return startDate >= today;
        })
      : null;

    if (
      this.state.currentPage <
      Math.ceil(futureEvents.length / this.state.eventsPerPage)
    ) {
      this.setState({
        ...this.state,
        currentPage: this.state.currentPage + 1,
      });
    }
  };

  render() {
    // future events
    const today = new Date();
    const futureEvents = this.props.events
      ? this.props.events.filter((event) => {
          const startDate = new Date(event.startingDate);
          return startDate >= today;
        })
      : null;

    //sorted by first happening first
    const sortedEvents = [...futureEvents].sort((a, b) => {
      const aDate = new Date(a.startingDate);
      const bDate = new Date(b.startingDate);
      return aDate - bDate;
    });

    //pagination
    const { currentPage, eventsPerPage } = this.state;
    const lastIndex = currentPage * eventsPerPage;
    const firstIndex = lastIndex - eventsPerPage;
    const currentEvents = sortedEvents
      ? sortedEvents.slice(firstIndex, lastIndex)
      : null;
    const totalPages = sortedEvents
      ? Math.ceil(sortedEvents.length / eventsPerPage)
      : null;

    //style pagination form
    //list mapping
    const list = currentEvents
      ? currentEvents.map((event) => {
          return (
            <div className="eventList" key={event.id}>
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
        })
      : null;

    //render return
    return (
      <div>
        <div className="eventList">
          Page: {currentPage} of {totalPages}
        </div>
        {list}
        <div>
          <InputGroup>
            <Button
              type="button"
              variant="outline-info"
              disabled={currentPage === 1 ? true : false}
              onClick={this.firstPage}
            >
              First
            </Button>
            <Button
              type="button"
              variant="outline-info"
              disabled={currentPage === 1 ? true : false}
              onClick={this.prevPage}
            >
              Previous
            </Button>
            <FormControl
              className="pageNum"
              value={currentPage}
              name="currentPage"
              onChange={this.changePage}
            />
            <Button
              type="button"
              variant="outline-info"
              disabled={currentPage === totalPages ? true : false}
              onClick={this.nextPage}
            >
              Next
            </Button>
            <Button
              type="button"
              variant="outline-info"
              disabled={currentPage === totalPages ? true : false}
              onClick={this.lastPage}
            >
              Last
            </Button>
          </InputGroup>
        </div>
      </div>
    );
  }
}
