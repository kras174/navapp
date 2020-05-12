import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { logout, AuthGoogle } from "../actions/loginActions";

class Profile extends Component {
  onClickHandler = () => {
    this.props.authGoogle();
    this.props.logout();
  };

  renderTemplate = () => {
    console.log("Render profile!"); // Пофиксить многократный рендер
    return <h1>Личный кабинет</h1>;
  };

  render() {
    const { login } = this.props;
    if (login.isLogin) {
      return (
        <React.Fragment>
          {this.renderTemplate()}{" "}
          <button className="login-button" onClick={this.onClickHandler}>
            ВЫЙТИ
          </button>
        </React.Fragment>
      );
    }
    return <Redirect to="/login" />;
  }
}

const mapStateToProps = (store) => {
  return {
    login: store.login,
    profile: store.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    authGoogle: (isLogin) => dispatch(AuthGoogle(isLogin)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
