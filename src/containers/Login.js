import React, { Component } from "react";
import { connect } from "react-redux";
import { Auth, AuthGoogle } from "../actions/loginActions";
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

  onClickHandler = (e) => {
    e.preventDefault();
    this.props.auth(this.state.login, this.state.password);
  };
  onGoogleClickHandler = (e) => {
    e.preventDefault();
    this.props.authGoogle();
  };
  changeHandler = (e) => {
    const { id, value } = e.currentTarget;
    this.setState({
      [id]: value,
    });
  };
  validate = () => {
    const { login, password } = this.state;
    if (login.trim() && password.trim()) {
      return true;
    }
    return false;
  };
  renderTemplate = () => {
    console.log("Render auth!"); // Пофиксить многократный рендер
    const { login } = this.props;
    return (
      <React.Fragment>
        <h1>Авторизация</h1>
        <form className="login-form">
          <input id="login" className="login-username" type="text" placeholder="Логин" value={this.state.login} onChange={this.changeHandler} />
          <input
            id="password"
            className="login-password"
            type="text"
            placeholder="Пароль"
            value={this.state.password}
            onChange={this.changeHandler}
          />
          <button className="login-button" disabled={!this.validate()} onClick={this.onClickHandler}>
            ВОЙТИ
          </button>
        </form>
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
    auth: (login, password) => dispatch(Auth(login, password)),
    authGoogle: (isLogin) => dispatch(AuthGoogle(isLogin)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
