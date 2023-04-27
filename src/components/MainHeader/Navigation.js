import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink to="read"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >Read</NavLink>
        </li>
        <li>
          <NavLink to="/edit">Edit</NavLink>
        </li>
        <li>
          <NavLink to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >Check</NavLink>
        </li>
        <li>
          <button >Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
