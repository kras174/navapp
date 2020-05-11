import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class TopMenu extends Component {
  render() {
    return (
      <div className="top-menu">
        <NavLink className="top-menu-link" exact to="/">
          На главную
        </NavLink>
        <NavLink className="top-menu-link" to="/news">
          Новости
        </NavLink>
        <NavLink className="top-menu-link" to="/profile">
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
