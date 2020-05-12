import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { AuthGoogle } from "../actions/loginActions";

class Profile extends Component {
  onClickHandler = () => {
    this.props.authGoogle();
  };

  renderTemplate = () => {
    const { login } = this.props;
    return (
      <React.Fragment>
        <h1>Личный кабинет</h1>;
        <img src={login.avatar} alt="avatar" />
        <p>Привет, {login.userName}</p>
      </React.Fragment>
    );
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authGoogle: (isLogin) => dispatch(AuthGoogle(isLogin)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
