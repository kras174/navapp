import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { logout } from "../actions/loginActions";

class Profile extends Component {
  onClickHandler = () => {
    this.props.logout();
  };

  renderTemplate = () => {
    return <h1>Личный кабинет</h1>;
  };

  render() {
    const localS = localStorage.getItem("isLogin");

    if (localS === "true") {
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
