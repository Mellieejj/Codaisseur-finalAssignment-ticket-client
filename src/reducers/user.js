import { JWT } from "../actions/userActions";

const initialState = {};
export default function(state = initialState, action) {
  switch (action.type) {
    case JWT: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
