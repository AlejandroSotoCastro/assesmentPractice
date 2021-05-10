import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink activeStyle={{ fontWeight: "bold" }} to="/" exact>
        Home
      </NavLink>
      {" | "}
      <NavLink activeStyle={{ fontWeight: "bold" }} to="/onDuty">
        Doctor Schedule
      </NavLink>
      {" | "}
      <NavLink activeStyle={{ fontWeight: "bold" }} to="/signup">
        Patient Signup
      </NavLink>
      {" | "}
      <NavLink activeStyle={{ fontWeight: "bold" }} to="/details">
        Patient Database
      </NavLink>
    </div>
  );
}
