import { combineReducers } from "redux";
import user from "./user";
import events from "./events";
import event from "./event"

export default combineReducers({
  user,
  events,
  event

});
