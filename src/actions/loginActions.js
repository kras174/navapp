export const LOGIN_GOOGLE_REQUEST = "LOGIN_GOOGLE_REQUEST";
export const LOGIN_GOOGLE_SUCCESS = "LOGIN_GOOGLE_SUCCESS";
export const LOGOUT_GOOGLE_SUCCES = "LOGOUT_GOOGLE_SUCCES";

export function AuthGoogle() {
  return (dispatch, getState) => {
    const { isLogin } = getState().login;
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
