import { NEW_COMMENT, ALL_COMMENTS } from "../actions/commentActions";

const initialState = [];

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case ALL_COMMENTS: {
      return action.payload;
    }
    case NEW_COMMENT: {
      return [...state, action.payload];
    }

    default:
      return state;
  }
}
