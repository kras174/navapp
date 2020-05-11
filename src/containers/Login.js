import React, { Component } from "react";
import { connect } from "react-redux";

class Login extends Component {
  render() {
    const { login, password } = this.props;
    console.log(`Login: ${login} and password: ${password}`);
    return <h1>Авторизация</h1>;
  }
}

const mapStateToProps = (store) => {
  return {
    login: store.login,
  };
};

export default connect(mapStateToProps)(Login);
