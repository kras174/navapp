import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class TopMenu extends Component {
  render() {
    const redirectTo = this.props.login.isLogin ? "/profile" : "/login";

    return (
      <div className="top-menu">
        <NavLink className="top-menu-link" exact to="/">
          На главную
        </NavLink>
        <NavLink className="top-menu-link" to="/news">
          Новости
        </NavLink>
        <NavLink className="top-menu-link" to={redirectTo}>
          Профиль
        </NavLink>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return { login: store.login };
};

export default connect(mapStateToProps)(TopMenu);
