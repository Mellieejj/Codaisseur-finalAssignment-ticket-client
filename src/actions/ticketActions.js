import request from "superagent";

const baseUrl = "http://localhost:4000";

export const ALL_TICKETS = "ALL_TICKETS";

function allTickets(payload) {
  return {
    type: ALL_TICKETS,
    payload
  };
}

export const getTickets = () => (dispatch, getState) => {
  const state = getState();
  const { tickets } = state;

  if (!tickets.length) {
    request(`${baseUrl}/tickets`)
      .then(response => {
        const action = allTickets(response.body);
        dispatch(action);
      })
      .catch(console.error);
  }
};

export const NEW_TICKET = "NEW_TICKET";

function newTicket(payload) {
  return {
    type: NEW_TICKET,
    payload
  };
}

export const createTicket = data => (dispatch, getState) => {
  const state = getState();
  const { user } = state;

  request
    .post(`${baseUrl}/tickets`)
    .set(`Authorization`, `Bearer ${user.jwt}`)
    .send(data)
    .then(response => {
      const action = newTicket(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

export const TICKET_FETCHED = "TICKET_FETCHED";

const ticketFetched = ticket => {
  return {
    type: TICKET_FETCHED,
    payload: ticket
  };
};

export const loadTicket = ticketId => dispatch => {
  request
    .get(`${baseUrl}/tickets/${ticketId}`)
    .send(ticketId)
    .then(response => {
      dispatch(ticketFetched(response.body));
    })
    .catch(console.error);
};

export const TICKET_UPDATED = "TICKET_UPDATED";

const ticketUpdated = ticket => ({
  type: TICKET_UPDATED,
  payload: ticket
});

export const updateTicket = (id, data) => (dispatch, getState) => {
  const state = getState();
  const { user } = state;
  console.log("data", data);
  request
    .put(`${baseUrl}/tickets/${id}`)
    .set(`Authorization`, `Bearer ${user.jwt}`)
    .send(data)
    .then(res => {
      dispatch(ticketUpdated(res.body));
    })
    .catch(console.error);
};
