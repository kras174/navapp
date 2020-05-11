import { combineReducers } from "redux";
import { loginReducer } from "./login";
import { newsReducer } from "./news";
import { profileReducer } from "./profile";

export const rootReducer = combineReducers({
  login: loginReducer,
  news: newsReducer,
  profile: profileReducer,
});
