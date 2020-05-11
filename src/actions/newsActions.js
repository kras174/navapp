import { NEWSAPI } from "../api/api";

export const NEWS_REQUEST = "NEWS_REQUEST";
export const NEWS_SUCCESS = "NEWS_SUCCESS";
export const NEWS_ERROR = "NEWS_ERROR";

export function loadNews() {
  return async function (dispatch) {
    dispatch({
      type: NEWS_REQUEST,
    });

    const API_ROOT = `http://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWSAPI}`;

    const response = await fetch(API_ROOT);
    const json = await response.json();

    if (json.status === "ok") {
      dispatch({
        type: NEWS_SUCCESS,
        payload: json,
      });
    } else {
      dispatch({
        type: NEWS_ERROR,
        payload: new Error("Ошибка загрузки"),
      });
    }
  };
}
