import {
  LOGIN_REQUEST,
  LOGIN_SUCCES,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  LOGIN_GOOGLE_REQUEST,
  LOGIN_GOOGLE_SUCCESS,
  LOGOUT_GOOGLE_SUCCES,
} from "../actions/loginActions";

const initialState = {
  userName: "",
  avatar: null,
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
    case LOGOUT_SUCCESS:
      return { ...state, isLogin: false };
    case LOGIN_GOOGLE_REQUEST:
      return { ...state, isLogin: false, error: "" };
    case LOGIN_GOOGLE_SUCCESS:
      return { ...state, isLogin: true, userName: action.payload.userName, avatar: action.payload.avatar };
    case LOGOUT_GOOGLE_SUCCES:
      return { ...state, isLogin: false, userName: "", avatar: null };
    default:
      return state;
  }
}
