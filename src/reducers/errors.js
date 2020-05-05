import { ERROR_MESSAGE, REMOVE_ERROR } from "../actions/userActions";

const initialState = "";

export default function (state = initialState, action) {
  switch (action.type) {
    case ERROR_MESSAGE:
      return action.payload;

    case REMOVE_ERROR:
      return (state = "");

    default:
      return state;
  }
}
