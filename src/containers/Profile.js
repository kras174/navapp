import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Profile extends Component {
  renderTemplate = () => {
    return <h1>Личный кабинет</h1>;
  };

  render() {
    if (this.props.login.isLogin) {
      return <React.Fragment>{this.renderTemplate()}</React.Fragment>;
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

export default connect(mapStateToProps)(Profile);
