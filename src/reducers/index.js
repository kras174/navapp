import { combineReducers } from "redux";
import { loginReducer } from "./login";
import { newsReducer } from "./news";

export const rootReducer = combineReducers({
  login: loginReducer,
  news: newsReducer,
});
