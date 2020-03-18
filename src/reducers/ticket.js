import { TICKET_FETCHED, TICKET_UPDATED } from "../actions/ticketActions";

const initialState = [];

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case TICKET_FETCHED: {
      return action.payload;
    }
    case TICKET_UPDATED: {
      return action.payload
    }
    default:
      return state;
  }
}
