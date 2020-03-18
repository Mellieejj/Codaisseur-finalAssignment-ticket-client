import { TICKET_FETCHED } from "../actions/ticketActions";

const initialState = []

export default function(state = initialState , action = {}) {
  switch (action.type) {
    case TICKET_FETCHED: {
      return action.payload
    }
    default:
      return state;
  }
}
