import { NEW_TICKET } from "../actions/ticketActions";

const initialState = [];

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case NEW_TICKET: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
}
