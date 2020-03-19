import { combineReducers } from "redux";
import user from "./user";
import events from "./events";
import event from "./event";
import tickets from "./tickets";
import ticket from "./ticket";
import comments from "./comments";
import errors from "./errors";

export default combineReducers({
  user,
  events,
  event,
  tickets,
  ticket,
  comments,
  errors
});
