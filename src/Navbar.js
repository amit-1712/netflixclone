import React from "react";
import "./Navbar.css";
import { Icon } from "@iconify/react";

function Navbar() {
  return (
    <div className={`nav`}>
      <Icon icon="logos:netflix" className="nav_logo" />
      <div className="nav_buttons">
        <button className="nav_button_login">Login</button>
        <button className="nav_button_signup">Sign In</button>
      </div>
    </div>
  );
}

export default Navbar;
 