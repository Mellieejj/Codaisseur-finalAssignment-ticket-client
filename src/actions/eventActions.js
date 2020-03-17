import request from "superagent";

const baseUrl = "http://localhost:4000";

//all events
export const ALL_EVENTS = "ALL_EVENTS";

function allEvents(payload) {
  return {
    type: ALL_EVENTS,
    payload
  };
}

export const getEvents = () => (dispatch, getState) => {
  const state = getState();
  const { events } = state;

  if (!events.length) {
    request(`${baseUrl}/events`)
      .then(response => {
        const action = allEvents(response.body);
        dispatch(action);
      })
      .catch(console.error);
  }
};

export const NEW_EVENT = "NEW_EVENT";

function newEvent(payload) {
  return {
    type: NEW_EVENT,
    payload
  };
}

export const createEvent = data => (dispatch, getState) => {
  const state = getState();
  const { user } = state;

  request
    .post(`${baseUrl}/events`)
    .set(`Authorization`, `Bearer ${user.jwt}`)
    .send(data)
    .then(response => {
      const action = newEvent(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

export const EVENT_FETCHED = "EVENT_FETCHED";

const eventFetched = event => {
  // console.log("logging user", user);
  return {
    type: EVENT_FETCHED,
    payload: event
  };
};

export const loadEvent = id => dispatch => {
  request
    .get(`${baseUrl}/events/${id}`)
    .send(id)
    .then(response => {
      // console.log("loadUser", response.body);

      dispatch(eventFetched(response.body));
    })
    .catch(console.error);
};
