import { combineReducers } from "redux";
import user from "./user";
import events from "./events";
import event from "./event";
import tickets from "./tickets";
import ticket from "./ticket";

export default combineReducers({
  user,
  events,
  event,
  tickets,
  ticket
});
