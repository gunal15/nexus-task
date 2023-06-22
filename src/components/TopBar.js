import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaHamburger } from "react-icons/fa";

const TopBar = () => {
  return (
    <header className="top-bar">
      <nav>
        <NavLink to="/menu" className="nav-link" activeClassName="active">
          <FaHamburger size={24} />
          Menu
        </NavLink>
        <NavLink exact to="/" className="nav-link" activeClassName="active">
          <FaHome size={24} />
          Home
        </NavLink>
      </nav>
    </header>
  );
};

export default TopBar;
