import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useAuth } from "../store/Auth";

const Navbar = () => {
  const { isLoggedIN } = useAuth();

  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <NavLink to="/">Logo</NavLink>
          </div>
          <nav>
            <ul>
              {isLoggedIN ? (
                <>
                  <li>
                    <NavLink to="/home">Home </NavLink>
                  </li>
                  <li>
                    <NavLink to="/logout"> Logout</NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/">Register </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login">Login </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
