import React from "react";
import { NavLink } from "react-router-dom";

export default function TopMenu() {
  return (
    <div className="top-menu">
      <NavLink className="top-menu-link" exact to="/">
        Главная
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
