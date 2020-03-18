import NEW_COMMENT from "../actions/commentActions"

const initialState = []

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case NEW_COMMENT: {
      return [action.payload, ...state];
    }

    default:
      return state;
  }
}