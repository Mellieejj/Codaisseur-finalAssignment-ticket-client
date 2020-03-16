import { JWT } from "../actions";

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
