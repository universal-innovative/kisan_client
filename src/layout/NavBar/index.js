import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./index.css";

import logo from "../../assets/nav/logo.png";

NavBar.propTypes = {};

function NavBar(props) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {}, []);

  return (
    <nav className="navbar">
      <div className="nav-icon" onClick={() => navigate("/page-1")}>
        <img src={logo} alt="logo" />
      </div>

      <ul className="navbar-ul">
        <li className={"navbar-li"}>
          <button
            style={{
              backgroundColor: (location.pathname = "contacts"
                ? "#F02626"
                : "#f0f0f0"),
              color: (location.pathname = "contacts" ? "#f0f0f0" : "#000000"),
            }}
            onClick={() => navigate(`/contacts`)}
          >{`Contacts`}</button>
        </li>
        <li className={"navbar-li"}>
          <button
            style={{
              backgroundColor: (location.pathname = "messages"
                ? "#F02626"
                : "#f0f0f0"),
              color: (location.pathname = "messages" ? "#f0f0f0" : "#000000"),
            }}
            onClick={() => navigate(`messages`)}
          >{`Messages`}</button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
