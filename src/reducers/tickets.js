import { NEW_TICKET, ALL_TICKETS } from "../actions/ticketActions";

const initialState = [];

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case ALL_TICKETS: {
      return action.payload
    }
    case NEW_TICKET: {
      return [...state, action.payload];
    }

    default:
      return state;
  }
}
