import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/sheet">SpreadSheet</NavLink>
        </li>
        <li>
          <NavLink to="/img">Image</NavLink>
        </li>
        <li>
          <NavLink to="/google">Google</NavLink>
        </li>
        <li>
          <NavLink to="/frame">Frames</NavLink>
        </li>
        <li>
          <NavLink to="/font">Font</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
