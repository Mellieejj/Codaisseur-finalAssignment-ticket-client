import { ALL_EVENTS, NEW_EVENT } from "../actions/eventActions";

const initialState = [];

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case ALL_EVENTS: {
      return action.payload;
    }
    case NEW_EVENT: {
      return [...state, action.payload];
    }

    default:
      return state;
  }
}
