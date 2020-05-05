import { EVENT_FETCHED } from "../actions/eventActions";

const initialState = [];

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case EVENT_FETCHED: {
      return action.payload;
    }
    default:
      return state;
  }
}
