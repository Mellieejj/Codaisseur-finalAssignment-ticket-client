import { NEW_COMMENT } from "../actions/commentActions";

const initialState = [];

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case NEW_COMMENT: {
      return [...state, action.payload];
    }

    default:
      return state;
  }
}
