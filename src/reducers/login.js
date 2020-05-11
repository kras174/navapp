import { LOGIN_REQUEST, LOGIN_SUCCES, LOGIN_ERROR } from "../actions/loginActions";

const initialState = {
  isLogin: false,
  error: "",
};

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLogin: false, error: "" };
    case LOGIN_SUCCES:
      return { ...state, isLogin: action.payload };
    case LOGIN_ERROR:
      return { ...state, isLogin: action.payload, error: action.error };
    default:
      return state;
  }
}
