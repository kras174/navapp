import React, { Component } from "react";
import { connect } from "react-redux";

class Profile extends Component {
  renderTemplate = () => {
    return <h1>Личный кабинет</h1>;
  };

  render() {
    return <React.Fragment>{this.renderTemplate()}</React.Fragment>;
  }
}

const mapStateToProps = (store) => {
  return {
    login: store.login,
    profile: store.profile,
  };
};

export default connect(mapStateToProps)(Profile);
