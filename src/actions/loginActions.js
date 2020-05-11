export const LOGIN_SUCCES = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export function Auth(login, password) {
  return (dispatch) => {
    dispatch(authRequest());
    if (login === "Admin" && password === "12345") {
      localStorage.setItem("isLogin", "true");
      dispatch(authSuccess());
    } else {
      dispatch(authError());
    }
  };
}
export function authRequest() {
  return {
    type: LOGIN_REQUEST,
  };
}

export function authSuccess() {
  return {
    type: LOGIN_SUCCES,
    payload: true,
  };
}

export function authError() {
  return {
    type: LOGIN_ERROR,
    payload: false,
    error: "Имя пользователя или пароль введены не верно",
  };
}

export function logout() {
  localStorage.setItem("isLogin", "false");
  return {
    type: LOGOUT_SUCCESS,
  };
}
