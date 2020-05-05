import { ALL_USERS } from "../actions/userActions";

const initialState = [];

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case ALL_USERS: {
      return action.payload;
    }
    default:
      return state;
  }
}
