import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink className="NavBar-Link" exact to="/">
        Home
      </NavLink>
      <NavLink className="NavBar-Link" exact to="/chips">
        Chips
      </NavLink>
      <NavLink className="NavBar-Link" exact to="/cupcakes">
        Cupcakes
      </NavLink>
      <NavLink className="NavBar-Link" exact to="/soda">
        Soda
      </NavLink>
    </nav>
  )
}

export default NavBar;