import React, { Component } from "react";
import { connect } from "react-redux";
import { Auth } from "../actions/loginActions";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    login: "",
    password: "",
  };

  onClickHandler = (e) => {
    e.preventDefault();
    this.props.auth(this.state.login, this.state.password);
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
    return (
      <React.Fragment>
        <h1>Авторизация</h1>
        {this.loginForm}
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
        <p className="error-text">{this.props.login.error}</p>
      </React.Fragment>
    );
  };
  render() {
    const localS = localStorage.getItem("isLogin");

    if (localS === "false") {
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
