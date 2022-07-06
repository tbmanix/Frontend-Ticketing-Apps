import { combineReducers } from "redux";
import movie from "./movie";
import schedule from "./schedule";
import user from "./user";
import manageMovie from "./manageMovie";
import booking from "./booking";

export default combineReducers({
  movie,
  schedule,
  user,
  manageMovie,
  booking
});
