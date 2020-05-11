import { NEWS_ERROR, NEWS_SUCCESS, NEWS_REQUEST } from "../actions/newsActions";

const initialState = {
  newsList: [],
  isFetching: true,
  error: "",
};

export function newsReducer(state = initialState, action) {
  switch (action.type) {
    case NEWS_REQUEST:
      return { ...state, isFetching: true, error: "" };
    case NEWS_SUCCESS:
      return { ...state, isFetching: false, newsList: action.payload };
    case NEWS_ERROR:
      return { ...state, isFetching: false, error: action.payload.message };
    default:
      return state;
  }
}
