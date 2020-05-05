import { combineReducers } from "redux";
import user from "./user";
import users from "./users";
import events from "./events";
import event from "./event";
import tickets from "./tickets";
import ticket from "./ticket";
import comments from "./comments";
import errors from "./errors";

export default combineReducers({
  user,
  users,
  events,
  event,
  tickets,
  ticket,
  comments,
  errors,
});
