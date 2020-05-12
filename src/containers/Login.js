import React, { Component } from "react";
import { connect } from "react-redux";
import { AuthGoogle } from "../actions/loginActions";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    login: "",
    password: "",
  };

  componentDidMount() {
    const _onInit = (auth2) => {
      console.log("init OK", auth2);
    };
    const _onError = (err) => {
      console.log("error", err);
    };
    window.gapi.load("auth2", () => {
      window.gapi.auth2.init({ client_id: process.env.REACT_APP_GOOGLE_AUTH_KEY }).then(_onInit, _onError);
    });
  }

  onGoogleClickHandler = (e) => {
    e.preventDefault();
    this.props.authGoogle();
  };

  renderTemplate = () => {
    console.log("Render auth!"); // Пофиксить многократный рендер
    const { login } = this.props;
    return (
      <React.Fragment>
        <h1>Авторизация</h1>
        {!login.isLogin && (
          <button className="login-button" onClick={this.onGoogleClickHandler}>
            LOGIN with Google
          </button>
        )}

        <p className="error-text">{this.props.login.error}</p>
      </React.Fragment>
    );
  };

  render() {
    const { login } = this.props;
    if (!login.isLogin) {
      return <div className="login container">{this.renderTemplate()}</div>;
    }
    return <Redirect to="/profile" />;
  }
}

const mapStateToProps = (store) => {
  return {
    login: store.login,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authGoogle: (isLogin) => dispatch(AuthGoogle(isLogin)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
