export const LOGIN_SUCCES = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export const LOGIN_GOOGLE_REQUEST = "LOGIN_GOOGLE_REQUEST";
export const LOGIN_GOOGLE_SUCCESS = "LOGIN_GOOGLE_SUCCESS";
export const LOGOUT_GOOGLE_SUCCES = "LOGOUT_GOOGLE_SUCCES";

export function Auth(login, password) {
  return (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    if (login === "Admin" && password === "12345") {
      dispatch({
        type: LOGIN_SUCCES,
        payload: true,
      });
    } else {
      dispatch({
        type: LOGIN_ERROR,
        payload: false,
        error: "Имя пользователя или пароль введены не верно",
      });
    }
  };
}

export function AuthGoogle() {
  return (dispatch, getState) => {
    const { isLogin } = getState().login;
    console.log("getState!!!!!!!!!!" + isLogin);
    dispatch({ type: LOGIN_GOOGLE_REQUEST });
    const auth2 = window.gapi.auth2.getAuthInstance();
    if (!isLogin) {
      auth2.signIn().then((googleUser) => {
        const profile = googleUser.getBasicProfile();
        dispatch({
          type: LOGIN_GOOGLE_SUCCESS,
          payload: {
            userName: profile.getName(),
            avatar: profile.getImageUrl(),
          },
        });
      });
    } else {
      auth2.signOut().then(() => {
        dispatch({ type: LOGOUT_GOOGLE_SUCCES });
      });
    }
  };
}

export function logout() {
  return {
    type: LOGOUT_SUCCESS,
  };
}
