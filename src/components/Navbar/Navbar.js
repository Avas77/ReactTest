import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar-body">
      <div className="navbar-title">
        <h1>
          <Link className="main_name" to="/">
            UserInfo
          </Link>
        </h1>
      </div>
      <div className={isOpen ? "navbar-options show-text" : "navbar-options"}>
        <h2>
          <Link className="main_name" to="/profiles">
            UserList
          </Link>
        </h2>
      </div>
      <div className="burger" onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon />
      </div>
    </div>
  );
}
